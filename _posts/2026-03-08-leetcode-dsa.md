---
layout: distillpost
title: Brief of Data-Structure & Algorithm coding interview questions
date: 2026-03-08
description: Some concepts, topics, and examples for Leetcode coding interview
tags: coding interview
categories: dsa
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
1. [leetcode.com](https://leetcode.com/)
1. [neetcode.io](https://neetcode.io/)
1. [cp-algorithms.com](https://cp-algorithms.com/)

More of my implementations can be found here: [Github: QuanHNguyen232/LeetCode](https://github.com/QuanHNguyen232/LeetCode)


## Prefix sum
{% details Practice problems %}
- https://leetcode.com/problems/range-sum-query-2d-immutable
- https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/
- https://leetcode.com/problems/split-array-with-equal-sum/
- https://leetcode.com/problems/binary-subarrays-with-sum
- https://leetcode.com/problems/subarray-sums-divisible-by-k/
- https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/
- https://leetcode.com/problems/make-sum-divisible-by-p
{% enddetails %}

## Map/Set
{% details Practice problems %}
- https://leetcode.com/problems/number-of-good-pairs/
- https://leetcode.com/problems/number-of-arithmetic-triplets/submissions/
- https://leetcode.com/problems/two-sum/
- https://leetcode.com/problems/decode-the-message/
- https://leetcode.com/problems/count-the-number-of-consistent-strings/
- https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/
- https://leetcode.com/problems/contains-duplicate-ii/
- https://leetcode.com/problems/check-if-the-sentence-is-pangram/
- https://leetcode.com/problems/count-largest-group/
- https://leetcode.com/problems/unique-email-addresses/
- https://leetcode.com/problems/destination-city/
- https://leetcode.com/problems/valid-sudoku/
- https://leetcode.com/problems/repeated-dna-sequences
- https://leetcode.com/problems/unique-morse-code-words/
- https://leetcode.com/problems/rank-teams-by-votes/
- https://leetcode.com/problems/find-all-anagrams-in-a-string
{% enddetails %}

## Big num
{% details Practice problems %}
- https://leetcode.com/problems/plus-one/
- https://leetcode.com/problems/add-binary/
- https://leetcode.com/problems/add-strings/
- https://leetcode.com/problems/multiply-strings/
{% enddetails %}

## 2D array
{% details Practice problems %}
- https://leetcode.com/problems/transpose-matrix/
- https://leetcode.com/problems/rotate-image/
- https://leetcode.com/problems/diagonal-traverse/description/
- https://leetcode.com/problems/spiral-matrix/description/
- https://leetcode.com/problems/richest-customer-wealth/description/
- https://leetcode.com/problems/matrix-diagonal-sum
{% enddetails %}

## Sliding window
Patterns for Sliding Window
1. ?

Notes:
1. Sliding windows with 2 pointers works when the problem has monotonic properties - meaning that expanding the window consistently moves us in one direction regarding our constraint, and shrinking consistently moves us in the opposite direction.
1. Key Criteria for Two Pointers/Sliding Window (Both should be True) (sliding window vs DP):
    1. Rule 1 (Validity of Wider Scope): If a larger window (wider scope) is valid, all smaller sub-windows within it must also be valid.
    1. Rule 2 (Invalidity of Narrower Scope): If a smaller window (narrower scope) is invalid, all larger windows containing it must also be invalid.

Sources:
- https://leetcode.com/discuss/post/6900561/ultimate-sliding-window-guide-patterns-a-28e9/
- https://adamowada.github.io/leetcode-study/sliding-window/study-guide.html
- https://github.com/0xjaydeep/leetcode-patterns/blob/main/patterns/sliding_window/README.md

{% details Practice problems %}
- https://leetcode.com/problems/fruit-into-baskets 
- https://leetcode.com/problems/max-consecutive-ones-iii/
- https://leetcode.com/problems/find-all-anagrams-in-a-string/
- https://leetcode.com/problems/permutation-in-string/description/
- https://leetcode.com/problems/minimum-window-substring/description/
- https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/
- https://leetcode.com/problems/maximum-average-subarray-i/
- https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
- https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/
- https://leetcode.com/problems/number-of-substrings-containing-all-three-characters
- https://leetcode.com/problems/trapping-rain-water
- https://leetcode.com/problems/count-subarrays-with-fixed-bounds/
- https://leetcode.com/problems/subarrays-with-k-different-integers/
- https://leetcode.com/problems/minimum-size-subarray-sum/
- https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/
- https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/
- https://leetcode.com/problems/count-subarrays-with-score-less-than-k/
- https://leetcode.com/problems/find-the-longest-equal-subarray/
- https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/description/
{% enddetails %}


## Binary search

Reference:
1. https://medium.com/swlh/binary-search-find-upper-and-lower-bound-3f07867d81fb
1. https://leetcode.com/explore/learn/card/binary-search/136/template-analysis/935/

Templates
{% include figure.liquid path="assets/img/blogs/leetcode-dsa/binary-search-templates.png" caption="Binary Search Template Analysis" %}

Choosing Mid, Left, Right
{% include figure.liquid path="assets/img/blogs/leetcode-dsa/binary-search.webp" caption="How to choose mid, L, and R." %}

{% tabs binary-search-approach %}

{% tab binary-search-approach lower-bound %}
{% include figure.liquid path="assets/img/blogs/leetcode-dsa/binary-search-lower-bound.webp" caption="Assign L and R when asked for the lower bound." %}

{% highlight python linenos %}
def binary_search_lower(nums, target, expect):
    while left < right:
      mid = left + (right - left) // 2 # lower bound, since mid=l+(r-l)/2, we must avoid l = mid (infinite loop, e.g. arr=[0,1] with target=0)
      if condition(mid): # if mid works
          right = mid
      else:
          left = mid + 1 # otherwise causes infinite loop
    return left # find left most index (left == right)
{% endhighlight %}
{% endtab %}

{% tab binary-search-approach upper-bound %}
{% include figure.liquid path="assets/img/blogs/leetcode-dsa/binary-search-upper-bound.webp" caption="Assign L and R when asked for the upper bound." %}

{% highlight python linenos %}
def binary_search_upper(nums, target, expect):
    while left < right:
        mid = right - (right - left) // 2
        if condition(mid): # if mid works
            right = mid - 1
        else:
            left = mid
    return left
{% endhighlight %}
{% endtab %}

{% endtabs %}

### Modified
{% details Practice problems %}
N/A
{% enddetails %}

### Adhoc binary search
{% details Practice problems %}
N/A
{% enddetails %}

### Matrix
{% details Practice problems %}
N/A
{% enddetails %}

### Hard
{% details Practice problems %}
N/A
{% enddetails %}

## Tree
Reference:
1. https://leetcode.com/discuss/post/3743769/crack-easily-any-interview-tree-data-str-nxr9/
1. https://cp-algorithms.com/

{% include figure.liquid path="assets/img/blogs/leetcode-dsa/tree-categories.jpg" caption="Tree-type problems." %}

### Traversal
#### Inorder Traversal
{% details Practice problems %}
N/A
{% enddetails %}

#### Preorder Traversal
{% details Practice problems %}
N/A
{% enddetails %}

#### Postorder Traversal
{% details Practice problems %}
N/A
{% enddetails %}

#### Level-order Traversal
{% details Practice problems %}
N/A
{% enddetails %}

### Ancestor problems
#### Common ancestor (e.g: Lowest common ancestor)
#### Root to leaf path problems
#### Depth problem
#### Travel child to parent problems
### Tree construction
{% details Practice problems %}
N/A
{% enddetails %}

### Serialize and Deserialize tree
{% details Practice problems %}
N/A
{% enddetails %}

### Distance between two Nodes
{% details Practice problems %}
N/A
{% enddetails %}

### Binary Search Tree
{% details Practice problems %}
N/A
{% enddetails %}

### Disjoint Set Union (DSU)/Union Find
https://cp-algorithms.com/data_structures/disjoint_set_union.html

{% include figure.liquid path="assets/img/blogs/leetcode-dsa/tree_DSU_example.png" caption="Disjoint Set Union example." %}

### Fenwick Tree
https://cp-algorithms.com/data_structures/fenwick.html
### Segment Tree
https://cp-algorithms.com/data_structures/segment_tree.html

{% include figure.liquid path="assets/img/blogs/leetcode-dsa/tree_segment-tree_sum.png" caption="Segment tree sum example." %}


## Trie
Reference:
1. https://leetcode.com/problems/implement-trie-prefix-tree/

Implementation template:

{% highlight python linenos %}
class TrieNode:
    def __init__(self):
        self.children = {}
        self.isEndOfWord = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
        self.root.isEndOfWord = False

    def insert(self, word: str) -> None:
        current = self.root
        for c in word:
            if c not in current.children:
                current.children[c] = TrieNode()
            current = current.children[c]
        current.isEndOfWord = True

    def search(self, word: str) -> bool:
        current = self.root
        for c in word:
            nextNode = current.children.get(c, None)
            if not nextNode: return False
            current = nextNode
        return current.isEndOfWord

    def startsWith(self, prefix: str) -> bool:
        current = self.root
        for c in prefix:
            nextNode = current.children.get(c, None)
            if not nextNode: return False
            current = nextNode
        return True

    def lcs(self):
        ans = []
        current = self.root
        while current:
            if len(current.children) > 1 or current.isEndOfWord:
                break
            else:
                key = list(current.children.keys())
                ans.append(key[0])
                current = current.children.get(key[0])
       
        return ''.join(ans)

    def canBeBuiltByOtherWords(self, word):
        current = self.root
        for c in word:
            current = current.children[c]
            if not current.isEndOfWord: return False
        return True
{% endhighlight %}

{% details Practice problems %}
N/A
{% enddetails %}

## Graph
References:
1. https://leetcode.com/discuss/post/3900838/mastering-graph-algorithms-a-comprehensi-xyws/
1. https://blog.algomaster.io/p/master-graph-algorithms-for-coding

### BFS
### DFS
### Topological Sort
{% details Practice problems %}
N/A
{% enddetails %}

### Union Find
{% details Practice problems %}
N/A
{% enddetails %}

### Cycles
#### Cycle Detection
{% details Practice problems %}
N/A
{% enddetails %}

##### DFS for Undirected/Directed Graphs
##### Union-Find for Undirected Graphs
#### Eulerian path

### Connected Components
{% details Practice problems %}
N/A
{% enddetails %}

#### Strongly Connected Components in Directed Graphs
##### Kosaraju's
##### Tarjan's

### Bipartite Graphs
{% details Practice problems %}
N/A
{% enddetails %}

### Flood Fill
{% details Practice problems %}
N/A
{% enddetails %}

### Minimum Spanning Tree (MST)
{% details Practice problems %}
N/A
{% enddetails %}

#### Kruskal's
#### Prim's

### Shortest Path
{% details Practice problems %}
N/A
{% enddetails %}

#### Dijkstra's
#### Bellman-Ford
#### Floyd-Warshall
#### BFS
#### A*

## Backtracking
Reference:
1. https://leetcode.com/discuss/post/1405817/backtracking-algorithm-problems-to-pract-lujf/


Patterns for Backtracking:
1. Permutation
1. Combination
1. Subset

{% tabs backtrack-patterns %}

{% tab backtrack-patterns permutation %}
Key idea:
1. Order matters
1. Each element can be used once per permutation
1. Need a visited array (or swap)

```pseudocode
procedure BACKTRACK(path)

    if length(path) = n then
        add path to result
        return
    end if

    for i ← 0 to n - 1 do

        if visited[i] then
            continue
        end if

        visited[i] ← true
        path.append(nums[i])

        BACKTRACK(path)

        path.pop()
        visited[i] ← false

    end for
```
{% endtab %}

{% tab backtrack-patterns combination %}
Key idea:
1. Order does NOT matter
1. Use start index to prevent duplicates
1. Each element used once

```pseudocode
procedure BACKTRACK(start, path)

    if valid_solution then
        add path to result
        return
    end if

    for i ← start to n - 1 do

        path.append(nums[i])

        BACKTRACK(i + 1, path)

        path.pop()

    end for
```
{% endtab %}

{% tab backtrack-patterns Subset %}
Key idea:
1. Every element has two choices: include/exclude

```pseudocode
procedure BACKTRACK(start, path)

    add path to result

    for i ← start to n - 1 do

        path.append(nums[i])

        BACKTRACK(i + 1, path)

        path.pop()

    end for
```
{% endtab %}

{% endtabs %}

## Bit manipulation
Some common functions
```python
# Checking if a number is odd or even:
def is_odd(n):
    return n & 1

def is_even(n):
    return not n & 1

# Getting the i-th bit:
def get_bit(n, i):
    return (n >> i) & 1

# Setting the i-th bit:
def set_bit(n, i):
    return n | (1 << i)

# Clearing the i-th bit:
def clear_bit(n, i):
    return n & ~(1 << i)

# Updating the i-th bit to a given value:
def update_bit(n, i, v):
    mask = ~(1 << i)
    return (n & mask) | (v << i)

# Counting the number of 1s in the binary representation (Hamming weight):
def hamming_weight(n):
    count = 0
    while n:
        n &= (n - 1)
        count += 1
    return count

# Reversing the bits of a number:
def reverse_bits(n):
    result = 0
    for i in range(32):  # Assuming 32-bit integer
        result = (result << 1) | (n & 1)
        n >>= 1
    return result

# Finding the most significant bit position (zero-based index):
def most_significant_bit(n):
    msb = -1
    while n > 0:
        n >>= 1
        msb += 1
    return msb

# Checking if a number is a power of 2:
def is_power_of_two(n):
    return n > 0 and (n & (n - 1)) == 0

# Swapping odd and even bits:
def swap_odd_even_bits(n):
    even_bits = n & 0xAAAAAAAA
    odd_bits = n & 0x55555555
    even_bits >>= 1
    odd_bits <<= 1
    return even_bits | odd_bits

def clear_rightmost_bit(n):
    ''' a & (a-1) clear bit 1 tận cùng bên phải của a (last bit-1 of a)
        a         = xxxxxxxx10101
        a-1       = xxxxxxxx10100
        a & (a-1) = xxxxxxxx10100

        a         = xxxxxxxx10000
        a-1       = xxxxxxxx01111
        a & (a-1) = xxxxxxxx00000
    '''
    return n & (n-1)
```

{% details Practice problems %}
N/A
{% enddetails %}

## Dynamic Programming
Sources:
1. https://blog.algomaster.io/p/20-patterns-to-master-dynamic-programming

Notes:
1. DP vs Sliding Window: [Count the Number of Good Subarrays Leetcode 2537](https://youtu.be/LeEvAlEm_DY) and https://leetcode.com/problems/longest-non-decreasing-subarray-after-replacing-at-most-one-element/solutions/7337072/why-not-sliding-window-answer-here-by-ka-d6a8: focus on valid/invalid rules for Window

### Fibonacci Sequence (or linear sequence, linear time)
{% details Practice problems %}
- https://leetcode.com/problems/climbing-stairs/description/
- https://leetcode.com/problems/min-cost-climbing-stairs/description/
{% enddetails %}

### Kadane's Algorithm
{% details Practice problems %}
- https://leetcode.com/problems/maximum-subarray/description/
- https://leetcode.com/problems/maximum-sum-circular-subarray/description/
- https://leetcode.com/problems/maximum-product-subarray/description/
{% enddetails %}

### 0/1 Knapsack
{% details Practice problems %}
- https://leetcode.com/problems/partition-equal-subset-sum/description/
- https://leetcode.com/problems/target-sum/description/
- https://leetcode.com/problems/last-stone-weight-ii/description/
{% enddetails %}

### Unbounded Knapsack
{% details Practice problems %}
- https://leetcode.com/problems/coin-change/description/
- https://leetcode.com/problems/coin-change-ii/description/
- https://leetcode.com/problems/perfect-squares/description/
{% enddetails %}

### Longest Common Subsequence (LCS)
{% details Practice problems %}
- https://leetcode.com/problems/longest-common-subsequence/description/
- https://leetcode.com/problems/delete-operation-for-two-strings/description/
- https://leetcode.com/problems/shortest-common-supersequence/description/
{% enddetails %}

### Longest Increasing Subsequence (LIS)
{% details Practice problems %}
- https://leetcode.com/problems/longest-increasing-subsequence/description/
- https://leetcode.com/problems/number-of-longest-increasing-subsequence/description/
- https://leetcode.com/problems/russian-doll-envelopes/description/
{% enddetails %}

### Palindromic Subsequence
{% details Practice problems %}
- https://leetcode.com/problems/longest-palindromic-subsequence/description/
- https://leetcode.com/problems/palindromic-substrings/description/
- https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/description/
{% enddetails %}

### Edit Distance
{% details Practice problems %}
- https://leetcode.com/problems/edit-distance/description/
- https://leetcode.com/problems/delete-operation-for-two-strings/description/
- https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/description/
{% enddetails %}

### Subset Sum
{% details Practice problems %}
- https://leetcode.com/problems/partition-equal-subset-sum/description/
- https://leetcode.com/problems/target-sum/description/
- https://leetcode.com/problems/partition-to-k-equal-sum-subsets/
{% enddetails %}

### String Partition
{% details Practice problems %}
- https://leetcode.com/problems/word-break/description/
- https://leetcode.com/problems/palindrome-partitioning-ii/description/
- https://leetcode.com/problems/concatenated-words/description/
{% enddetails %}

### Catalan Numbers
{% details Practice problems %}
- https://leetcode.com/problems/unique-binary-search-trees/description/
- https://leetcode.com/problems/generate-parentheses/description/
{% enddetails %}

### Matrix Chain Multiplication
### Count Distinct Ways
{% details Practice problems %}
N/A
{% enddetails %}

### DP on Grids
### DP on Trees
### DP on Graphs
### Digit DP
### Bitmasking DP
### Probability DP
### State Machine DP
{% details Practice problems %}
- https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
- https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/
{% enddetails %}
