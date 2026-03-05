---
layout: distillpost
title: Guide to deploy Ray Cluster on GKE
date: 2026-02-28
description: A step-by-step production guide for Ray Cluster deployment distributed ML and LLM workloads
tags: ray google-cloud deployment
categories: machine-learning
featured: true
giscus_comments: false
related_posts: true
toc:
  sidebar: left
mermaid:
  enabled: true
  zoomable: true
authors:
  - name: Quan Nguyen
    affiliations:
      name: Venera AI
---

If you're building large-scale ML systems - distributed training, batch inference, or LLM serving with **vLLM** - combining **Kubernetes + Ray + GKE** gives you a powerful, production-ready stack.<d-footnote>See <a href="https://docs.ray.io/en/latest/cluster/kubernetes/index.html">Ray on Kubernetes</a>, <a href="https://docs.ray.io/en/latest/cluster/getting-started.html">Ray Clusters Overview</a>, and <a href="https://cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke">Ray on GKE</a> for official documentation.</d-footnote>

This post walks through:

- Architecture overview
- Setting up GKE (Standard vs Autopilot)
- Deploy Ray on Google Kubernetes Engine (GKE)  
- Configure GPU-enabled Ray clusters  
- Expose the Ray dashboard securely via Ingress  
- Manage dependencies with `uv`  
- Submit distributed jobs from your laptop or CI  
- Prepare your setup for production-grade scaling  

---

## Architecture Overview

At a high level:

* **Google Kubernetes Engine (GKE)** → Infrastructure & orchestration
* **Ray** → Distributed compute engine
* **PyTorch** → Model training
* **vLLM** → High-performance LLM serving

### How It All Fits Together

```mermaid
flowchart TD
    A[User / CI] -->|Submit Job| B(GKE Ingress)
    B --> C[Ray Head Pod]
    C --> D[Ray Workers]
    D --> E[GPU Nodes]
    C --> F[Ray Dashboard 8265]
    D --> G[PyTorch Training]
    D --> H[vLLM Serving]
```

---

### What Each Layer Does

| Layer   | Responsibility                            |
| ------- | ----------------------------------------- |
| GKE     | Provisions nodes, autoscaling, networking |
| KubeRay | Manages Ray clusters as CRDs              |
| Ray     | Schedules distributed jobs                |
| vLLM    | Fast LLM inference                        |
| PyTorch | Training & fine-tuning                    |

---

## Prepare Your Environment

```bash
export PROJECT_ID=<project_id>
export REGION=us-central1
export ZONE=us-central1-a
export CLUSTER_NAME=ray-cluster
export POOL_NAME=gpu-node-pool
export NAMESPACE=llm

gcloud config set project $PROJECT_ID
gcloud config set billing/quota_project $PROJECT_ID
gcloud services enable container.googleapis.com
```

Connect to your cluster after creation:

```bash
gcloud container clusters get-credentials $CLUSTER_NAME --location=$REGION
```

---

## Create a GKE Cluster

<aside><p><strong>GKE options:</strong> <a href="https://cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/enable-ray-on-gke">Enable Ray on GKE</a> · <a href="https://docs.ray.io/en/latest/cluster/kubernetes/user-guides/gcp-gke-gpu-cluster.html">Start GKE with GPUs for KubeRay</a> (Standard or Autopilot)</p></aside>

You have two options. Currently I have only worked on option B.

1. Option A - Autopilot (Managed Mode)

    Pros:

    * Less infrastructure management
    * Ray operator can be enabled directly

    ```bash
    gcloud container clusters create-auto $CLUSTER_NAME \
        --location=$REGION \
        --release-channel=rapid \
        --enable-ray-operator
    ```

    Autopilot currently has limitations with `--enable-ray-operator` in some regions.<d-footnote>Autopilot example: [Deploy Ray Serve Stable Diffusion on GKE](https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/tutorials/deploy-ray-serve-stable-diffusion#autopilot). ChatGPT guides: [Deploy RayCluster on GKE](https://chatgpt.com/share/6988d953-7834-800b-a8fd-1387e2bcedc3) · [RayCluster on GKE](https://chatgpt.com/share/6988d9ab-f750-800b-870b-f4b25bf6f281)</d-footnote>


1. Option B - Standard Cluster (More Control)

    Recommended for GPU-heavy ML workloads.<d-footnote>[AI/ML orchestration on GKE](https://cloud.google.com/kubernetes-engine/docs/integrations/ai-infra)</d-footnote>

    ```bash
    gcloud container clusters create $CLUSTER_NAME \
    --zone=$ZONE \
    --machine-type e2-standard-4 \
    --num-nodes=1 \
    --enable-autoscaling \
    --min-nodes=0 --max-nodes=2
    ```

---

### Add GPU Node Pool (NVIDIA L4 Example)

<aside><p><strong>GPU resources:</strong> <a href="https://docs.ray.io/en/latest/cluster/kubernetes/user-guides/gpu.html">Using GPUs</a> · <a href="https://docs.cloud.google.com/kubernetes-engine/docs/how-to/serve-llm-l4-ray">Serve an LLM on L4 GPUs with Ray</a></p></aside>

```bash
gcloud container node-pools create $POOL_NAME \
  --cluster=$CLUSTER_NAME \
  --zone=$ZONE \
  --accelerator type=nvidia-l4,count=1 \
  --machine-type g2-standard-4 \
  --enable-autoscaling \
  --min-nodes=0 --max-nodes=2
```

Verify GPU and device plugin:

```bash
kubectl get nodes -o=custom-columns='NAME:.metadata.name,GPU:.status.allocatable.nvidia\.com/gpu'
kubectl get pods -n kube-system -l k8s-app=nvidia-gpu-device-plugin
```

---

## Install KubeRay Operator (If Not Using Autopilot)

<aside><p><strong>Reference:</strong> <a href="https://github.com/ray-project/kuberay/tree/master/helm-chart/kuberay-operator">KubeRay Helm charts</a> · <a href="https://docs.ray.io/en/latest/cluster/kubernetes/user-guides/helm-chart-rbac.html">Helm Chart RBAC</a></p></aside>

```bash
helm repo add kuberay https://ray-project.github.io/kuberay-helm/
helm repo update

helm install kuberay-operator kuberay/kuberay-operator --version 1.5.1
```

Verify:

```bash
kubectl get pods
```

You should see `kuberay-operator` running.

**Note:** If you created the cluster with `--enable-ray-operator` (Autopilot), skip this step—the Ray operator is already installed.

---

### KubeRay kubectl-ray Plugin (Autopilot Only)

For Autopilot clusters with the GKE Ray add-on, you may need the KubeRay kubectl plugin:

```bash
# Check your KubeRay version (from CRD annotations)
kubectl get crd rayclusters.ray.io -o jsonpath='{.metadata.annotations}' ; echo

# Install kubectl-ray (replace v1.4.2 with your version)
curl -LO https://github.com/ray-project/kuberay/releases/download/v1.4.2/kubectl-ray_v1.4.2_linux_amd64.tar.gz
tar -xvf kubectl-ray_v1.4.2_linux_amd64.tar.gz
cp kubectl-ray ~/.local/bin

kubectl ray version
```

---

## Deploy a GPU-Enabled RayCluster

<aside><p><strong>Docs:</strong> <a href="https://docs.ray.io/en/latest/cluster/kubernetes/getting-started.html">Getting Started with KubeRay</a> · <a href="https://docs.ray.io/en/latest/cluster/kubernetes/user-guides/config.html">RayCluster Configuration</a></p></aside>

```bash
kubectl apply -f raycluster-gpu.yaml
```

Check status:

```bash
kubectl get rayclusters
kubectl get pods --selector=ray.io/cluster=raycluster-gpu
```

---

### RayCluster Internal Structure

```mermaid
flowchart TB
    subgraph GKE Cluster
        H[Ray Head Pod]
        W1[Worker Pod 1]
        W2[Worker Pod 2]
    end

    H --> W1
    H --> W2
    W1 --> GPU1[NVIDIA GPU]
    W2 --> GPU2[NVIDIA GPU]
```

---

## Access Ray Head Pod

```bash
export HEAD_POD=$(kubectl get pods \
  --selector=ray.io/node-type=head \
  -o custom-columns=POD:metadata.name --no-headers)

kubectl exec -it $HEAD_POD -- bash
```

---

## Expose Ray Dashboard (Port 8265) via GKE Ingress

<aside><p><strong>Reference:</strong> <a href="https://docs.ray.io/en/latest/cluster/kubernetes/k8s-ecosystem/ingress.html#gke-ingress-support">GKE Ingress support</a></p></aside>

GKE supports `gce` (external) and `gce-internal` ingress modes. For `gce-internal`, you must create a <a href="https://cloud.google.com/load-balancing/docs/proxy-only-subnets#proxy_only_subnet_create">Proxy-Only subnet</a>.

```bash
# Get Ray head service name, then update ray-dashboard-ingress.yaml
kubectl get svc

kubectl apply -f ray-dashboard-ingress.yaml
kubectl get ingress
```

After a few minutes, GKE assigns an external IP.

Visit:

```
http://<EXTERNAL_IP>
```

---

### Networking Flow

```mermaid
flowchart LR
    User --> Ingress
    Ingress --> RayHeadService
    RayHeadService --> RayHeadPod
    RayHeadPod --> RayWorkers
```

---

## Dependency Management with `uv`

Ray supports runtime environments.<d-footnote>Ray docs: <a href="https://docs.ray.io/en/latest/ray-core/handling-dependencies.html">Environment Dependencies</a></d-footnote>

**Important:** Local Python version must match the Ray image. For example, `rayproject/ray:2.53.0-gpu` uses Python 3.10.19.

---

### Use via ray.init() (Inside Ray Pods)

When running code directly inside the head/worker pod, use `runtime_env` with `uv`:

```bash
uv export --format requirements.txt -o requirements.txt
```

```python
# runtime_env expects requirements.txt, not pyproject.toml
ray.init(runtime_env={"uv": "./path/requirements.txt"})
```

---

### Pattern A (Best for Iteration): ray job submit ... -- uv run ...

Keep a repo locally (or on CI) with `pyproject.toml`, `uv.lock`, and your scripts. Submit from any machine that can reach the Ingress:

```bash
uv lock

ray job submit \
  --address="http://<INGRESS_IP_OR_DNS>:8265" \
  --no-wait \
  --working-dir . \
  -- uv run main.py
```

Ray uploads your working directory and installs dependencies. Use `--no-wait` for fire-and-forget, then:

```bash
ray job logs <job-id> --address="http://<INGRESS_IP_OR_DNS>:8265"
ray job status <job-id> --address="http://<INGRESS_IP_OR_DNS>:8265"
ray job stop <job-id> --address="http://<INGRESS_IP_OR_DNS>:8265"
```

**Tip:** Set `export RAY_API_SERVER_ADDRESS="http://<INGRESS_IP_OR_DNS>:8265"` to avoid passing `--address` every time.

---

### Remote working_dir (Avoid Local Upload)

Instead of `--working-dir .`, use a remote URI so Ray fetches code from GitHub or GCS:

| Source | Example |
| ------ | ------- |
| Public GitHub | `https://github.com/user/repo/archive/HEAD.zip` |
| Private GitHub | `https://user:TOKEN@github.com/user/repo/archive/HEAD.zip` |
| GCS | `gs://bucket/code.zip` |

Example with a subdirectory (e.g. `src/` in the repo):

```bash
ray job submit \
  --address="http://<INGRESS_IP_OR_DNS>:8265" \
  --working-dir "https://github.com/user/repo/archive/HEAD.zip" \
  -- uv run --directory src main_src.py
```

---

### Pattern B (Best for Production)

Bake dependencies into the image to avoid per-job installs:

```Dockerfile
FROM rayproject/ray-ml:2.x-gpu
COPY pyproject.toml uv.lock .
RUN uv sync --frozen
```

Use this image in your RayCluster for both head and workers. Then job submission can ship only code or parameters.

---

### Option 3: Remote Code Only (No Local Upload)

If you want to avoid uploading from your machine entirely:

1. Zip your repo (single top-level directory) and upload to GCS.
2. Submit with `--runtime-env-json` and `working_dir: "gs://bucket/code.zip"`:

```bash
ray job submit \
  --address="http://<INGRESS_IP_OR_DNS>:8265" \
  --runtime-env-json='{"working_dir": "gs://bucket/code.zip"}' \
  -- python main.py
```

---

### Production Workflow

```mermaid
flowchart TD
    Dev[Developer] -->|Push Code| GitHub
    GitHub --> CI
    CI -->|Build Image| GCR
    GCR -->|Deploy| GKE
    GKE --> RayCluster
```

---

## Submitting Jobs from Local / Different Machines (via Ingress)

<aside><p><strong>Job submission:</strong> <a href="https://docs.ray.io/en/latest/cluster/kubernetes/getting-started/rayjob-quick-start.html">RayJob Quickstart</a> · <a href="https://docs.ray.io/en/latest/cluster/running-applications/job-submission/quickstart.html">Ray Jobs CLI Quickstart</a></p></aside>

Submit from your laptop, another engineer's machine, or a CI runner—as long as it has the code and can reach `http://<INGRESS_IP>:8265`.

### 1. Install Ray CLI

```bash
uv tool install "ray[default]"   # runtime env feature requires ray[default]
```

### 2. Submit Options

| Option | Use case |
| ------ | -------- |
| **Local dir** | `--working-dir .` — uploads current directory |
| **Remote GitHub/GCS** | `--working-dir "https://github.com/user/repo/archive/HEAD.zip"` or `gs://bucket/code.zip` |
| **Subdirectory** | Add `-- uv run --directory src main.py` when code lives in a subdir |
| **No local upload** | `--runtime-env-json='{"working_dir": "gs://bucket/code.zip"}'` |

Example (local):

```bash
uv lock
ray job submit \
  --address="http://<INGRESS_IP>:8265" \
  --working-dir . \
  -- uv run main.py
```

Example (remote repo + subdirectory):

```bash
ray job submit \
  --address="http://<INGRESS_IP>:8265" \
  --working-dir "https://github.com/user/repo/archive/HEAD.zip" \
  -- uv run --directory src main.py
```

---

## Monitoring & Autoscaling

You should configure:

* Ray autoscaling
* Prometheus + Grafana
* Cloud Monitoring integration

Ray metrics default port: **8080**

---

## When Should You Use This Stack?

Use Ray + GKE when:
- Distributed training
- Multi-GPU LLM serving
- Batch inference pipelines
- Multi-team ML platform
- CI/CD for ML infra

Avoid if:
- Small experiments
- Single-node workloads
- No need for autoscaling

---

## Final Thoughts

Running **Ray on GKE** gives you:

* Kubernetes-native autoscaling
* GPU scheduling
* Production-ready LLM serving
* Distributed PyTorch training
* Clean job submission model

This stack scales from experimentation → production seamlessly.

<aside><p><strong>Video:</strong> <a href="https://www.youtube.com/watch?v=hdx0LHw7epg">Ray on GKE tutorial</a> on YouTube</p></aside>
