---
layout: book-review
title: Inference Engineering
author: Philip Kiely
cover: assets/img/book_covers/inference-engineering-cover.png
olid:  # use Open Library ID to fetch cover (if no `cover` is provided)
isbn: 9798994359716 # use ISBN to fetch cover (if no `olid` is provided, dashes are optional)
categories: machine-learning
tags: top-100
buy_link: 
date: 2026-03-01
started: 2026-03-01
finished: 
released: 2026
stars: 5
goodreads_review: 
status: interested # options: abandoned,finished,interested,paused,queued,reading,reread
---

Access free via [Philip Kiely's website](https://philipkiely.com/books) or [Baseten's website](https://www.baseten.co/inference-engineering/) (digital and paper copy available).

Inference is the most valuable category in AI, but inference engineering is still in its infancy.

Inference engineers work across the stack from CUDA to Kubernetes in pursuit of faster, less expensive, more reliable serving of generative AI models in production.

While the potential and impact of inference are becoming clear, the space is young. There are relatively few people working on inference, and newcomers can become experts quickly. There are opportunities to solve novel, interesting, and deeply technical problems at every level of the stack.

Inference Engineering is your guide to becoming an expert in inference. This book is based on the hundreds of thousands of words of documentation, blogs, and talks I've published on inference; interviews with dozens of experts from Baseten's engineering team; and countless conversations with customers and builders around the world.

{% details Chapter 1: Prerequisites %}
  - Scale and Specialization
  - About Your App
    - AI-Native Applications
    - Online versus Offline
    - Consumer versus B2B
  - Model Selection
    - Model Evaluation
    - Fine-Tuning for Domain-Specific Quality
    - Distillation
  - Measuring Latency and Throughput
    - Latency Percentiles
    - End-to-End Metrics
{% enddetails %}

{% details Chapter 2: Architecture %}
  - Neural Networks
    - Linear Layers and Matmul
    - Activation Functions
  - LLM Inference Mechanics
    - LLM Architecture
    - Transformer Blocks
    - Attention
    - Mixture of Experts Models
  - Image Generation Inference Mechanics
    - Image Generation Model Architecture
    - Few-Step Image Generation Models
    - Video Generation
  - Calculating Inference Bottlenecks
    - Ops:Byte Ratio and Arithmetic Intensity
    - LLM Inference Bottlenecks
    - Image Generation Inference Bottlenecks
  - Optimizing Attention
{% enddetails %}

{% details Chapter 3: Hardware %}
  - GPU Architecture
    - Compute
    - Memory and Caches
  - GPU Architecture Generations
    - Hopper GPUs
    - Ada Lovelace GPUs
    - Blackwell GPUs
    - Rubin GPUs
    - Grace and Vera CPUs
  - Instances
    - Multi-GPU Instances
    - Multi-Instance GPUs
  - Other Datacenter Accelerator Options
  - Local Inference
    - Desktop Inference
    - Mobile Inference
{% enddetails %}

{% details Chapter 4: Software %}
  - CUDA
    - CUDA Kernels for Inference
    - CUDA Kernel Selection
    - Reducing Memory Accesses with Kernel Fusion
  - Deep Learning Frameworks and Libraries
    - PyTorch
    - Model File Formats
    - ONNX Runtime and TensorRT
    - Transformers and Diffusers
  - Inference Engines
    - vLLM
    - SGLang
    - TensorRT-LLM
  - NVIDIA Dynamo
  - Performance Benchmarking and Load Testing
    - Performance Benchmarking Tooling
    - Performance Benchmarking Tips
    - Profiling Performance
{% enddetails %}

{% details Chapter 5: Techniques %}
  - Quantization
    - Number Formats
    - Quantization Approaches
    - Measuring Quality Impact
  - Speculative Decoding
    - Draft-Target Speculative Decoding
    - Medusa
    - EAGLE
    - N-gram Speculation and Lookahead Decoding
  - Caching
    - Prefix Caching and KV Cache Re-Use
    - Where to Store the KV Cache
    - Cache-Aware Routing
    - Long Context Handling
  - Model Parallelism
    - Tensor Parallelism for Lower Latency
    - Expert Parallelism for Higher Throughput
    - Multi-Node Inference
  - Disaggregation
    - How Disaggregation Works
    - When to Use Disaggregation
    - Dynamic Disaggregation with NVIDIA Dynamo
{% enddetails %}

{% details Chapter 6: Modalities %}
  - Vision Language Models
    - Video Processing for Vision Language Models
    - Omni-Modal Models
  - Embedding Models
    - Embedding Model Architecture
    - Embedding Model Inference
  - ASR Models
    - Single-Chunk Latency Optimization
    - Long File Latency Optimization
    - Diarization
  - TTS Models
    - Streaming Real-Time Text to Speech
    - Speech-to-Speech Models
  - Image Generation Models
    - Image Generation Kernel Optimization
    - One Weird Trick for Faster Image Generation
  - Video Generation Models
    - Attention Optimization and Quantization
    - Context Parallelism
{% enddetails %}

{% details Chapter 7: Production %}
  - Containerization
    - Dependency Management
    - NIMs
  - Autoscaling
    - Concurrency and Batch Sizing
    - Cold Starts
    - Routing, Load Balancing, and Queueing
    - Scale to Zero
    - Independent Component Scaling
  - Multi-Cloud Capacity Management
    - GPU Procurement
    - Geo-Aware Load Balancing
    - Building for Reliability
    - Security and Compliance
  - Testing and Deployment
    - Zero-Downtime Deployment
    - Cost Estimation
    - Observability
  - Client Code
    - Client Latency Overhead
    - Asynchronous Inference
    - Streaming and Protocol Support
  - Production Inference with Baseten
{% enddetails %}
