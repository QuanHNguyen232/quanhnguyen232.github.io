---
layout: distillpost
title: Brief of AI/ML coding interview questions (Leetcode style)
date: 2026-03-08
description: Some implementation examples for machine learning coding interview
tags: coding interview
categories: machine-learning
featured: false
giscus_comments: false
related_posts: true
tabs: true
toc:
  sidebar: left
mermaid:
  enabled: true
  zoomable: true
authors:
  - name: Quan Nguyen
    affiliations:
      name: N/A
---

Practice platforms
1. [tensortonic.com](https://www.tensortonic.com/): auto push to github
1. [deep-ml.com](https://www.deep-ml.com/)
1. [Github:TorchCode](https://github.com/duoan/TorchCode): provide advanced implementation (i.e: topK/topP sampling, KV Cache/Flash/Grouped Query/Multi-Head/etc. Attention, Speculative Decoding, RL loss)
More of my implementations can be found here: [Github: QuanHNguyen232/TensorTonic-Solutions](https://github.com/QuanHNguyen232/TensorTonic-Solutions)

## Backprop
{% highlight python linenos %}

N = 3
probs = np.random.randint(0, 10, (N, 10))
y = np.random.randint(0, 10, (N,))
probs, y, probs[np.arange(N), y]
# probs, probs[1: 2, ...]

epsilon = 1e-12
preds = probs[np.arange(N), y]
print(np.log(preds))
# 1.
loss = -1*np.mean(np.log(preds))
y_truth = np.zeros_like(probs)
y_truth[np.arange(N), y] = 1 # (N, out) == probs.shape
per_sample = np.sum(y_truth * np.log(probs + epsilon), axis=1) # (B,)
print(per_sample)
loss1 = -1 * np.mean(per_sample)
assert loss-loss1 <= 0.005, f"expect loss==loss1, but got {loss}(loss)!={loss1}(loss1)"

{% endhighlight %}

Complete code
{% highlight python linenos %}

import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def sigmoid_derivative(x):
    return x * (1 - x)

def single_neuron_backpropagation(features, labels, initial_weights, initial_bias, learning_rate, epochs):
    # Initialize weights and bias
    weights = initial_weights
    bias = initial_bias

    # Training loop
    for epoch in range(epochs):
        # Forward pass
        z = np.dot(features, weights) + bias
        y_pred = sigmoid(z)

        # Compute loss
        loss = np.mean((y_pred - labels) ** 2)

        # Backpropagation
        d_loss_d_ypred = 2 * (y_pred - labels)
        d_ypred_d_z = sigmoid_derivative(y_pred)
        d_z_d_w = features

        # Compute gradients
        d_loss_d_w = np.dot(d_z_d_w.T, d_loss_d_ypred * d_ypred_d_z)
        d_loss_d_b = np.sum(d_loss_d_ypred * d_ypred_d_z)

        # Update weights and bias
        weights -= learning_rate * d_loss_d_w
        bias -= learning_rate * d_loss_d_b

        # Print progress every 100 epochs
        if epoch % 100 == 0:
            print(f"Epoch {epoch}, Loss: {loss}")

    return weights, bias

# Example usage
np.random.seed(42)
features = np.random.randn(100, 3)  # 100 samples, 3 features
labels = np.random.randint(0, 2, 100)  # Binary labels
initial_weights = np.random.randn(3)
initial_bias = 0.0
learning_rate = 0.01
epochs = 1000

final_weights, final_bias = single_neuron_backpropagation(
    features, labels, initial_weights, initial_bias, learning_rate, epochs
)

print("Final weights:", final_weights)
print("Final bias:", final_bias)

# Test the trained neuron
def predict(features, weights, bias):
    return sigmoid(np.dot(features, weights) + bias)

test_features = np.random.randn(5, 3)  # 5 test samples
predictions = predict(test_features, final_weights, final_bias)
print("Predictions for test samples:", predictions)
####################################
def calculate_d_theta(X: list[list[float]], Y: list[float], Y_hat: list[float]) -> list[float]:
    m = len(Y)  # Number of training examples
    n = len(X[0])  # Number of features

    d_theta = [0.0] * (n + 1)  # +1 for the bias term

    for j in range(n + 1):
        for i in range(m):
            if j == 0:
                # For bias term (θ₀)
                d_theta[j] += Y_hat[i] - Y[i]
            else:
                # For other parameters (θ₁, θ₂, ..., θₙ)
                d_theta[j] += (Y_hat[i] - Y[i]) * X[i][j-1]

    # Average the gradients
    d_theta = [d / m for d in d_theta]

    return d_theta

{% endhighlight %}

## Gradient Descent (Linear Regression)

### Overview
Implement the missing code (denoted by ellipses).  
You **may not modify the pre-existing code**.

Your task is to implement parts of the **Gradient Descent optimization algorithm from scratch** (i.e., **without importing any libraries or packages**).

You will apply this algorithm to **linear regression**, finding the coefficients for the following equation:

$$
y = b + \theta_1 x_1 + \theta_2 x_2 + \cdots + \theta_m x_m
$$

---

### Gradient Descent Steps

#### Step 1: Initialize parameters
Randomly set initial values of:
- bias \( $b$ \)
- coefficients \( $\theta_i$ \)

---

#### Step 2: Predict output
Calculate the predicted value \( $\hat{y}$ \).

$$
\hat{y}_i = b + \sum_{k=1}^{m} \theta_k x_{ik}
$$

---

#### Step 3: Compute derivative with respect to bias
Calculate the partial derivative of the cost function with respect to bias.

Cost function:
$$
J = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2
$$

Derivative w.r.t. \( $b$ \):
$$
d_b
= \frac{\partial}{\partial b} \left( \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2 \right)
= -\frac{2}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)
$$

---

#### Step 4: Compute derivatives with respect to coefficients
Calculate the partial derivatives of the cost function with respect to each \( $\theta_k$ \).

$$
d_{\theta_k}
= \frac{\partial}{\partial \theta_k} \left( \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2 \right)
= -\frac{2}{n} \sum_{i=1}^{n} x_{ik} (y_i - \hat{y}_i)
$$

---

#### Step 5: Update parameters
Let \( $\alpha$ \) be the learning rate.

$$
b = b - \alpha d_b
$$
$$
\theta_k = \theta_k - \alpha d_{\theta_k}
$$

---

#### Step 6: Iterate
Repeat **Steps 2-5** for a fixed number of **iterations**.

---

#### Input / Output Description

You will be given:

- `x_train`: a two-dimensional array of floats  
  - Each subarray `x_train[i]` represents one training data point.
- `y_train`: a one-dimensional array of floats  
  - Each element is the true function value corresponding to `x_train[i]`.
- `x_test`: test data in the same format as `x_train`, **without labels**.

##### Task
1. Train the gradient descent model using `x_train` and `y_train`.
2. Use the trained model to predict function values for `x_test`.
3. Return the predictions.

---

#### Notes

- All training and test data are guaranteed to be floating-point values.
- The skeleton code for assigning and returning class labels has already been created.
- **Do not edit any code except inside the `# implement this` sections.**

---

#### Example

##### Input
```python
x_train = [
    [1.0],
    [2.0],
    [0.0],
    [-1.0],
    [3.0]
]

y_train = [2.0, 3.0, 1.0, 0.0, 4.0]

x_test = [
    [-2.0],
    [10.0]
]
```
the output should be `solution(x_train, y_train, x_test) = [-1.0, 11.0]`

### Code
{% tabs code-approach %}

{% tab code-approach For-loop %}
{% highlight python linenos %}
from typing import List
import random

def random_bias_theta(n_features: int) -> tuple[float, list[float]]:
    """
    STEP 1: Randomly set bias and theta
    """
    b = random.random()
    theta = [random.random() for _ in range(n_features)]
    return b, theta

def calculate_y(b: float, theta: list[float], x: list[float]) -> float:
    """
    STEP 2: Calculate predicted value of Y
    """
    # implement this
    y_hat = b + sum([x_ * theta_ for (x_, theta_) in zip(x, theta)])
    return y_hat

def calculate_d_b(Y: list[float], Y_hat: list[float]) -> float:
    """
    STEP 3: Calculate bias derivative
    """
    # implement this
    assert len(Y_hat) == len(Y), "len mismatch"
    n = len(Y_hat)
    grad = sum([y - y_hat for y, y_hat in zip(Y, Y_hat) ])
    return (-2/n) * grad

def calculate_d_theta(X: list[list[float]], Y: list[float], Y_hat: list[float]) -> list[float]:
    """
    STEP 4: Calculate theta derivative
    """
    # implement this
    assert len(Y_hat) == len(Y) and len(Y)==len(X), "len mismatch"
    m = len(X)
    n = len(X[0])
    grad = [0.0] * n

    for i in range(m):
        err = Y[i] - Y_hat[i]
        for j in range(n):
            grad[j] += err * X[i][j]

    for j in range(n):
        grad[j] *= (-2/m)
    return grad

def update(X: list[list[float]], Y: list[float], Y_hat: list[float], b_prev: float, theta_prev: list[float], learning_rate: float) -> tuple[float, list[float]]:
    """
    STEP 5: Update gradient and weights
    """
    d_theta = calculate_d_theta(X, Y, Y_hat)
    d_b = calculate_d_b(Y, Y_hat)
    # implement this
    b_new = b_prev - learning_rate * d_b

    n = len(theta_prev)
    theta_new = [0.0] * n
    for i in range(n):
        theta_new[i] = theta_prev[i] - learning_rate * d_theta[i]

    return b_new, theta_new

def fit(X: list[list[float]], Y: list[float], num_iterations: int, learning_rate: float = 0.2) -> tuple[float, list[float]]:
    """
    STEP 6: Pulling it together
    """
    b, theta = random_bias_theta(len(X[0]))
    for _ in range(num_iterations):
        # implement this
        Y_hat = [0.0] * len(Y)
        for i in range(len(Y)):
            Y_hat[i] = calculate_y(b, theta, x=X[i])
        b, theta = update(X, Y, Y_hat, b, theta, learning_rate)
    return b, theta


def solution(x_train: list[list[float]], y_train: list[float], x_test: list[list[float]], iterations: int = 1000) -> list[float]:
    random.seed(42)
    b, theta = fit(x_train, y_train, iterations)
    return [round(calculate_y(b, theta, x), 2) for x in x_test]
{% endhighlight %}
{% endtab %}

{% tab code-approach Vectorize %}
{% highlight python linenos %}
import numpy as np
import random

class LinearRegression:
    def random_bias_theta(self, n_features: int) -> tuple[float, np.ndarray]:
        """
        Randomly initialize bias (scalar) and theta (shape: [n_features]).
        """
        self.b = random.random()
        self.theta = np.random.rand(n_features)
        return self.b, self.theta

    def calculate_y(self, X: np.ndarray) -> np.ndarray:
        """
        Predict y_hat for a batch.
        X: (m, n)
        theta: (n,)
        returns: (m,)
        """
        return X @ self.theta + self.b

    def gradients(self, X: np.ndarray, Y: np.ndarray, Y_hat: np.ndarray) -> tuple[float, np.ndarray]:
        """
        Gradients for MSE: (1/m) * sum (Y - Y_hat)^2
        Using your exact derivative form:
        d_b     = (-2/m) * sum_i (Y_i - Yhat_i)
        d_theta = (-2/m) * X^T (Y - Yhat)
        """
        m = Y.shape[0]
        err = Y - Y_hat                      # (m,)
        self.d_b = float((-2.0 / m) * err.sum())  # scalar
        self.d_theta = (-2.0 / m) * (X.T @ err)   # (n, m) @ (m,) = (n,)
        return self.d_b, self.d_theta

    def update(self, learning_rate: float) -> tuple[float, np.ndarray]:
        b_new = self.b - learning_rate * self.d_b
        theta_new = self.theta - learning_rate * self.d_theta
        return b_new, theta_new

    def fit(self, X: list[list[float]] | np.ndarray,
            Y: list[float] | np.ndarray,
            num_iterations: int,
            learning_rate: float = 0.2,
            seed: int = 42) -> tuple[float, np.ndarray]:
        """
        Vectorized gradient descent for linear regression.
        """
        X = np.asarray(X, dtype=np.float64)  # (m, n)
        Y = np.asarray(Y, dtype=np.float64)  # (m,)

        if X.ndim != 2:
            raise ValueError(f"X must be 2D (m, n), got shape {X.shape}")
        if Y.ndim != 1:
            raise ValueError(f"Y must be 1D (m,), got shape {Y.shape}")
        if X.shape[0] != Y.shape[0]:
            raise ValueError(f"len mismatch: X has {X.shape[0]} rows, Y has {Y.shape[0]}")

        self.random_bias_theta(X.shape[1])

        for _ in range(num_iterations):
            Y_hat = self.calculate_y(X)        # (m,)
            self.d_b, self.d_theta = self.gradients(X, Y, Y_hat)   # scalar, (n,)
            self.b, self.theta = self.update(learning_rate)

        return self.b, self.theta

    def solution(self, x_train, y_train, x_test, iterations: int = 1000) -> list[float]:
        b, theta = self.fit(x_train, y_train, iterations, learning_rate=0.2, seed=42)
        X_test = np.asarray(x_test, dtype=np.float64)
        preds = b + X_test @ theta
        return [round(float(p), 2) for p in preds]
{% endhighlight %}
{% endtab %}

{% endtabs %}


## K-Nearest Neighbors (KNN)

{% highlight python linenos %}
def cal_dist(value1: List[float], value2: List[float]) -> float:
    # Step 1 Define distance metric
    #Implement this
    import math
    val = 0
    for a, b in zip(value1, value2):
        val += (a - b)**2
    return math.sqrt(val)

def kneighbors(k: int, x_train: List[List[float]],
               test_sample: List[float]) -> List[int]:
    # Step 2: Indentify indices of k nearest neighbors
    #Implement this
    import heapq
    arr = []
    for i, pt in enumerate(x_train):
        dist = cal_dist(pt, test_sample)
        # arr.append((dist, i))
        heapq.heappush(arr, (-dist, i))
        if len(arr) > k:
            _ = heapq.heappop(arr)
    # arr.sort(key=lambda x: x[0])
    #arr = arr[:k]
    #return [x[1] for x in arr]
    ans = []
    while arr:
        ans.append(heapq.heappop(arr)[1])
    return ans

def predict(k: int, x_train: List[List[float]], y_train: List[List[float]],
            test_sample: List[float]) -> int:
    # Step 3: Assign label
    # implement this
    from collections import Counter
    indices = kneighbors(k, x_train, test_sample)
    labels = [y_train[i] for i in indices]
    tmp = Counter(labels)
    return tmp.most_common(1)[0][0]

def solution(x_train: List[List[float]], y_train: List[List[float]],
             x_test: List[List[float]], k: int) -> List[int]:
    # Step 4: Pull it together
    return [predict(k, x_train, y_train, sample) for sample in x_test]


x_train = [
    [0., 2.],
    [10., 10.],
    [1., 0.],
    [7., 8.],
    [9., 1],
    [11., 0],
    [6., 10.],
    [-2., 1.],
    [8., 0.],
]
y_train = [0, 1, 0, 1, 2, 2, 1, 0, 2]
x_test = [
    [4., 4.],
    [5., 5.],
    [5., 4.]
]

ans = solution(x_train, y_train, x_test, 3)
print(ans)
{% endhighlight %}


## KMeans
{% highlight python linenos %}
from typing import List
import numpy as np
import matplotlib.pyplot as plt

PREV_CENTROIDS = None
ITERATION = 0

def my_cdist(data, centroids):
    def compute_distance(point, centroid):
        point = np.array(point)
        centroid = np.array(centroid)
        return np.linalg.norm(point - centroid)
    ans = []
    for i in range(len(data)):
        tmp = []
        for j in range(len(centroids)):
            distance = compute_distance(data[i], centroids[j])
            tmp.append(distance)
        ans.append(tmp)
    return np.array(ans)

def calculate_distance(data: List[List[float]], centroids: List[List[float]]) -> List[List[float]]:
    # Step 1: Calculate distance between each data point and the k centroids
    from scipy.spatial.distance import cdist
    # return cdist(data, centroids, "cosine").tolist()
    return cdist(data, centroids).tolist() # shape = (num_samples, k_centroids)
    # return my_cdist(data, centroids).tolist()


def get_clusters(data: List[List[float]], centroids: List[List[float]]) -> List[int]:
    # Step 2: Assign each data point to its nearest centroid
    distances = calculate_distance(data, centroids)
    distances = np.array(distances) # shape = (num_samples, k_centroids)
    # return [dist.index(min(dist)) for dist in distances]
    return np.argmin(distances, axis = 1).tolist() # shape = (num_samples)


def plot(data, new_centroids):
    clusters = get_clusters(data, new_centroids)
    plt.scatter(
        [x[0] for x in data] + [x[0] for x in new_centroids],
        [x[1] for x in data] + [x[1] for x in new_centroids],
        c = clusters + list(range(len(new_centroids)))
    )
    plt.show()


def update_clusters(clusters: List[int], data: List[List[float]], k: int) -> List[float]:
    """ Assume: k is num clusters
    Step 3: Average the data points in each cluster to update the centroids' locations
    """
    global PREV_CENTROIDS, ITERATION
    new_centroids = []


    for cluster_id in range(k):
        # get datapoints by cluster id
        cluster_points = [data[j] for j in range(len(data)) if clusters[j] == cluster_id]

        if cluster_points:
            new_centroid = [sum(dim) / len(cluster_points) for dim in zip(*cluster_points)]
            new_centroids.append(new_centroid)
        else:
            # If the cluster is empty, retain the previous centroid (or initialize to zero if it's the first iteration)
            # new_centroids.append(new_centroids[cluster_id] if cluster_id < len(new_centroids) else [5.0] * len(data[0]))
            new_centroids.append(PREV_CENTROIDS[cluster_id] if ITERATION > 0 else [0.0] * len(data[0]))

    PREV_CENTROIDS = new_centroids
    # plot(data, new_centroids)
    return get_clusters(data, new_centroids)


def fit_predict(data: List[List[float]], k: int, centroids: List[List[float]], iterations: int) -> List[int]:
    # Step 4: Pull everything together
    global PREV_CENTROIDS, ITERATION
    PREV_CENTROIDS = centroids

    clusters = get_clusters(data, centroids)
    for i in range(iterations):
        ITERATION = i
        clusters = update_clusters(clusters, data, k)

    return clusters
{% endhighlight %}

## Naive Bayes
{% highlight python linenos %}
# Not yet implemented
{% endhighlight %}

## Decision Tree

### Overview
Implement the missing code (denoted by ellipses).  
You **may not modify the pre-existing code**.

Your task is to implement parts of the **Decision Tree classification algorithm from scratch**
(i.e., **without importing any libraries or packages**).

As a reminder, **Decision Tree building** comprises the following **four major steps**.

---

### Decision Tree Building Steps

#### **Step 1: Build tree nodes**
- Inner (non-leaf) nodes contain:
  - a **feature index**
  - a **feature value** based on which the decision is made
- Leaf nodes contain:
  - a **class label** to predict

---

#### **Step 2: Find the best split**
For each tree node, find the **best split of samples** based on feature values.

---

#### **Step 3: Calculate entropy**
Entropy is used to measure the **purity of a split**, using the following formula:

$$
E = - \sum_{i=1}^{N} p_i \log_2 p_i
$$

where:
- $ p_i = \frac{N_i}{N} $
- $ N_i $ is the number of occurrences of class label in the labeled data
- $ N $ is the total number of samples

---

#### **Step 4: Calculate Information Gain**
The **Information Gain (IG)** of a split is computed as:

$$
IG
= E_{\text{parent}}
- \left(
\frac{l}{n} \cdot E_{\text{left}}
+ \frac{r}{n} \cdot E_{\text{right}}
\right)
$$

where:
- $ l $ is the number of samples in the **left child**
- $ r $ is the number of samples in the **right child**
- $ n = l + r $ is the total number of samples

---

### Prediction
To predict class labels of unlabeled samples:

1. Traverse the decision tree according to the information stored in the nodes.
2. Continue until a **leaf node** is reached.
3. Assign the class label stored in that leaf node.

---

### Input / Output Description

To validate the algorithm implementation, you will need to use it for classification tasks.

You will be given:

- `x_train`: a two-dimensional array of float values  
  - Each sub-array `x_train[i]` represents a unique training sample.
- `y_train`: a one-dimensional array of floats  
  - Each element represents the true class label corresponding to `x_train[i]`.
- `x_test`: test data in the same format as `x_train`, **without class labels**.

#### Task
1. Create a **Decision Tree** model using the training data.
2. Use the model to classify the test data.
3. Return the predicted class labels (float values) for the test data.

---

### Notes

- It is guaranteed that all training and test data are **float values**.
- The skeleton code for assigning and returning class labels has already been created.
- **Do not edit any code except inside the `# implement this` sections.**

{% highlight python linenos %}
import math
from typing import NamedTuple

class Node:
    """
    Just a dummy super-class for decision tree nodes
    """
    pass

class InnerNode(Node):
    """
    Represents an inner node of decision tree

    feature_idx - index of feature, basing on which value, decision is made
    split_value - split value of feature at feature_idx"
    left - left child
    right - right child
    """

    def __init__(self, feature_idx: int, split_value: float, left: Node, right: Node) -> None:
        self.feature_idx = feature_idx
        self.split_value = split_value
        self.left = left
        self.right = right

class LeafNode(Node):
    """
    Represents a leaf node of decision tree

    label - class label to assign to the processed semple
    """
    def __init__(self, label: int) -> None:
        self.label = label

class BestSplit(NamedTuple):
    """
    Represents the best split of a set of samples

    ig - information gain of the split
    feature_idx - index of feature used for the split
    split_value - value used as a split criteria
    left_indices - indicef of samples going to the left child
    right_indices - indices of samples going to the right child
    """
    ig: float = -math.inf
    feature_idx: int = 0
    split_value: float = 0.0
    left_indices: list[int] = []
    right_indices: list[int] = []

class DecisionTreeClassifier:
    def __init__(self):
        self.max_depth = 10

    def _build_node(self, x: list[list[float]], y: list[int], depth: int) -> Node:
        """
        Step 1: Recursively build tree nodes by splitting the remaining samples into two parts
        """
        n_samples = len(x)
        if n_samples > 2 and depth < self.max_depth:
            best_split = self._get_best_split(x, y)
            if best_split.ig > 0:
                left_x = [x[i] for i in best_split.left_indices]
                left_y = [y[i] for i in best_split.left_indices]
                right_x = [x[i] for i in best_split.right_indices]
                right_y = [y[i] for i in best_split.right_indices]
                left_child = self._build_node(left_x, left_y, depth + 1)
                right_child = self._build_node(right_x, right_y, depth + 1)
                return InnerNode(best_split.feature_idx, best_split.split_value, left_child, right_child)
        return LeafNode(label=max(sorted(y), key=y.count))

    def _get_best_split(self, x: list[list[float]], y: list[int]) -> BestSplit:
        """
        Step 2: Find the best split of the given set of samples
        """
        n_samples = len(x)
        n_features = len(x[0])
        best_split = BestSplit()
        # iterate over all features
        for feature in range(n_features):
            transposed_matrix = list(zip(*x))
            feature_values = transposed_matrix[feature]
            # try to split by all values of the feature
            for split_value in feature_values:
                left_indices = list(
                    filter(lambda i: x[i][feature] <= split_value, range(n_samples)))
                right_indices = list(
                    filter(lambda i: x[i][feature] > split_value, range(n_samples)))
                # if both left and right parts are not empty, calculate IG and save the best value
                if len(left_indices) > 0 and len(right_indices) > 0:
                    left_y = [y[i] for i in left_indices]
                    right_y = [y[i] for i in right_indices]
                    ig = self._calculate_ig(y, left_y, right_y)
                    if ig > best_split.ig:
                        best_split = BestSplit(ig, feature, split_value, left_indices, right_indices)
        return best_split

    @staticmethod
    def calculate_entropy(y: list[int]) -> float:
        """
        Step 3: Calculate entropy of labels 1ist
        """
        # implement this
        n = len(y)
        if n == 0:
            return 0.0

        # count label frequencies without any imports
        counts = {}
        for label in y:
            counts[label] = counts.get(label, 0) + 1

        entropy = 0.0
        for c in counts.values():
            pi = c / n
            entropy += pi * math.log2(pi)
        return (-1) * entropy

    @staticmethod
    def _calculate_ig(y_parent: list[int], y_left: list[int], y_right: list[int]):
        """
        Step 4: Calculate Information Gain of a split
        """
        # implement this
        n = len(y_parent)
        l = len(y_left)
        r = len(y_right)
        assert n == l+r

        if n == 0 or (l == 0 or r == 0): return 0.0

        e_parent = DecisionTreeClassifier.calculate_entropy(y_parent)
        e_left = DecisionTreeClassifier.calculate_entropy(y_left)
        e_right = DecisionTreeClassifier.calculate_entropy(y_right)

        ig = e_parent - (
            (l / n) * e_left
            + (r / n) * e_right
        )
        return ig


    def fit(self, x: list[list[float]], y: list[int]):
        """
        Builds the tree from the given samples
        """
        self.root = self._build_node(x, y, 0)

    def predict(self, x: list[list[float]]) -> list[int]:
        """
        Step 5: Traverse the tree and return a predicted class label from leaf node
        """
        preds = []
        for sample in x:
            # implement this
            node = self.root
            while isinstance(node, InnerNode):
                if sample[node.feature_idx] <= node.split_value:
                    node = node.left
                else:
                    node = node.right

            assert isinstance(node, LeafNode)
            preds.append(node.label)

        return preds

def solution(x_train: list[list[float]], y_train: list[int], x_test: list[list[float]]) -> list[int]:
    """
    Pull everything together
    """
    tree = DecisionTreeClassifier()
    tree.fit(x_train, y_train)
    return tree.predict(x_test)
{% endhighlight %}

## Boostrap
{% highlight python linenos %}
import numpy as np
from collections import Counter, defaultdict
from sklearn.base import ClassifierMixin
from typing import List
from random import randint, seed

# 1. Bootstrap sampling function
def bootsample(n: int) -> List[int]:
    """
    Perform sampling with replacement n times from the range [0, n-1].
    Returns a list of sampled indices.
    """
    indices = []
    for _ in range(n):
        indices.append(randint(0, n - 1))
    return indices

# 2. Fit multiple classifiers using bootstrap sampling
def fit(classifiers: List[ClassifierMixin], x: list, y: list) -> None:
    """
    Train each classifier on a different bootstrap sample of the data.

    classifiers: List of sklearn classifier instances.
    x: Features of the training data.
    y: Labels of the training data.
    """
    n = len(x)
    for clf in classifiers:
        # Get a bootstrap sample of the training data
        sample_indices = bootsample(n)
        x_sampled = x[sample_indices]
        y_sampled = y[sample_indices]

        # Fit the classifier on the sampled data
        clf.fit(x_sampled, y_sampled)

# Step 3: Predict with majority voting
def predict(classifiers: List[ClassifierMixin], x_test: list) -> List[int]:
    """
    Predict the class label for each instance in the test data using majority voting.

    classifiers: List of sklearn classifier instances.
    x_test: Test data features.

    Returns: List of predicted class labels.
    """
    predictions = []

    for x in x_test:
        votes = defaultdict(int)

        for clf in classifiers:
            label = clf.predict([x])[0]
            votes[label] += 1

        # majority vote, tie → smallest label
        best_label = min(votes.keys(), key=lambda k: (-votes[k], k))
        predictions.append(best_label)

    return predictions

# Step 4: Full pipeline
def solution(x_train: list, y_train: list, x_test: list, n_estimators: int):
    seed(42)
    classifiers = [DecisionTreeClassifier(random_state=0) for _ in range(n_estimators)]
    fit(classifiers, x_train, y_train)
    return predict(classifiers, x_test)
{% endhighlight %}

## Sampling Methods
### Top-K
{% highlight python linenos %}
import torch
import torch.nn.functional as F

def top_k_sampling(logits: torch.Tensor, k: int) -> torch.Tensor:
    """
    logits: (B, V)
    """
    B, V = logits.shape

    topk_vals, topk_idx = torch.topk(logits, k, dim=-1) # (B, k), (B, k)

    probs = F.softmax(topk_vals, dim=-1) # (B, k)
    pos = torch.multinomial(probs, num_samples=1) # (B, 1)

    token_ids = topk_idx.gather(dim=-1, index=pos).squeeze(1) # (B, 1) -> (B,)
    sampled_vals = topk_vals.gather(dim=-1, index=pos).squeeze(1) # (B, 1) -> (B,)

    return token_ids, sampled_vals

# logits = torch.randint(0, 10, (2, 5)).to(torch.float32)
logits = torch.tensor([
    [0, 1, 2, 3],
    [4, 3, 1, -1]
]).to(torch.float32)
print(logits)
k = 3
print(top_k_sampling(logits, k))
{% endhighlight %}

### Top-P
{% highlight python linenos %}
import torch
import torch.nn.functional as F

def top_p_sampling(logits: torch.Tensor, p: float) -> torch.Tensor:
    """
    logits: (B, V)
    """
    sorted_logits, sorted_idx = torch.sort(logits, dim=-1, descending=True) # (B, V)

    sorted_probs = F.softmax(sorted_logits, dim=-1) # (B, V)
    cumprobs = sorted_probs.cumsum(dim=-1) # (B, V)

    # Mask tokens where cumulative prob would exceed p
    cutoff_mask = cumprobs > p # (B, V)
    # shift 1 right so the first token above p is still kept
    cutoff_mask[..., 1:] = cutoff_mask[..., :-1].clone()
    cutoff_mask[..., 0] = False

    filtered_sorted_logits = sorted_logits.masked_fill(cutoff_mask, float('-inf')) # (B, V)

    probs = F.softmax(filtered_sorted_logits, dim=-1) # (B, V)
    pos = torch.multinomial(probs, num_samples=1) # (B, 1)

    token_ids = sorted_idx.gather(dim=-1, index=pos).squeeze(1) # (B, 1) -> (B,)
    sampled_vals = sorted_logits.gather(dim=-1, index=pos).squeeze(1) # (B, 1) -> (B,)
    sampled_vals = filtered_sorted_logits.gather(dim=-1, index=pos).squeeze(1)

    return token_ids, sampled_vals

# logits = torch.randint(0, 10, (2, 5)).to(torch.float32)
logits = torch.tensor([
    [0, 1, 2, 3],
    [4, 3, 2, -1]
]).to(torch.float32)
print(logits)
p = 0.9
print(top_p_sampling(logits, p))
{% endhighlight %}

## Multi-layer Perceptron
{% highlight python linenos %}
import numpy as np

"""
backprop for multi-layer perceptron
"""

class Optimizer:
    def update(self, param: np.ndarray, grad: np.ndarray, name: str) -> np.ndarray:
        """
        Return updated parameter tensor.
        name is a unique string key for per-parameter state (needed for Adam).
        """
        raise NotImplementedError

class SGD(Optimizer):
    def __init__(self, lr) -> None:
        self.lr = lr

    def update(self, param: np.ndarray, grad: np.ndarray, name: str) -> np.ndarray:
        return param - self.lr * grad

class Adam(Optimizer):
    # https://www.geeksforgeeks.org/deep-learning/adam-optimizer/
    def __init__(self, lr=1e-3, betas=(0.9, 0.999), eps=1e-8):
        self.lr = lr
        self.beta1, self.beta2 = betas
        self.eps = eps

        self.t = 0
        self.m = {}  # name -> ndarray
        self.v = {}  # name -> ndarray

    def update(self, param: np.ndarray, grad: np.ndarray, name: str) -> np.ndarray:
        # Adam uses one global step count for the optimizer
        self.t += 1

        if name not in self.m:
            self.m[name] = np.zeros_like(param)
            self.v[name] = np.zeros_like(param)

        m = self.m[name]
        v = self.v[name]

        # Update biased first/second moments
        m[:] = self.beta1 * m + (1 - self.beta1) * grad
        v[:] = self.beta2 * v + (1 - self.beta2) * (grad**2)

        # Bias correction
        m_hat = m / (1 - (self.beta1 ** self.t))
        v_hat = v / (1 - (self.beta2 ** self.t))

        # Parameter update
        return param - self.lr * m_hat / (np.sqrt(v_hat) + self.eps)

class Linear:
    def __init__(self, in_size, out_size, name="linear"):
        self.name = name
        self.weights = np.random.rand(in_size, out_size)
        self.bias = np.zeros(out_size)

    def __call__(self, x):
        """f(x) = x @ W + b
        Args:
            x: (B, in_size)
        Return
            z: (B, out_size)
        """
        self.x = x
        return np.matmul(x, self.weights) + self.bias

    def backward(self, grad_out):
        """
        Args:
            grad_out = dL/dz, shape (B, out_size)
        Returns:
            grad_in = dL/dx, shape (B, in_size)
        Notes:
            z = f(x) = x @ W + b
            -> dL/dW (in_size, out_size)
                = dL/dz * dz/dW (knowing dz/dW = x)
                = grad_out (B, out_size) * x (B, in_size)
                (to make it match shape -> x.T @ grad_out)

            dL/dx (B, in_size)
                = dL/dz * dz/dx (knowing dz/dx = W)
                = grad_out (B, out_size) * W (in_size, out_size)
                (to make it match shape -> grad_out @ W.T)
        """
        self.dW = np.transpose(self.x, axes=(1, 0)) @ grad_out # (in_size, B) x (B, out_size) = (in_size, out_size)
        self.db = np.sum(grad_out, axis=0) # (out_size,)
        grad_in = grad_out @ np.transpose(self.weights, axes=(1, 0)) # (B, out_size) x (out_size, in_size) = (B,in_size)
        return grad_in

    def step(self, optimizer: Optimizer):
        self.weights = optimizer.update(self.weights, self.dW, name=f"{self.name}.W")
        self.bias    = optimizer.update(self.bias,    self.db, name=f"{self.name}.b")

class Sigmoid:
    def __call__(self, x):
        """z = f(x) = 1 / (1+e^{-x})
        Args:
            x: (B, size)
        Return
            z: (B, size)
        """
        self.out = 1 / (1 + np.exp(-x))
        return self.out

    def backprop(self, grad_out):
        """sigmoid'(x) = sigmoid(x) * (1 - sigmoid(x))
        Since self.out is already = sigmoid(x) --> self.out * (1-self.out)

        Args:
            grad_out = dL/dz, shape (B, hidden_size)
        Returns:
            grad_in = dL/dx, shape (B, hidden_size)
        """
        dz_dx = self.out * (1-self.out)
        grad_in = grad_out * dz_dx
        return grad_in

class ReLU:
    def __call__(self, x):
        self.x = x
        return np.maximum(0, x)

    def backprop(self, grad_out):
        # mask: 1 where x>0 else 0
        mask = self.x > 0
        return grad_out * mask

class Softmax:
    def __call__(self, x):
        """z = e^xi / sum(e^xi)
        Args:
            x: (B, hidden_size)
        Return:
            z: (B, hidden_size)
        """
        x = x - np.max(x, axis=1, keepdims=True)  # stability

        exp_x = np.exp(x)
        total = np.sum(exp_x, axis=1, keepdims=True) # (B, 1)
        self.out = exp_x / total
        return self.out

    def backprop(self, grad_out):
        """
        Args:
            grad_out = dL/ds where s = softmax(x), shape (B, C)
        Return:
            dL/dx: (B, C)
        """
        s = self.out  # (B, C)
        # dot = (grad_out · s) per sample -> shape (B, 1)
        dot = np.sum(grad_out * s, axis=1, keepdims=True)
        # dL/dx = s * (grad_out - dot)
        return s * (grad_out - dot)

class LossFunc:
    y: np.ndarray
    y_hat: np.ndarray

class MSE(LossFunc):
    """
    y, y_hat: must have shape (B,) or (B, 1)
    """
    y: np.ndarray
    y_hat: np.ndarray

    def __call__(self, y_hat: np.ndarray, y: np.ndarray):
        """
        MSE=(Predicted Output - Actual Output)**2
        MSE = 1/N sum_{i=1}^{N} (y_hat_i - y_i)**2
        --> backprop = 2/N sum_{i=1}^{N} (y_hat_i - y_i)
        y: (B,) -> (B, 1)
        y_hat: (B, 1)
        """
        self.y_hat = y_hat
        self.y = y.reshape(y_hat.shape)
        loss = np.mean((y_hat - y) ** 2)
        return loss

    def backprop(self):
        """
        backprop = 2/N sum_{i=1}^{N} (y_hat_i - y_i)
        Args:
            y: (B, 1)
            y_hat: (B, 1)
        Return
            dL/dL_dy_hat: (B, 1)
        """
        batch = self.y_hat.shape[0]
        return 2/batch * (self.y_hat - self.y)

class CrossEntropy(LossFunc):
    # y: np.ndarray
    # y_hat: np.ndarray
    epsilon = 1e-12

    def __call__(self, y_hat: np.ndarray, y: np.ndarray):
        """
        CE = -1/N * sum_{i->N} sum_{j->output_size}(y_i_j log y_hat_i_j)
        y: (B, output_size) # one hot encode
        y_hat: (B, output_size)
        """
        self.y = y
        self.y_hat = y_hat
        per_sample = np.sum(y * np.log(y_hat + self.epsilon), axis=1) # (B,)
        loss = -1 * np.mean(per_sample)
        return loss

    def backprop_combine(self):
        """combined softmax + CE
        Args:
            y: (B, output_size) # one hot encode
            y_hat: (B, output_size)
        Return
            dL_dz2
        """
        batch = self.y_hat.shape[0]
        return (1/batch) * (self.y_hat - self.y)

    def backprop(self):
        """
        Return:
            dL_dy_hat
        """
        batch = self.y_hat.shape[0]
        return (-1/batch) * (self.y / (self.y_hat + self.epsilon))

class BinaryCE:
    # https://cs230.stanford.edu/fall2018/section_files/section3_soln.pdf
    pass

class MLP:
    def __init__(self, input_size, hidden_size, output_size, optimizer) -> None:
        self.linear1 = Linear(input_size, hidden_size)
        self.linear2 = Linear(hidden_size, output_size)
        self.sigmoid = Sigmoid()
        self.softmax = Softmax()

        self.optimizer = optimizer
        self.criterion = CrossEntropy()

    def forward(self, x):
        """
        z1 = x*W1 + b1
        a1 = sigmoid(z1)
        z2 = a1*W2 + b2
        y_hat = softmax(z2)
        Loss = MSE = 1/N sum_{i=1->N} sum_{j=1->C} (y_hat_ij - y_ij)**2
        Args:
            x: (B, input_size)
        Return
            y_hat: (B, output_size)
        """
        self.z1 = self.linear1(x)
        self.a1 = self.sigmoid(self.z1)
        self.z2 = self.linear2(self.a1)
        self.y_hat = self.softmax(self.z2)
        return self.y_hat

    def backward(self, y):
        """
        Args:
            y: (B, output_size)
        Notes:
            z1 = x*W1 + b1
            a1 = sigmoid(z1)
            z2 = a1*W2 + b2
            y_hat = softmax(z2)
            Loss = MSE = 1/N sum_{i=1->N} sum_{j=1->C} (y_hat_ij - y_ij)**2
        """
        loss = self.criterion(self.y_hat, y)

        # delta2 = dL/dz2 (combined softmax + CE)
        dL_dz2 = self.criterion.backprop_combine()  # (B, output_size)

        # through Linear2
        dL_da1 = self.linear2.backward(dL_dz2)  # (B, hidden_size)

        # through sigmoid
        dL_dz1 = self.sigmoid.backprop(dL_da1) # (B, hidden_size)

        # through Linear1
        dL_dx = self.linear1.backward(dL_dz1)

        # gradient step
        self.linear2.step(self.optimizer)
        self.linear1.step(self.optimizer)

        return loss
{% endhighlight %}

## Attention
### Sparse Attn
{% highlight python linenos %}
import torch
import torch.sparse

# Define the number of queries, keys, and dimensions
n = 10
m = 10
d = 5

# Generate random queries, keys, and values
Q = torch.randn(n, d)
K = torch.randn(m, d)
V = torch.randn(m, d)

# Define the local window size
window_size = 3

# Create a sparse matrix to represent the attention mask
indices = []
org_indices = []
for i in range(n):
    start = max(0, i - window_size // 2)
    end = min(m, i + window_size // 2 + 1)
    for j in range(start, end):
        indices.append([i, j])
org_indices = indices.copy()

indices = torch.tensor(indices).t() # (nnz, 2) -> (2, nnz). nnz = 28 ("Number of Non-Zero values")
values = torch.ones(indices.size(1)) # (nnz,)
mask = torch.sparse_coo_tensor(indices, values, (n, m)) # indices: 2D where the first dimension is the number of tensor dimensions and the second dimension is the "Number of Non-Zero values".

# Compute the attention scores
scores = torch.matmul(Q, K.t())
scores = scores * mask.to_dense()

# Apply softmax to the scores
scores = torch.softmax(scores, dim=-1)

# Compute the output
output = torch.matmul(scores, V)

print(output)

print(mask)
dense = mask.to_dense().int()  # 0/1
for i in range(n):
    print(f"{i:2d}", "".join("█" if dense[i, j] else "·" for j in range(m)))
{% endhighlight %}

### Flash Attn
{% highlight python linenos %}
# not yet implemented
{% endhighlight %}

## KV-Caching
{% highlight python linenos %}
# not yet implemented
{% endhighlight %}

