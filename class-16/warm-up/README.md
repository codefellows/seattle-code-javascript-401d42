# Warm Up - Minimum and Maximum Values in a Binary Search Tree

## Overview

A Binary Search Tree is a data structure that organizes it's Nodes into one of two positions, smaller values on the `left` and larger values on the `right` .  Sometimes we need to traverse a tree and find specific values, in this case the smallest or largest value that exists in a the binary search tree.

## Challenge

Create methods that can find both the largest value and the smallest value.  Use the following class to get started:

```javascript

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}
```

* What is an algorithm we can follow to find the smallest or largest value in a binary search tree?
* Write methods on the Binary Search Tree Class that can return the smallest value in the tree, as well as the largest value.
