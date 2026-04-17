---
layout: distillpost
title: Brief of Data-Structure & Algorithm (DSA) coding interview questions
date: 2026-03-08
date_updated: 2026-04-16
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

## DSA coding interview template
1. REPHRASE the question: in your own words -> make sure you understand the question correctly
1. CONSTRAINTS: clarify input and output (size, type) and any ambiguity
1. Walkthrough 1 - 2 EXAMPLES (this helps with brainstorm ideas / intuition)
1. INTUITION (thinking time is here, note down your thoughts): observations -> what DSA to use, main logics, time / space analysis
1. CODE
1. TEST: be active in testing, don't wait for interviewer to ask you to

https://www.youtube.com/watch?v=dRmdp1q2DXM

## Prefix sum
{% details Practice problems %}
- [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)
- [303. Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)
- [304. Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable)
- [325. Maximum Size Subarray Sum Equals k](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/) (with Hashmap)
- [523. Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/) (with Hashmap)
- [525. Contiguous Array](https://leetcode.com/problems/contiguous-array/) (with Hashmap)
- [548. Split Array with Equal Sum](https://leetcode.com/problems/split-array-with-equal-sum/)
- [724. Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)
- [930. Binary Subarrays With Sum](https://leetcode.com/problems/binary-subarrays-with-sum)
- [974. Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/)
- [1248. Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/) (with Hashmap)
- [1413. Minimum Value to Get Positive Step by Step Sum](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/)
- [1590. Make Sum Divisible by P](https://leetcode.com/problems/make-sum-divisible-by-p)
- [1658. Minimum Operations to Reduce X to Zero](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/) (with Hashmap)
- [1983. Widest Pair of Indices With Equal Range Sum](https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum/)
{% enddetails %}

## Map/Set
{% details Practice problems %}
- [1. Two Sum](https://leetcode.com/problems/two-sum/)
- [36. Valid Sudoku](https://leetcode.com/problems/valid-sudoku/)
- [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)
- [187. Repeated DNA Sequences](https://leetcode.com/problems/repeated-dna-sequences)
- [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/)
- [438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string)
- [804. Unique Morse Code Words](https://leetcode.com/problems/unique-morse-code-words/)
- [929. Unique Email Addresses](https://leetcode.com/problems/unique-email-addresses/)
- [1366. Rank Teams by Votes](https://leetcode.com/problems/rank-teams-by-votes/)
- [1399. Count Largest Group](https://leetcode.com/problems/count-largest-group/)
- [1436. Destination City](https://leetcode.com/problems/destination-city/)
- [1512. Number of Good Pairs](https://leetcode.com/problems/number-of-good-pairs/)
- [1684. Count the Number of Consistent Strings](https://leetcode.com/problems/count-the-number-of-consistent-strings/)
- [1832. Check if the Sentence Is Pangram](https://leetcode.com/problems/check-if-the-sentence-is-pangram/)
- [1941. Check if All Characters Have Equal Number of Occurrences](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/)
- [2325. Decode the Message](https://leetcode.com/problems/decode-the-message/)
- [2367. Number of Arithmetic Triplets](https://leetcode.com/problems/number-of-arithmetic-triplets/)
{% enddetails %}

## Big num
{% details Practice problems %}
- [43. Multiply Strings](https://leetcode.com/problems/multiply-strings/)
- [66. Plus One](https://leetcode.com/problems/plus-one/)
- [67. Add Binary](https://leetcode.com/problems/add-binary/)
- [415. Add Strings](https://leetcode.com/problems/add-strings/)
{% enddetails %}

## 2D array
{% details Practice problems %}
- [48. Rotate Image](https://leetcode.com/problems/rotate-image/)
- [54. Spiral Matrix](https://leetcode.com/problems/spiral-matrix/)
- [498. Diagonal Traverse](https://leetcode.com/problems/diagonal-traverse/)
- [867. Transpose Matrix](https://leetcode.com/problems/transpose-matrix/)
- [1572. Matrix Diagonal Sum](https://leetcode.com/problems/matrix-diagonal-sum)
- [1672. Richest Customer Wealth](https://leetcode.com/problems/richest-customer-wealth/)
{% enddetails %}

## Sliding window
Patterns
1. ?

Template:
{% highlight python linenos %}
def sliding_window(nums):
    1. Iterate over elements in our input == Expand the window (left, right)
    2. Meet the condition to stop expansion - the most difficult part
        2.1. Remove nums[left] from window
        2.2. Contract the window
    3. Process the current valid  window
{% endhighlight %}

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
- [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
- [30. Substring with Concatenation of All Words](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)
- [42. Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water)
- [76. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)
- [159. Longest Substring with At Most Two Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/)
- [209. Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
- [438. Find All Anagrams in a String](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
- [487. Max Consecutive Ones II](https://leetcode.com/problems/max-consecutive-ones-ii/)
- [548. Split Array with Equal Sum](https://leetcode.com/problems/split-array-with-equal-sum/)
- [567. Permutation in String](https://leetcode.com/problems/permutation-in-string/)
- [643. Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)
- [689. Maximum Sum of 3 Non-Overlapping Subarrays](https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/)
- [713. Subarray Product Less Than K](https://leetcode.com/problems/subarray-product-less-than-k/)
- [862. Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/)
- [904. Fruit Into Baskets](https://leetcode.com/problems/fruit-into-baskets )
- [977. Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)
- [992. Subarrays with K Different Integers](https://leetcode.com/problems/subarrays-with-k-different-integers/)
- [1004. Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)
- [1248. Count Number of Nice Subarrays](https://leetcode.com/problems/count-number-of-nice-subarrays/)
- [1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold](https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/)
- [1358. Number of Substrings Containing All Three Characters](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters)
- [1423. Maximum Points You Can Obtain from Cards](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/)
- [1839. Longest Substring Of All Vowels in Order](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/)
- [2302. Count Subarrays With Score Less Than K](https://leetcode.com/problems/count-subarrays-with-score-less-than-k/)
- [2444. Count Subarrays With Fixed Bounds](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/)
- [2831. Find the Longest Equal Subarray](https://leetcode.com/problems/find-the-longest-equal-subarray/)
{% enddetails %}

## Greedy
Reference:
1. https://medium.com/algorithms-and-leetcode/greedy-algorithm-explained-using-leetcode-problems-80d6fee071c4

{% details Practice problems %}
- [455. Assign Cookies]()
- [860. Lemonade Change]()
- [861. Score After Flipping Matrix]()
- [874. Walking Robot Simulation]()
{% enddetails %}


### Activity-Selection
given a set of activities with start and end time (s, e), our task is to schedule maximum non-overlapping activities or remove minimum number of intervals to get maximum non-overlapping intervals. In cases that each interval or activity has a cost, we might need to retreat to dynamic programming to solve it.

{% details Practice problems %}
- [435. Non-overlapping Intervals]()
- [630. Course Schedule III]()
{% enddetails %}

### Frog Jumping
{% details Practice problems %}
- [55. Jump Game](https://leetcode.com/problems/jump-game/)
- [45. Jump Game II](https://leetcode.com/problems/jump-game-ii/)
{% enddetails %}

### Data Compression
{% details Practice problems %}
- []()
{% enddetails %}

### File Merging
{% details Practice problems %}
- []()
{% enddetails %}

### Graph Algorithms
- Minimum Spanning Tree (Kruskal's or Prim’s)
- Dijkstra
- Bellman-Ford



## Binary search

### Instruction

Reference:
1. https://medium.com/swlh/binary-search-find-upper-and-lower-bound-3f07867d81fb
1. https://leetcode.com/explore/learn/card/binary-search/136/template-analysis/935/

#### Templates
- Usually I prefer following template #2
{% include figure.liquid path="assets/img/blogs/leetcode-dsa/binary-search-templates.png" caption="Binary Search Template Analysis" %}

- Template #1 (`left <= right`):
    - Most basic and elementary form of Binary Search
    - Search Condition can be determined without comparing to the element's neighbors (or use specific elements around it)
    - No post-processing required because at each step, you are checking to see if the element has been found. If you reach the end, then you know the element is not found
- Template #2 (`left < right`):
    - An advanced way to implement Binary Search.
    - Search Condition needs to access the element's immediate right neighbor
    - Use the element's right neighbor to determine if the condition is met and decide whether to go left or right
    - Guarantees Search Space is at least 2 in size at each step
    - Post-processing required. Loop/Recursion ends when you have 1 element left. Need to assess if the remaining element meets the condition.


#### Choosing Mid, Left, Right

{% include figure.liquid path="assets/img/blogs/leetcode-dsa/binary-search.webp" caption="How to choose mid, L, and R." %}

**Pick the mid**: Pick the former one or the latter one out of an even number of items. Both of them works, but it should align with how we deal with `l` and `r`. When we select the former one using `l+(r-l)/2`, we want to make sure to avoid `l = mid` because that might lead to infinite loop. For example when there are two elements `[0,1]` and `mid = 0`, then `l` becomes `mid` and the iteration goes again and again. Similarly, when we select the latter one using `r-(r-l)/2`, we want to avoid `r = mid`.

**Assign values to `L` and `R`**:

{% tabs binary-search-approach %}

{% tab binary-search-approach lower-bound %}

For example, when the question asks for the *lower bound*:
- if `mid` works, then `r` should be `mid` not `mid-1` because `mid` might be the answer!
- And when `mid` does not work, `l` should be `mid+1` because we are sure the `mid` is not the answer and everything falls one `mid`'s *left* won't work either.

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

For example, when the question asks for the *upper bound*:
- if `mid` does not work, `r` should be `mid-1` because we are sure the `mid` is not the answer and everything falls one `mid`'s *right* won't work either.
- And when `mid` works, then `l` should be `mid` not `mid-1` because `mid` might be the answer!


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

### Basic
{% details Practice problems %}
- [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)
- [69. Sqrt(x)](https://leetcode.com/problems/sqrtx/)
- [162. Find Peak Element](https://leetcode.com/problems/find-peak-element/)
- [704. Binary Search](https://leetcode.com/problems/binary-search/)
{% enddetails %}

### Modified
{% details Practice problems %}
- [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
- [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
- [153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
- [528. Random Pick with Weight](https://leetcode.com/problems/random-pick-with-weight/)
- [540. Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/)
- [658. Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/)
- [981. Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/)
{% enddetails %}

### Adhoc binary search
{% details Practice problems %}
- [278. First Bad Version](https://leetcode.com/problems/first-bad-version/)
- [410. Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)
- [774. Minimize Max Distance to Gas Station](https://leetcode.com/problems/minimize-max-distance-to-gas-station/)
- [786. K-th Smallest Prime Fraction](https://leetcode.com/problems/k-th-smallest-prime-fraction/)
- [875. Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
- [1011. Capacity To Ship Packages Within D Days](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/)
- [1201. Ugly Number III](https://leetcode.com/problems/ugly-number-iii/)
- [1231. Divide Chocolate](https://leetcode.com/problems/divide-chocolate/)
- [1482. Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/)
- [1891. Cutting Ribbons](https://leetcode.com/problems/cutting-ribbons/)
- [2141. Maximum Running Time of N Computers](https://leetcode.com/problems/maximum-running-time-of-n-computers/)
{% enddetails %}

### Matrix
{% details Practice problems %}
- [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)
- [1428. Leftmost Column with at Least a One](https://leetcode.com/problems/leftmost-column-with-at-least-a-one/)
{% enddetails %}

### Hard
{% details Practice problems %}
- [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)
{% enddetails %}

## Tree
Reference:
1. https://leetcode.com/discuss/post/3743769/crack-easily-any-interview-tree-data-str-nxr9/
1. https://www.geeksforgeeks.org/dsa/preorder-vs-inorder-vs-postorder/
1. https://cp-algorithms.com/

{% include figure.liquid path="assets/img/blogs/leetcode-dsa/tree-categories.jpg" caption="Tree-type problems." %}

### Basic
- [100. Same Tree](https://leetcode.com/problems/same-tree/)
- [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)
- [572. Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)
- [623. Add One Row to Tree](https://leetcode.com/problems/add-one-row-to-tree/)
- [662. Maximum Width of Binary Tree](https://leetcode.com/problems/maximum-width-of-binary-tree/)
- [872. Leaf-Similar Trees](https://leetcode.com/problems/leaf-similar-trees/)
- [938. Range Sum of BST](https://leetcode.com/problems/range-sum-of-bst/)
- [965. Univalued Binary Tree](https://leetcode.com/problems/univalued-binary-tree/)
- [1104. Path In Zigzag Labelled Binary Tree](https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/)
- [1315. Sum of Nodes with Even-Valued Grandparent](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/)

### Traversal

Suppose this definition for a binary tree node:
```python
class TreeNode:
    def __init__(self, val: int=0, left: TreeNode=None, right: TreeNode=None):
        self.val = val
        self.left = left
        self.right = right
```

{% details Morris Traversal Template & Explanation (inorder example) %}
1. Step 1: Initialize current as root
1. Step 2: While current is not NULL,
    ```
    If current does not have left child
        a. Add current’s value
        b. Go to the right, i.e., current = current.right
    Else
        a. In current's left subtree, make current the right child of the rightmost node
        b. Go to this left child, i.e., current = current.left
    ```
Example:
```
          1
        /   \
       2     3
      / \   /
     4   5 6
```
First, 1 is the root, so initialize 1 as current, 1 has left child which is 2, the current's left subtree is
```
         2
        / \
       4   5
```
So in this subtree, the rightmost node is 5, then make the current(1) as the right child of 5. Set current = current.left (current = 2). The tree now looks like:
```
         2
        / \
       4   5
            \
             1
              \
               3
              /
             6
```
For current 2, which has left child 4, we can continue with the same process as we did above
```
        4
         \
          2
           \
            5
             \
              1
               \
                3
               /
              6
```
then add 4 because it has no left child, then add 2, 5, 1, 3 one by one, for node 3 which has left child 6, do the same as above.
Finally, the inorder traversal is [4,2,5,1,6,3].
{% enddetails %}

#### Inorder Traversal

{% tabs tree-traversal %}

{% tab tree-traversal recursive %}
{% highlight python linenos %}
def inorderTraversal(root: TreeNode, res: List[TreeNode]) -> List[int]:
    """Time: O(n); Space: O(n)
    """
    if root is None: return

    inorderTraversal(root.left, res)
    res.append(root.val)
    inorderTraversal(root.right, res)
{% endhighlight %}
{% endtab %}

{% tab tree-traversal iterate %}
{% highlight python linenos %}
def inorderTraversal(root: TreeNode) -> List[int]:
    """Time: O(n); Space: O(n)
    """
    res, stack = [], []
    curr = root

    while curr or stack:
        while curr:
            stack.append(curr)
            curr = curr.left

        curr = stack.pop()
        res.append(curr.val)
        curr = curr.right

    return res
{% endhighlight %}
{% endtab %}

{% tab tree-traversal morris %}
{% highlight python linenos %}
def inorderTraversal(root: TreeNode) -> List[int]:
    """Time: O(n); Space: O(1)
    """
    res = []
    curr = root

    while curr is not None:
        if curr.left is None:
            res.append(curr.val)
            curr = curr.right
        else:
            pred = curr.left
            while pred.right is not None and pred.right is not curr:
                pred = pred.right

            if pred.right is None:
                pred.right = curr
                curr = curr.left
            else:
                pred.right = None
                res.append(curr.val)
                curr = curr.right

    return res
{% endhighlight %}
{% endtab %}

{% endtabs %}


{% details Practice problems %}
- [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)
{% enddetails %}

#### Preorder Traversal

{% tabs tree-traversal %}

{% tab tree-traversal recursive %}
{% highlight python linenos %}
def preorderTraversal(root: TreeNode, res: List[TreeNode]) -> List[int]:
    """Time: O(n); Space: O(n)
    """
    if root is None: return
    
    res.append(root.val)
    preorderTraversal(root.left, res)
    preorderTraversal(root.right, res)
{% endhighlight %}
{% endtab %}

{% tab tree-traversal iterate %}
{% highlight python linenos %}
def preorderTraversal(root: TreeNode) -> List[int]:
    """Time: O(n); Space: O(n)
    """
    res, stack = [], []
    curr = root

    while curr or stack:
        while curr:
            res.append(curr.val)
            stack.append(curr)
            curr = curr.left

        curr = stack.pop()
        curr = curr.right

    return res
{% endhighlight %}
{% endtab %}

{% tab tree-traversal morris %}
{% highlight python linenos %}
def preorderTraversal(root: TreeNode) -> List[int]:
    """Time: O(n); Space: O(1)
    """
    res = []
    curr = root

    while curr is not None:
        if curr.left is None:
            res.append(curr.val)
            curr = curr.right
        else:
            pred = curr.left
            while pred.right is not None and pred.right is not curr:
                pred = pred.right

            if pred.right is None:
                res.append(curr.val)
                pred.right = curr
                curr = curr.left
            else:
                pred.right = None
                curr = curr.right

    return res
{% endhighlight %}
{% endtab %}

{% endtabs %}

{% details Practice problems %}
- [114. Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) (Morris traversal)
- [129. Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/)
- [144. Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)
- [230. Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
- [404. Sum of Left Leaves](https://leetcode.com/problems/sum-of-left-leaves/)
- [515. Find Largest Value in Each Tree Row](https://leetcode.com/problems/find-largest-value-in-each-tree-row/)
- [617. Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/)
- [1302. Deepest Leaves Sum](https://leetcode.com/problems/deepest-leaves-sum/)
{% enddetails %}

#### Postorder Traversal

{% tabs tree-traversal %}

{% tab tree-traversal recursive %}
{% highlight python linenos %}
def postorderTraversal(root: TreeNode, res: List[TreeNode]) -> List[int]:
    """Time: O(n); Space: O(n)
    """
    if not root: return
    
    postorderTraversal(root.left, res)
    postorderTraversal(root.right, res)
    res.append(root.val)
{% endhighlight %}
{% endtab %}

{% tab tree-traversal iterate %}
{% highlight python linenos %}
def postorderTraversal(root: TreeNode) -> List[int]:
    """Time: O(n); Space: O(n)
    """
    res, stack = [], []
    curr = root

    while curr or stack:
        while curr:
            res.append(curr.val)
            stack.append(curr)
            curr = curr.right

        curr = stack.pop()
        curr = curr.left

    return res[::-1]
{% endhighlight %}
{% endtab %}

{% tab tree-traversal morris %}
{% highlight python linenos %}
def postorderTraversal(root: TreeNode) -> List[int]:
    """Time: O(n); Space: O(1)
    """
    def reverse_right(start: TreeNode, end: TreeNode) -> None:
        if start is end:
            return

        prev = None
        curr = start
        while curr is not end:
            nxt = curr.right
            curr.right = prev
            prev = curr
            curr = nxt

        curr.right = prev

    res = []
    dummy = TreeNode(0)
    dummy.left = root
    curr = dummy

    while curr is not None:
        if curr.left is None:
            curr = curr.right
        else:
            pred = curr.left
            while pred.right is not None and pred.right is not curr:
                pred = pred.right

            if pred.right is None:
                pred.right = curr
                curr = curr.left
            else:
                reverse_right(curr.left, pred)

                node = pred
                while True:
                    res.append(node.val)
                    if node is curr.left:
                        break
                    node = node.right

                reverse_right(pred, curr.left)
                pred.right = None
                curr = curr.right

    return res
{% endhighlight %}
{% endtab %}

{% endtabs %}


{% details Practice problems %}
- [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)
- [145. Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)
- [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
- [337. House Robber III](https://leetcode.com/problems/house-robber-iii/)
- [543. Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)
- [2331. Evaluate Boolean Binary Tree](https://leetcode.com/problems/evaluate-boolean-binary-tree/)
{% enddetails %}

#### Level-order Traversal

{% highlight python linenos %}
def levelorderTraversal(node): # BFS approach
    # 1. initialize queue for current level
    curr_level_queue = [node]
    
    while curr_level_queue:
        # 2. initialize queue for next level
        next_level_queue = []

        # 3. iter thru all nodes in current level
        while curr_level_queue:
            node = curr_level_queue.popleft()
            # do sth with node

            # 4. add node's children into queue for next level
            next_level_queue.append(node.left)
            next_level_queue.append(node.right)

        # 5. set curr_level_queue = next level to be considered
        curr_level_queue = next_level_queue
    
{% endhighlight %}

{% details Practice problems %}
- [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
- [107. Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/)
- [116. Populating Next Right Pointers in Each Node](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/)
- [429. N-ary Tree Level Order Traversal](https://leetcode.com/problems/n-ary-tree-level-order-traversal/)
- [515. Find Largest Value in Each Tree Row](https://leetcode.com/problems/find-largest-value-in-each-tree-row/)
- [637. Average of Levels in Binary Tree](https://leetcode.com/problems/average-of-levels-in-binary-tree/)
- [1161. Maximum Level Sum of a Binary Tree](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/)
- [1302. Deepest Leaves Sum](https://leetcode.com/problems/deepest-leaves-sum/)
- [1609. Even Odd Tree](https://leetcode.com/problems/even-odd-tree/)
{% enddetails %}

### Ancestor problems
#### Common ancestor (e.g: Lowest common ancestor)
{% details Practice problems %}
- [235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
- [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
- [1644. Lowest Common Ancestor of a Binary Tree II](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/)
- [1650. Lowest Common Ancestor of a Binary Tree III](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/)
- [1676. Lowest Common Ancestor of a Binary Tree IV](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/)
{% enddetails %}

#### Root to leaf path problems
{% details Practice problems %}
- [112. Path Sum](https://leetcode.com/problems/path-sum/)
- [113. Path Sum II](https://leetcode.com/problems/path-sum-ii/)
- [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
- [257. Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/)
- [437. Path Sum III](https://leetcode.com/problems/path-sum-iii/)
- [988. Smallest String Starting From Leaf](https://leetcode.com/problems/smallest-string-starting-from-leaf/)
- [1022. Sum of Root To Leaf Binary Numbers](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/)
- [1026. Maximum Difference Between Node and Ancestor](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/)
- [1080. Insufficient Nodes in Root to Leaf Paths](https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths/)
- [1457. Pseudo-Palindromic Paths in a Binary Tree](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/)
- [2265. Count Nodes Equal to Average of Subtree](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/)
{% enddetails %}

#### Depth problem
{% details Practice problems %}
- [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- [111. Minimum Depth of Binary Tree](https://leetcode.com/problems/minimum-depth-of-binary-tree/)
- [530. Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/)
- [559. Maximum Depth of N-ary Tree](https://leetcode.com/problems/maximum-depth-of-n-ary-tree/)
- [687. Longest Univalue Path](https://leetcode.com/problems/longest-univalue-path/)
- [1376. Time Needed to Inform All Employees](https://leetcode.com/problems/time-needed-to-inform-all-employees/)
{% enddetails %}

#### Travel child to parent problems (Radial Traversal)

{% highlight python linenos %}
"""Template
1. Build parent and child relation map
2. Do level order traversal or DFS
"""
parent = {}
def dfs(root, par):
    if not root: return
    
    parent[root] = par
    dfs(root.left, root)
    dfs(root.right, root)
{% endhighlight %}


{% details Practice problems %}
- [863. All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/)
- [1257. Smallest Common Region](https://leetcode.com/problems/smallest-common-region/)
- [2096. Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/)
- [2385. Amount of Time for Binary Tree to Be Infected](https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/)
{% enddetails %}

### Tree construction
{% details Practice problems %}
- [105. Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
- [106. Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)
- [889. Construct Binary Tree from Preorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/)
- [1008. Construct Binary Search Tree from Preorder Traversal](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/)
{% enddetails %}

### Serialize and Deserialize tree
{% details Practice problems %}
- [297. Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)
- [331. Verify Preorder Serialization of a Binary Tree](https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/)
- [428. Serialize and Deserialize N-ary Tree](https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/)
- [449. Serialize and Deserialize BST](https://leetcode.com/problems/serialize-and-deserialize-bst/)
{% enddetails %}

### Distance between two Nodes
{% details Practice problems %}
- [783. Minimum Distance Between BST Nodes](https://leetcode.com/problems/minimum-distance-between-bst-nodes/)
- [834. Sum of Distances in Tree](https://leetcode.com/problems/sum-of-distances-in-tree/)
- [863. All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/)
- [1740. Find Distance in a Binary Tree](https://leetcode.com/problems/find-distance-in-a-binary-tree/)
- [2096. Step-By-Step Directions From a Binary Tree Node to Another](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/)
{% enddetails %}

### Binary Search Tree (BST)
{% details Practice problems %}
- [95. Unique Binary Search Trees II](https://leetcode.com/problems/unique-binary-search-trees-ii/) (with DP)
- [96. Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/) (with DP)
- [255. Verify Preorder Sequence in Binary Search Tree](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/)
- [270. Closest Binary Search Tree Value](https://leetcode.com/problems/closest-binary-search-tree-value/)
- [272. Closest Binary Search Tree Value II](https://leetcode.com/problems/closest-binary-search-tree-value-ii/)
- [450. Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/)
- [501. Find Mode in Binary Search Tree](https://leetcode.com/problems/find-mode-in-binary-search-tree/)
- [530. Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/)
- [669. Trim a Binary Search Tree](https://leetcode.com/problems/trim-a-binary-search-tree/)
- [700. Search in a Binary Search Tree](https://leetcode.com/problems/search-in-a-binary-search-tree/)
- [783. Minimum Distance Between BST Nodes](https://leetcode.com/problems/minimum-distance-between-bst-nodes/)
- [1382. Balance a Binary Search Tree](https://leetcode.com/problems/balance-a-binary-search-tree/)
- [1305. All Elements in Two Binary Search Trees](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/)
{% enddetails %}

### Validate
{% details Practice problems %}
- [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)
- [1361. Validate Binary Tree Nodes](https://leetcode.com/problems/validate-binary-tree-nodes/)
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
- [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)
- [208. Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)
- [211. Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/)
- [336. Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)
- [386. Lexicographical Numbers](https://leetcode.com/problems/lexicographical-numbers/)
- [642. Design Search Autocomplete System](https://leetcode.com/problems/design-search-autocomplete-system/)
- [677. Map Sum Pairs](https://leetcode.com/problems/map-sum-pairs/)
- [692. Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/)
- [720. Longest Word in Dictionary](https://leetcode.com/problems/longest-word-in-dictionary/)
{% enddetails %}

## Graph
References:
1. https://leetcode.com/discuss/post/3900838/mastering-graph-algorithms-a-comprehensi-xyws/
1. https://blog.algomaster.io/p/master-graph-algorithms-for-coding

### Breadth First Search (BFS)
BFS is a fundamental graph traversal algorithm that systematically explores the vertices of a graph level by level.

Starting from a selected node, BFS visits all of its immediate neighbors first before moving on to the neighbors of those neighbors. This ensures that nodes are explored in order of their distance from the starting node. BFS is particularly useful in scenarios such as:
- Finding the minimal number of edges between two nodes.
- Processing nodes in a hierarchical order, like in tree data structures.
- Finding people within a certain degree of connection in a social network.

Complexity (V: no. of vertices; E: no. of edges):
- Time: O(V + E): the algorithm visits each vertex and edge once.
- Space: O(V): for the queue and visited set used for traversal.

{% highlight python linenos %}
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    while queue:
        vertex = queue.popleft()
        
        if vertex in visited: continue
        visited.add(vertex)
        # so sth

        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
{% endhighlight %}

{% details Practice problems %}
- [127. Word Ladder](https://leetcode.com/problems/word-ladder/)
- [286. Walls and Gates](https://leetcode.com/problems/walls-and-gates/)
- [417. Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)
- [542. 01 Matrix](https://leetcode.com/problems/01-matrix/)
- [695. Max Area of Island](https://leetcode.com/problems/max-area-of-island/)
- [752. Open the Lock](https://leetcode.com/problems/open-the-lock/)
- [815. Bus Routes](https://leetcode.com/problems/bus-routes/)
- [994. Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)
- [1311. Get Watched Videos by Your Friends](https://leetcode.com/problems/get-watched-videos-by-your-friends/)
- [1377. Frog Position After T Seconds](https://leetcode.com/problems/frog-position-after-t-seconds/)
- [2059. Minimum Operations to Convert Number](https://leetcode.com/problems/minimum-operations-to-convert-number/)
- [2101. Detonate the Maximum Bombs](https://leetcode.com/problems/detonate-the-maximum-bombs/)
{% enddetails %}

### Depth First Search (DFS)
DFS is a fundamental graph traversal algorithm used to explore **nodes** and **edges** of a graph systematically.

It starts at a designated root node and explores as far as possible along each branch before backtracking. DFS is particularly useful in scenarios like:
- Find a path between two nodes.
- Checking if a graph contains any cycles.
- Identifying isolated subgraphs within a larger graph.
- Topological Sorting: Scheduling tasks without violating dependencies.


Complexity (V: no. of vertices; E: no. of edges):
- Time: O(V + E): the algorithm visits each vertex and edge once.
- Space: O(V): due to stack used for recursion (in recursive implementation) or an explicit stack (in iterative implementation).

{% tabs dfs-approach %}

{% tab dfs-approach recursive %}
{% highlight python linenos %}
def dfs(graph, node, visited: set):
    visited.add(node)

    # do sth with node
    
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
{% endhighlight %}
{% endtab %}

{% tab dfs-approach iterative %}
{% highlight python linenos %}
def dfs(graph, start):
    visited = set()
    stack = [start]
    while stack:
        node = stack.pop()
        if node not in visited:
            visited.add(node)
            print(f"Visiting {node}")
            # Add neighbors to stack
            stack.extend([neighbor for neighbor in graph[node] if neighbor not in visited])
    return visited
{% endhighlight %}
{% endtab %}

{% endtabs %}


{% details Practice problems %}
- [113. Path Sum II](https://leetcode.com/problems/path-sum-ii/)
- [133. Clone Graph](https://leetcode.com/problems/clone-graph/)
- [329. Longest Increasing Path in a Matrix](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/)
- [515. Find Largest Value in Each Tree Row](https://leetcode.com/problems/find-largest-value-in-each-tree-row/)
- [797. All Paths From Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target/)
- [1245. Tree Diameter](https://leetcode.com/problems/tree-diameter/)
- [1376. Time Needed to Inform All Employees](https://leetcode.com/problems/time-needed-to-inform-all-employees/)
- [1971. Find if Path Exists in Graph](https://leetcode.com/problems/find-if-path-exists-in-graph/)
- [3425. Longest Special Path](https://leetcode.com/problems/longest-special-path/)
{% enddetails %}

### Topological Sort
Topological Sort algorithm is used to order the vertices of a Directed Acyclic Graph (DAG) in a linear sequence, such that for every directed edge u $\rightarrow$ v, vertex u comes before vertex v in the ordering.

Essentially, it arranges the nodes in a sequence where all prerequisites come before the tasks that depend on them.

Topological Sort is particularly useful in scenarios like:
- Determining the order of tasks while respecting dependencies (e.g., course prerequisites, build systems).
- Figuring out the order to install software packages that depend on each other.
- Ordering files or modules so that they can be compiled without errors due to missing dependencies.

Complexity:
- Time: O(V + E) since each node and edge is processed exactly once.
- Space: O(V) for storing the topological order and auxiliary data structures like the visited set or in-degree array.

{% tabs topo-sort-approach %}

{% tab topo-sort-approach DFS-based %}
{% highlight python linenos %}
def topological_sort_dfs(graph):
    visited = set()
    stack = []

    def dfs(vertex):
        visited.add(vertex)
        for neighbor in graph.get(vertex, []):
            if neighbor not in visited:
                dfs(neighbor)
        stack.append(vertex)

    for vertex in graph:
        if vertex not in visited:
            dfs(vertex)
    return stack[::-1]  # Reverse the stack to get the correct order
{% endhighlight %}

Explanation:
1. DFS Traversal: Visit each node and recursively explore its neighbors.
1. Post-Order Insertion: After visiting all descendants of a node, add it to the stack.
1. Result: Reverse the stack to obtain the topological ordering.

{% endtab %}

{% tab topo-sort-approach BFS-based(Kahn's) %}
{% highlight python linenos %}
from collections import deque

def topological_sort_kahn(graph):
    in_degree = {u: 0 for u in graph}
    for u in graph:
        for v in graph[u]:
            in_degree[v] = in_degree.get(v, 0) + 1

    queue = deque([u for u in in_degree if in_degree[u] == 0])
    topo_order = []

    while queue:
        u = queue.popleft()
        topo_order.append(u)
        for v in graph.get(u, []):
            in_degree[v] -= 1
            if in_degree[v] == 0:
                queue.append(v)

    if len(topo_order) == len(in_degree):
        return topo_order
    else:
        raise Exception("Graph has at least one cycle")
{% endhighlight %}

Explanation:
1. Compute In-Degrees: Calculate the number of incoming edges for each node.
1. Initialize Queue: Start with nodes that have zero in-degree.
1. Process Nodes:
    1. Dequeue a node, add it to the topological order.
    1. Reduce the in-degree of its neighbors.
    1. Enqueue neighbors whose in-degree becomes zero.
1. Cycle Detection: If the topological order doesn't include all nodes, the graph contains a cycle.

{% endtab %}

{% endtabs %}

{% details Practice problems %}
- [207. Course Schedule](https://leetcode.com/problems/course-schedule/)
- [210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
- [269. Alien Dictionary](https://leetcode.com/problems/alien-dictionary/)
- [310. Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/)
- [444. Sequence Reconstruction](https://leetcode.com/problems/sequence-reconstruction/)
- [630. Course Schedule III](https://leetcode.com/problems/course-schedule-iii/)
- [802. Find Eventual Safe States](https://leetcode.com/problems/find-eventual-safe-states/)
- [851. Loud and Rich](https://leetcode.com/problems/loud-and-rich/)
- [1136. Parallel Courses](https://leetcode.com/problems/parallel-courses/)
- [1203. Sort Items by Groups Respecting Dependencies](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/)
- [1462. Course Schedule IV](https://leetcode.com/problems/course-schedule-iv/)
- [2192. All Ancestors of a Node in a Directed Acyclic Graph](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/)
- [2204. Distance to a Cycle in Undirected Graph](https://leetcode.com/problems/distance-to-a-cycle-in-undirected-graph/)
- [2371. Minimize Maximum Value in a Grid](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/editorial/)
{% enddetails %}

### Union Find (a.k.a Disjoint Set Union - DSU)
Union Find is a data structure that keeps track of a set of elements partitioned into disjoint (non-overlapping) subsets.

It supports two primary operations:
1. Find (Find-Set): Determines which subset a particular element belongs to. This can be used to check if two elements are in the same subset.
1. Union: Merges two subsets into a single subset, effectively connecting two elements.

Union Find is especially useful in scenarios like:
- Quickly checking if adding an edge creates a cycle in a graph.
- Building a Minimum Spanning Tree by connecting the smallest edges while avoiding cycles.
- Determining if two nodes are in the same connected component.
- Grouping similar elements together.

Complexity:
- Time (per Operation): Find and Union: Amortized O(α(n)), where α(n) is the inverse Ackermann function, which is nearly constant for all practical purposes.
- Space: O(n), where n is the number of elements, for storing the parent and rank arrays.

How Union Find Works:
The Union Find data structure typically consists of:
1. Parent Array (parent): An array where parent[i] holds the parent of element i. Initially, each element is its own parent.
1. Rank Array (rank): An array that approximates the depth (or height) of the tree representing each set. Used to optimize unions.

Operations:
- Find(x):
    - Finds the representative (root) of the set containing x.
    - Follows parent pointers until reaching a node that is its own parent.
    - Path Compression is used to optimize the time complexity of find operation, by making each node on the path point directly to the root, flattening the structure.
- Union(x, y):
    - Merges the sets containing x and y.
    - Find the roots of x and y, then make one root the parent of the other.
    - Union by Rank optimization is used where the root of the smaller tree is made a child of the root of the larger tree to keep the tree shallow.

{% highlight python linenos %}
class UnionFind:
    def __init__(self, size):
        self.parent = [i for i in range(size)]  # Each node is its own parent initially
        self.rank = [0] * size  # Rank (depth) of each tree

    def find(self, x):
        if self.parent[x] != x:
            # Path compression: flatten the tree
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        # Find roots of the sets containing x and y
        root_x = self.find(x)
        root_y = self.find(y)

        if root_x == root_y:
            # Already in the same set
            return

        # Union by rank: attach smaller tree to root of larger tree
        if self.rank[root_x] < self.rank[root_y]:
            self.parent[root_x] = root_y
        elif self.rank[root_y] < self.rank[root_x]:
            self.parent[root_y] = root_x
        else:
            # Ranks are equal; choose one as new root and increment its rank
            self.parent[root_y] = root_x
            self.rank[root_x] += 1
{% endhighlight %}

{% details Practice problems %}
- [261. Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/)
- [684. Redundant Connection](https://leetcode.com/problems/redundant-connection/)
- [721. Accounts Merge](https://leetcode.com/problems/accounts-merge/)
- [924. Minimize Malware Spread](https://leetcode.com/problems/minimize-malware-spread/)
- [2371. Minimize Maximum Value in a Grid](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/editorial/)
{% enddetails %}

### Cycles (Cycle Detection)
Cycle Detection involves determining whether a graph contains any cycles—a path where the first and last vertices are the same, and no edges are repeated.

In other words, it's a sequence of vertices starting and ending at the same vertex, with each adjacent pair connected by an edge.

Cycle Detection is particularly important in scenarios such as:
- Detecting deadlocks in operating systems, to detect circular wait conditions.
- Ensuring there are no circular dependencies in package management or build systems.
- Understanding whether a graph is a tree or a cyclic graph.

Complexity:
- Time: O(V + E), since each node and edge is processed at most once.
- Space: O(V) for the visited set and recursion stack in DFS.

{% tabs cycle-detection-approach %}

{% tab cycle-detection-approach DFS(undirected) %}
{% highlight python linenos %}
def has_cycle_undirected(graph):
    visited = set()

    def dfs(vertex, parent):
        visited.add(vertex)
        for neighbor in graph.get(vertex, []):
            if neighbor not in visited:
                if dfs(neighbor, vertex):
                    return True
            elif neighbor != parent:
                return True  # Cycle detected
        return False

    for vertex in graph:
        if vertex not in visited:
            if dfs(vertex, None):
                return True
    return False
{% endhighlight %}

Explanation:
- DFS Traversal: Start DFS from unvisited nodes.
- Parent Tracking: Keep track of the parent node to avoid false positives.
- Cycle Detection Condition: If a visited neighbor is not the parent, a cycle is detected.

{% endtab %}

{% tab cycle-detection-approach DFS(directed) %}
{% highlight python linenos %}
def has_cycle_directed(graph):
    visited = set()
    recursion_stack = set()

    def dfs(vertex):
        visited.add(vertex)
        recursion_stack.add(vertex)
        for neighbor in graph.get(vertex, []):
            if neighbor not in visited:
                if dfs(neighbor):
                    return True
            elif neighbor in recursion_stack:
                return True  # Cycle detected
        recursion_stack.remove(vertex)
        return False

    for vertex in graph:
        if vertex not in visited:
            if dfs(vertex):
                return True
    return False
{% endhighlight %}

Explanation:
- Visited Set and Recursion Stack:
    - `visited` tracks all visited nodes.
    - `recursion_stack` tracks nodes in the current path.
- Cycle Detection Condition:
    - If a neighbor is in the recursion stack, a cycle is detected.

{% endtab %}


{% tab cycle-detection-approach DSU(undirected) %}
{% highlight python linenos %}
class UnionFind:
    def __init__(self):
        self.parent = {}

    def find(self, x):
        # Path compression
        if self.parent.get(x, x) != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent.get(x, x)

    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)
        if root_x == root_y:
            return False  # Cycle detected
        self.parent[root_y] = root_x
        return True

def has_cycle_union_find(edges):
    uf = UnionFind()
    for u, v in edges:
        if not uf.union(u, v):
            return True
    return False
{% endhighlight %}

Explanation:
- Initialization: Create a UnionFind instance.
- Processing Edges:
    - For each edge, attempt to union the vertices.
    - If union returns False, a cycle is detected.

{% endtab %}

{% endtabs %}

{% details Practice problems %}
- [207. Course Schedule](https://leetcode.com/problems/course-schedule/)
- [261. Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/)
- [1559. Detect Cycles in 2D Grid](https://leetcode.com/problems/detect-cycles-in-2d-grid/)
{% enddetails %}


### Cycles (Eulerian Path)
Ref: https://cp-algorithms.com/graph/euler_path.html

A Eulerian path is a path in a graph that passes through all of its edges exactly once. A Eulerian cycle is a Eulerian path that is a cycle.

The problem is to find the Eulerian path in an undirected multigraph with loops.

**Details Will be added later**

{% details Practice problems %}
- [332. Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)
- [2097. Valid Arrangement of Pairs](https://leetcode.com/problems/valid-arrangement-of-pairs/)
{% enddetails %}

### Connected Components
- In **undirected graphs**: a *connected component* is a set of vertices where each vertex is connected to at least one other vertex in the same set via some path. Essentially, it's a maximal group of nodes where every node is reachable from every other node in the same group.
- In **directed graphs**: refer to *strongly connected components (SCCs)*, where there is a directed path from each vertex to every other vertex within the same component.


{% tabs connected-components-approach %}

{% tab connected-components-approach find-connected-components(undirected) %}
We can find connected components using graph traversal algorithms like Depth-First Search (DFS) or Breadth-First Search (BFS).
{% highlight python linenos %}
def connected_components(graph):
    # 1. Initialize visited (store visited nodes) and components (store connected component)
    visited = set()
    components = []

    def dfs(node, component):
        visited.add(node)
        component.append(node)
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                dfs(neighbor, component)

    # 2. Traversal each unvisited node
    for node in graph:
        if node not in visited:
            # 3. perform DFS/BFS and mark all reachable nodes from this node as part of the same component.
            component = []
            dfs(node, component)
            components.append(component)

    return components
{% endhighlight %}
Explanation:
- Visited Set: Keeps track of nodes that have been visited to prevent revisiting.
- DFS Function:
    - Recursively explores all neighbors of a node.
    - Adds each visited node to the current `component`.
- Main Loop:
    - Iterates over all nodes in the graph.
    - For unvisited nodes, initiates DFS and collects the connected component.

Complexity:
- Time: O(V + E) since each node and edge is visited exactly once.
- Space: O(V) due to the visited set and the recursion stack (in DFS) or queue (in BFS).
{% endtab %}


{% tab connected-components-approach find-SCCs(directed) %}
Find strongly connected components in a directed graph using algorithms like:
- Kosaraju's
- Tarjan's
{% endtab %}

{% endtabs %}

{% details Practice problems %}
- [547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/)
- [1319. Number of Operations to Make Network Connected](https://leetcode.com/problems/number-of-operations-to-make-network-connected/)
{% enddetails %}

### Bipartite Graphs
A bipartite graph is a type of graph whose vertices can be divided into two disjoint and independent sets, usually denoted as U and V, such that every edge connects a vertex from U to one in V.

In other words, no edge connects vertices within the same set.

Properties of Bipartite Graphs:
- Two-Colorable: A graph is bipartite if and only if it can be colored using two colors such that no two adjacent vertices have the same color.
- No Odd Cycles: Bipartite graphs do not contain cycles of odd length.

How to Check if a Graph is Bipartite:
We can determine whether a graph is bipartite by attempting to color it using two colors without assigning the same color to adjacent vertices. If successful, the graph is bipartite. This can be done using:
- Breadth-First Search (BFS): Assign colors level by level.
- Depth-First Search (DFS): Assign colors recursively.

{% highlight python linenos %}
from collections import deque

def is_bipartite(graph):
    color = {}
    for node in graph:
        if node not in color:
            queue = deque([node])
            color[node] = 0  # Assign first color
            while queue:
                current = queue.popleft()
                for neighbor in graph[current]:
                    if neighbor not in color:
                        color[neighbor] = 1 - color[current]  # Assign opposite color
                        queue.append(neighbor)
                    elif color[neighbor] == color[current]:
                        return False  # Adjacent nodes have the same color
    return True
{% endhighlight %}

Explanation:
- Initialization: Create a `color` dictionary to store the color assigned to each node.
- BFS Traversal: For each uncolored node, start BFS.
    - Assign the starting node a color (0 or 1).
    - For each neighbor:
        - If uncolored, assign the opposite color and enqueue.
        - If already colored and has the same color as the current node, the graph is not bipartite.
- Result: If the traversal completes without conflicts, the graph is bipartite.

Complexity:
- Time: O(V + E) since each node and edge is visited exactly once.
- Space: O(V) due to the color set and the recursion stack (in DFS) or queue (in BFS).

{% details Practice problems %}
- [785. Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/)
- [886. Possible Bipartition](https://leetcode.com/problems/possible-bipartition/)
- [1042. Flower Planting With No Adjacent](https://leetcode.com/problems/flower-planting-with-no-adjacent/)
{% enddetails %}

### Flood Fill
Flood Fill is an algorithm that determines and alters the area connected to a given node in a multi-dimensional array.

Starting from a seed point, it finds or fills (or recolors) all connected pixels or cells that have the same color or value.

How Flood Fill Works:
1. Starting Point: Begin at the seed pixel (starting coordinates).
1. Check the Color: If the color of the current pixel is the target color (the one to be replaced), proceed.
1. Replace the Color: Change the color of the current pixel to the new color.
1. Recursively Visit Neighbors:
    - Move to neighboring pixels (up, down, left, right—or diagonally, depending on implementation).
    - Repeat the process for each neighbor that matches the target color.
1. Termination: The algorithm ends when all connected pixels of the target color have been processed.

{% tabs dfs-approach %}

{% tab dfs-approach recursive %}
{% highlight python linenos %}
def flood_fill_recursive(image, sr, sc, new_color):
    rows, cols = len(image), len(image[0])
    color_to_replace = image[sr][sc]
    if color_to_replace == new_color:
        return image

    def dfs(r, c):
        if (0 <= r < rows and 0 <= c < cols and image[r][c] == color_to_replace):
            image[r][c] = new_color
            # Explore neighbors: up, down, left, right
            dfs(r + 1, c)  # Down
            dfs(r - 1, c)  # Up
            dfs(r, c + 1)  # Right
            dfs(r, c - 1)  # Left

    dfs(sr, sc)
    return image
{% endhighlight %}
{% endtab %}

{% tab dfs-approach iterative %}
{% highlight python linenos %}
from collections import deque

def flood_fill_iterative(image, sr, sc, new_color):
    rows, cols = len(image), len(image[0])
    color_to_replace = image[sr][sc]
    if color_to_replace == new_color:
        return image

    queue = deque()
    queue.append((sr, sc))
    image[sr][sc] = new_color

    while queue:
        r, c = queue.popleft()
        for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:  # Directions: up, down, left, right
            nr, nc = r + dr, c + dc
            if (0 <= nr < rows and 0 <= nc < cols and image[nr][nc] == color_to_replace):
                image[nr][nc] = new_color
                queue.append((nr, nc))

    return image
{% endhighlight %}
{% endtab %}

{% endtabs %}


{% details Practice problems %}
- [130. Surrounded Regions](https://leetcode.com/problems/surrounded-regions/)
- [200. Number of Islands](https://leetcode.com/problems/number-of-islands/)
- [733. Flood Fill](https://leetcode.com/problems/flood-fill/)
{% enddetails %}

### Minimum Spanning Tree (MST)
Approaches:
- Kruskal's
- Prim's

{% details Practice problems %}
- [1584. Min Cost to Connect All Points](https://leetcode.com/problems/min-cost-to-connect-all-points/)
{% enddetails %}


### Shortest Path
Approaches:
- Dijkstra's
- Bellman-Ford
- Floyd-Warshall
- BFS
- A*

{% tabs shortest-path-approach %}

{% tab shortest-path-approach dijkstra %}
When to use:
- Finds the shortest paths from a single source vertex to all other vertices in a graph with non-negative edge weights.
- It’a a greedy algorithm that uses a priority queue (min-heap).

Complexity:
- Time: O(V + E log V) using a min-heap (priority queue).
- Space: O(V) for storing distances and the priority queue.


{% highlight python linenos %}
import heapq

def dijkstra(graph, start):
    # graph: adjacency list where graph[u] = [(v, weight), ...]
    distances = {vertex: float('inf') for vertex in graph}
    distances[start] = 0
    priority_queue = [(0, start)]
    while priority_queue:
        current_distance, current_vertex = heapq.heappop(priority_queue)
        # Skip if we have found a better path already
        if current_distance > distances[current_vertex]:
            continue
        for neighbor, weight in graph[current_vertex]:
            distance = current_distance + weight
            # If a shorter path to neighbor is found
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(priority_queue, (distance, neighbor))
    return distances
{% endhighlight %}
{% endtab %}

{% tab shortest-path-approach bellman-ford %}
When to use:
- Computes shortest paths from a single source vertex to all other vertices, even when the graph has negative edge weights.
- It can detect negative cycles

Complexity:
- Time: O(V * E)
- Space: O(V) for storing distances.

{% highlight python linenos %}
def bellman_ford(graph, start):
    # graph: list of edges [(u, v, weight), ...]
    num_vertices = len({u for edge in graph for u in edge[:2]})
    distances = {vertex: float('inf') for edge in graph for vertex in edge[:2]}
    distances[start] = 0

    # Relax edges repeatedly
    for _ in range(num_vertices - 1):
        for u, v, weight in graph:
            if distances[u] + weight < distances[v]:
                distances[v] = distances[u] + weight

    # Check for negative-weight cycles
    for u, v, weight in graph:
        if distances[u] + weight < distances[v]:
            raise Exception("Graph contains a negative-weight cycle")

    return distances
{% endhighlight %}
{% endtab %}

{% tab shortest-path-approach BFS %}
When to use:
- Applicable for unweighted graphs or graphs where all edges have the same weight.
- Finds the shortest path by exploring neighbor nodes level by level.

Implementation: see [BFS Section](#breadth-first-search-bfs)
{% endtab %}

{% tab shortest-path-approach floyd-warshall %}
When to use:
- Computes shortest paths between all pairs of vertices.
- Suitable for dense graphs with smaller numbers of vertices.
- The algorithm iteratively updates the shortest paths between all pairs of vertices by considering all possible intermediate vertices.

Complexity:
- Time: O(V^3)
- Space: O(V^2) for storing the distance array.

{% highlight python linenos %}
def floyd_warshall(graph):
    # Initialize distance and next_node matrices
    nodes = list(graph.keys())
    dist = {u: {v: float('inf') for v in nodes} for u in nodes}
    next_node = {u: {v: None for v in nodes} for u in nodes}

    # Initialize distances based on direct edges
    for u in nodes:
        dist[u][u] = 0
        for v, weight in graph[u]:
            dist[u][v] = weight
            next_node[u][v] = v

    # Floyd-Warshall algorithm
    for k in nodes:
        for i in nodes:
            for j in nodes:
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
                    next_node[i][j] = next_node[i][k]

    # Check for negative cycles
    for u in nodes:
        if dist[u][u] < 0:
            raise Exception("Graph contains a negative-weight cycle")

    return dist, next_node
{% endhighlight %}
{% endtab %}

{% tab shortest-path-approach A*(A-star) %}
When to use:
- Used for graphs where you have a heuristic estimate of the distance to the target.
- Commonly used in pathfinding and graph traversal, especially in games and AI applications.

Complexity:
- Time:
    - Worst-case: O(b^d), where b is the branching factor (average number of successors per state) and d is the depth of the solution.
    - Best-case: O(d), when the heuristic function is perfect and leads directly to the goal.
- Space: O(b^d), as it needs to store all generated nodes in memory.


{% highlight python linenos %}
import heapq

def a_star(graph, start, goal, heuristic):
    open_set = []
    heapq.heappush(open_set, (0 + heuristic(start, goal), 0, start, [start]))  # (f_score, g_score, node, path)
    closed_set = set()

    while open_set:
        f_score, g_score, current_node, path = heapq.heappop(open_set)

        if current_node == goal:
            return path  # Shortest path found

        if current_node in closed_set:
            continue
        closed_set.add(current_node)

        for neighbor, weight in graph[current_node]:
            if neighbor in closed_set:
                continue
            tentative_g_score = g_score + weight
            tentative_f_score = tentative_g_score + heuristic(neighbor, goal)
            heapq.heappush(open_set, (tentative_f_score, tentative_g_score, neighbor, path + [neighbor]))

    return None  # Path not found
{% endhighlight %}
{% endtab %}

{% endtabs %}

{% details Practice problems %}
- [433. Minimum Genetic Mutation](https://leetcode.com/problems/minimum-genetic-mutation/)
- [490. The Maze](https://docs.google.com/document/d/191sP3H_LRmcHIt0MkMzDWyAxPcWv3ahSKsgEtUsXbdE/edit?tab=t.0)
- [505. The Maze II](https://leetcode.com/problems/the-maze-ii/)
- [743. Network Delay Time](https://leetcode.com/problems/network-delay-time/)
- [773. Sliding Puzzle](https://leetcode.com/problems/sliding-puzzle/)
- [778. Swim in Rising Water](https://leetcode.com/problems/swim-in-rising-water/)
- [787. Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
- [847. Shortest Path Visiting All Nodes](https://leetcode.com/problems/shortest-path-visiting-all-nodes/)
- [864. Shortest Path to Get All Keys](https://leetcode.com/problems/shortest-path-to-get-all-keys/)
- [1091. Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/)
- [1284. Minimum Number of Flips to Convert Binary Matrix to Zero Matrix](https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/)
- [1514. Path with Maximum Probability](https://leetcode.com/problems/path-with-maximum-probability/)
- [1631. Path With Minimum Effort](https://leetcode.com/problems/path-with-minimum-effort/)
- [1730. Shortest Path to Get Food](https://leetcode.com/problems/shortest-path-to-get-food/)
- [2492. Minimum Score of a Path Between Two Cities](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/)
- [2812. Find the Safest Path in a Grid](https://leetcode.com/problems/find-the-safest-path-in-a-grid/)
{% enddetails %}



## Backtracking
Reference:
1. https://leetcode.com/discuss/post/1405817/backtracking-algorithm-problems-to-pract-lujf/


Patterns for Backtracking:
1. Permutation
1. Combination
1. Subset

Generic formula
```pseudocode
State: path (current combination), start (where to start looping).

Record solution:
    all lengths → record path every call;
    fixed length k → record only if len(path) == k.

Transition:
    with repetition → backtrack(path + [nums[i]], i).
    without repetition → backtrack(path + [nums[i]], i + 1).

```

### Permutation

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

{% details Practice problems %}
- [31. Next Permutation](https://leetcode.com/problems/next-permutation/)
- [46. Permutations](https://leetcode.com/problems/permutations/)
- [47. Permutations II](https://leetcode.com/problems/permutations-ii/)
- [60. Permutation Sequence](https://leetcode.com/problems/permutation-sequence/)
{% enddetails %}


### Combination

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

{% details Practice problems %}
- [39. Combination Sum](https://leetcode.com/problems/combination-sum/)
- [40. Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)
- [77. Combinations](https://leetcode.com/problems/combinations/)
- [216. Combination Sum III](https://leetcode.com/problems/combination-sum-iii/)
{% enddetails %}


### Subset / Power Set

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

{% details Practice problems %}
- [78. Subsets](https://leetcode.com/problems/subsets/)
- [90. Subsets II](https://leetcode.com/problems/subsets-ii/)
- [113. Path Sum II](https://leetcode.com/problems/path-sum-ii/)
{% enddetails %}

### Partitioning (Palindrome / Segmentation)
Key idea:
1. Try all possible cuts
1. Validate each segment before recursing

{% details Practice problems %}
- [93. Restore IP Addresses](https://leetcode.com/problems/restore-ip-addresses/)
- [131. Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)
- [132. Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)
- [140. Word Break II](https://leetcode.com/problems/word-break-ii/)
- [1278. Palindrome Partitioning III](https://leetcode.com/problems/palindrome-partitioning-iii/)
- [1745. Palindrome Partitioning IV](https://leetcode.com/problems/palindrome-partitioning-iv/)
{% enddetails %}

### Constraint Satisfaction (Grid / Placement problems)
Key idea:
1. Try all possibilities
1. Check validity before going deeper
1. Backtrack if invalid

{% details Practice problems %}
- [37. Sudoku Solver](https://leetcode.com/problems/sudoku-solver/)
- [51. N-Queens](https://leetcode.com/problems/n-queens/)
- [52. N-Queens II](https://leetcode.com/problems/n-queens-ii/)
- [79. Word Search](https://leetcode.com/problems/word-search/)
- [489. Robot Room Cleaner](https://leetcode.com/problems/robot-room-cleaner/)
- [1219. Path with Maximum Gold](https://leetcode.com/problems/path-with-maximum-gold/)
{% enddetails %}

### Decision Tree / “Try all possibilities” (General Backtracking)
Key idea:
1. At each step: try all options
1. Recurse → undo choice

{% details Practice problems %}
- [17. Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)
- [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)
- [89. Gray Code](https://leetcode.com/problems/gray-code/)
- [257. Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/)
{% enddetails %}

## Bit manipulation
Reference:
1. https://www.hackerearth.com/practice/basic-programming/bit-manipulation/basics-of-bit-manipulation/tutorial/
1. https://leetcode.com/problems/sum-of-two-integers/solutions/84278/a-summary-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently

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
- [136. Single Number](https://leetcode.com/problems/single-number/)
- [137. Single Number II](https://leetcode.com/problems/single-number-ii/)
- [169. Majority Element](https://leetcode.com/problems/majority-element/)
- [187. Repeated DNA Sequences](https://leetcode.com/problems/repeated-dna-sequences/)
- [190. Reverse Bits](https://leetcode.com/problems/reverse-bits/)
- [191. Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/)
- [201. Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/)
- [231. Power of Two](https://leetcode.com/problems/power-of-two/)
- [260. Single Number III](https://leetcode.com/problems/single-number-iii/)
- [268. Missing Number](https://leetcode.com/problems/missing-number/)
- [318. Maximum Product of Word Lengths](https://leetcode.com/problems/maximum-product-of-word-lengths/)
- [342. Power of Four](https://leetcode.com/problems/power-of-four/)
- [371. Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/)
- [751. IP to CIDR](https://leetcode.com/problems/ip-to-cidr/)
- [1009. Complement of Base 10 Integer](https://leetcode.com/problems/complement-of-base-10-integer/)
- [1356. Sort Integers by The Number of 1 Bits](https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/)
- [2166. Design Bitset](https://leetcode.com/problems/design-bitset/)
{% enddetails %}

## Dynamic Programming
References:
1. https://blog.algomaster.io/p/20-patterns-to-master-dynamic-programming

Notes:
1. DP vs Sliding Window: [Count the Number of Good Subarrays Leetcode 2537](https://youtu.be/LeEvAlEm_DY) and https://leetcode.com/problems/longest-non-decreasing-subarray-after-replacing-at-most-one-element/solutions/7337072/why-not-sliding-window-answer-here-by-ka-d6a8: focus on valid/invalid rules for Window

### Fibonacci Sequence (or linear sequence, linear time)
The Fibonacci sequence pattern is useful when the solution to a problem depends on the solutions of smaller instances of the same problem.

There is a clear recursive relationship, often resembling the classic Fibonacci sequence:
$$
F(n) = F(n-1) + F(n-2)
$$

{% details Practice problems %}
- [45. Jump Game II](https://leetcode.com/problems/jump-game-ii/)
- [55. Jump Game](https://leetcode.com/problems/jump-game/)
- [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
- [198. House Robber](https://leetcode.com/problems/house-robber/)
- [213. House Robber II](https://leetcode.com/problems/house-robber-ii/)
- [376. Wiggle Subsequence](https://leetcode.com/problems/wiggle-subsequence/)
- [740. Delete and Earn](https://leetcode.com/problems/delete-and-earn/)
- [746. Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)
- [790. Domino and Tromino Tiling](https://leetcode.com/problems/domino-and-tromino-tiling/)
- [983. Minimum Cost For Tickets](https://leetcode.com/problems/minimum-cost-for-tickets/)
- [1055. Shortest Way to Form String](https://leetcode.com/problems/shortest-way-to-form-string/)
- [1105. Filling Bookcase Shelves](https://leetcode.com/problems/filling-bookcase-shelves/)
- [1218. Longest Arithmetic Subsequence of Given Difference](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/)
- [1235. Maximum Profit in Job Scheduling](https://leetcode.com/problems/maximum-profit-in-job-scheduling/)
- [1326. Minimum Number of Taps to Open to Water a Garden](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/)
- [1406. Stone Game III](https://leetcode.com/problems/stone-game-iii/)
- [1510. Stone Game IV](https://leetcode.com/problems/stone-game-iv/)
- [3186. Maximum Total Damage With Spell Casting](https://leetcode.com/problems/maximum-total-damage-with-spell-casting/)
{% enddetails %}

### Kadane's Algorithm
Kadane's Algorithm is primarily used for solving the Maximum Subarray Problem and its variations where the problem asks to optimize a contiguous subarray within a one-dimensional numeric array

{% details Practice problems %}
- [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
- [152. Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/)
- [918. Maximum Sum Circular Subarray](https://leetcode.com/problems/maximum-sum-circular-subarray/)
{% enddetails %}

### 0/1 Knapsack
The 0/1 Knapsack pattern is useful when:
- You have a set of items, each with a weight and a value.
- You need to select a subset of these items.
- There's a constraint on the total weight (or some other resource) you can use.
- You want to maximize (or minimize) the total value of the selected items.
- Each item can be chosen only once (hence the "0/1" - you either take it or you don't).


{% details Practice problems %}
- [343. Integer Break](https://leetcode.com/problems/integer-break/)
- [416. Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
- [474. Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/)
- [494. Target Sum](https://leetcode.com/problems/target-sum/)
- [871. Minimum Number of Refueling Stops](https://leetcode.com/problems/minimum-number-of-refueling-stops/)
- [1049. Last Stone Weight II](https://leetcode.com/problems/last-stone-weight-ii/)
- [1262. Greatest Sum Divisible by Three](https://leetcode.com/problems/greatest-sum-divisible-by-three/)
{% enddetails %}

### Unbounded Knapsack
The Unbounded Knapsack pattern is useful when:
- You have a set of items, each with a weight and a value.
- You need to select items to maximize total value.
- There's a constraint on the total weight (or some other resource) you can use.
- You can select each item multiple times (unlike 0/1 Knapsack where each item can be chosen only once).
- The supply of each item is considered infinite.


{% details Practice problems %}
- [279. Perfect Squares](https://leetcode.com/problems/perfect-squares/)
- [322. Coin Change](https://leetcode.com/problems/coin-change/)
- [377. Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/)
- [518. Coin Change II](https://leetcode.com/problems/coin-change-ii/)
- [1449. Form Largest Integer With Digits That Add up to Target](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/)
{% enddetails %}

### Longest Common Subsequence (LCS)
The Longest Common Subsequence pattern is useful when you are given two sequences and need to find a subsequence that appears in the same order in both the given sequences.

{% details Practice problems %}
- [97. Interleaving String](https://leetcode.com/problems/interleaving-string/)
- [115. Distinct Subsequences](https://leetcode.com/problems/distinct-subsequences/)
- [583. Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/)
- [1092. Shortest Common Supersequence ](https://leetcode.com/problems/shortest-common-supersequence/)
- [1143. Longest Common Subsequence](https://leetcode.com/problems/longest-common-subsequence/)
{% enddetails %}

### Longest Increasing Subsequence (LIS)
The Longest Increasing Subsequence pattern is used to solve problems that involve finding the longest subsequence of elements in a sequence where the elements are in increasing order.

{% details Practice problems %}
- [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
- [354. Russian Doll Envelopes](https://leetcode.com/problems/russian-doll-envelopes/)
- [646. Maximum Length of Pair Chain](https://leetcode.com/problems/maximum-length-of-pair-chain/)
- [673. Number of Longest Increasing Subsequence](https://leetcode.com/problems/number-of-longest-increasing-subsequence/)
- [1043. Partition Array for Maximum Sum](https://leetcode.com/problems/partition-array-for-maximum-sum/)
{% enddetails %}

### Palindromic Subsequence
The Palindromic Subsequence pattern is used when solving problems that involve finding a subsequence within a sequence (usually a string) that reads the same forwards and backwards.

{% details Practice problems %}
- [516. Longest Palindromic Subsequence](https://leetcode.com/problems/longest-palindromic-subsequence/)
- [647. Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)
- [1312. Minimum Insertion Steps to Make a String Palindrome](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/)
{% enddetails %}

### Edit Distance
The Edit Distance pattern is used to solve problems that involve transforming one sequence (usually a string) into another sequence using a minimum number of operations.

The allowed operations typically include insertion, deletion, and substitution.

{% details Practice problems %}
- [10. Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)
- [44. Wildcard Matching](https://leetcode.com/problems/wildcard-matching/)
- [72. Edit Distance](https://leetcode.com/problems/edit-distance/)
- [583. Delete Operation for Two Strings](https://leetcode.com/problems/delete-operation-for-two-strings/)
- [712. Minimum ASCII Delete Sum for Two Strings](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/)
{% enddetails %}

### Subset Sum
The Subset Sum pattern is used to solve problems where you need to determine whether a subset of elements from a given set can sum up to a specific target value.

{% details Practice problems %}
- [416. Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)
- [494. Target Sum](https://leetcode.com/problems/target-sum/)
- [698. Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)
{% enddetails %}

### String Partition
The String Partition pattern is used to solve problems that involve partitioning a string into smaller substrings that satisfy certain conditions.

It’s useful when:
- You're working with problems involving strings or sequences.
- The problem requires splitting the string into substrings or subsequences.
- You need to optimize some property over these partitions (e.g., minimize cost, maximize value).
- The solution to the overall problem can be built from solutions to subproblems on smaller substrings.
- There's a need to consider different ways of partitioning the string.


{% details Practice problems %}
- [132. Palindrome Partitioning II](https://leetcode.com/problems/palindrome-partitioning-ii/)
- [139. Word Break](https://leetcode.com/problems/word-break/)
- [472. Concatenated Words](https://leetcode.com/problems/concatenated-words/)
{% enddetails %}

### Catalan Numbers
The Catalan Number pattern is used to solve combinatorial problems that can be decomposed into smaller, similar subproblems.

Some of the use-cases of this pattern include:
- Counting the number of valid parentheses expressions of a given length
- Counting the number of distinct binary search trees that can be formed with n nodes.
- Counting the number of ways to triangulate a polygon with n+2 sides.


{% details Practice problems %}
- [22. Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)
- [96. Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/)
- [1359. Count All Valid Pickup and Delivery Options](https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/)
{% enddetails %}

### Matrix Chain Multiplication
This pattern is used to solve problems that involve determining the optimal order of operations to minimize the cost of performing a series of operations.

It is based on the popular optimization problem: Matrix Chain Multiplication.

It’s useful when:
- You're dealing with a sequence of elements that can be combined pairwise.
- The cost of combining elements depends on the order of combination.
- You need to find the optimal way to combine the elements.
- The problem involves minimizing (or maximizing) the cost of operations of combining the elements.


{% details Practice problems %}
- [312. Burst Balloons](https://leetcode.com/problems/burst-balloons/)
- [1000. Minimum Cost to Merge Stones](https://leetcode.com/problems/minimum-cost-to-merge-stones/)
{% enddetails %}

### Count Distinct Ways
This pattern is useful when:
- You need to count the number of different ways to achieve a certain goal or reach a particular state.
- The problem involves making a series of choices or steps to reach a target.
- There are multiple valid paths or combinations to reach the solution.
- The problem can be broken down into smaller subproblems with overlapping solutions.
- You're dealing with combinatorial problems that ask "in how many ways" can something be done.


{% details Practice problems %}
- [91. Decode Ways](https://leetcode.com/problems/decode-ways/)
- [639. Decode Ways II](https://leetcode.com/problems/decode-ways-ii/)
- [1416. Restore The Array](https://leetcode.com/problems/restore-the-array/)
{% enddetails %}

### DP on Grids
The DP on Grids pattern is used to solve problems that involve navigating or optimizing paths within a grid (2D array).

For these problems, you need to consider multiple directions of movement (e.g., right, down, diagonal) and solution at each cell depends on the solutions of neighboring cells.

{% details Practice problems %}
- [62. Unique Paths](https://leetcode.com/problems/unique-paths/)
- [64. Minimum Path Sum](https://leetcode.com/problems/minimum-path-sum/)
- [221. Maximal Square](https://leetcode.com/problems/maximal-square/)
- [576. Out of Boundary Paths](https://leetcode.com/problems/out-of-boundary-paths/)
{% enddetails %}

### DP on Trees
The DP on Trees pattern is useful when:
- You're working with tree-structured data represented by nodes and edges.
- The problem can be broken down into solutions of subproblems that are themselves tree problems.
- The problem requires making decisions at each node that affect its children or parent.
- You need to compute values for nodes based on their children or ancestors.


{% details Practice problems %}
- [124. Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
- [337. House Robber III](https://leetcode.com/problems/house-robber-iii/)
{% enddetails %}

### DP on Graphs
The DP on Graphs pattern is useful when:
- You're dealing with problems involving graph structures.
- The problem requires finding optimal paths, longest paths, cycles, or other optimized properties on graphs.
- You need to compute values for nodes or edges based on their neighbors or connected components.
- The problem involves traversing a graph while maintaining some state.


{% details Practice problems %}
- [935. Knight Dialer](https://leetcode.com/problems/knight-dialer/)
- [1269. Number of Ways to Stay in the Same Place After Some Steps](https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps/)
- [2400. Number of Ways to Reach a Position After Exactly k Steps](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/)
{% enddetails %}

### Digit DP
The Digit DP Pattern is useful when:
- You're dealing with problems involving counting or summing over a range of numbers.
- The problem requires considering the digits of numbers individually.
- You need to find patterns or properties related to the digits of numbers within a range.
- The range of numbers is large (often up to 10^18 or more), making brute force approaches infeasible.
- The problem involves constraints on the digits.


{% details Practice problems %}
- [357. Count Numbers with Unique Digits](https://leetcode.com/problems/count-numbers-with-unique-digits/)
- [2376. Count Special Integers](https://leetcode.com/problems/count-special-integers/)
- [3032. Count Numbers With Unique Digits II](https://leetcode.com/problems/count-numbers-with-unique-digits-ii/)
{% enddetails %}

### Bitmasking DP
The Bitmasking DP pattern is used to solve problems that involve a large number of states or combinations, where each state can be efficiently represented using bits in an integer.

It’s particularly useful when:
- You're dealing with problems involving subsets or combinations of elements.
- The total number of elements is relatively small (typically <= 20-30).
- You need to efficiently represent and manipulate sets of elements.
- The problem involves making decisions for each element (include/exclude) or tracking visited/unvisited states.
- You want to optimize space usage in DP solutions.


{% details Practice problems %}
- [464. Can I Win](https://leetcode.com/problems/can-i-win/)
- [473. Matchsticks to Square](https://leetcode.com/problems/matchsticks-to-square/)
- [698. Partition to K Equal Sum Subsets](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/)
- [982. Triples with Bitwise AND Equal To Zero](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/)
- [1240. Tiling a Rectangle with the Fewest Squares](https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/)
{% enddetails %}

### Probability DP
This pattern is useful when:
- You're dealing with problems involving probability calculations.
- The probability of a state depends on the probabilities of previous states.
- You need to calculate the expected value of an outcome.
- The problem involves random processes or games of chance.


{% details Practice problems %}
- [688. Knight Probability in Chessboard](https://leetcode.com/problems/knight-probability-in-chessboard/)
- [808. Soup Servings](https://leetcode.com/problems/soup-servings/)
{% enddetails %}

### State Machine DP
The State Machine DP Pattern is useful when when:
- The problem can be modeled as a series of states and transitions between these states.
- There are clear rules for moving from one state to another.
- The optimal solution depends on making the best sequence of state transitions.
- The problem involves making decisions that affect future states.
- There's a finite number of possible states, and each state can be clearly defined.


{% details Practice problems %}
- [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
- [123. Best Time to Buy and Sell Stock III](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/)
- [309. Best Time to Buy and Sell Stock with Cooldown](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/)
- [552. Student Attendance Record II](https://leetcode.com/problems/student-attendance-record-ii/)
- [714. Best Time to Buy and Sell Stock with Transaction Fee](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/)
- [801. Minimum Swaps To Make Sequences Increasing](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/)
- [1223. Dice Roll Simulation](https://leetcode.com/problems/dice-roll-simulation/)
{% enddetails %}
