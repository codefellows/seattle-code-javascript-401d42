# DSA: Trees

## Overview

What is a tree?  It's like linked list, but with a `branching` sequence rather a `linear`.  They still contain Nodes, the only thing that seperates the structure of a tree from the structure of a linked list, is the Node which now contains multiple (1 or more) node references in a linked list.

3 Types of trees: `Binary Tree` (A tree with no more than 2 references per node), `K-ary Trees` (a tree that has more than 2 node referencese), `Binary Search Trees` (sorted binary tree).

# Terminology

* Root - Top / Head / Front, the beginning node of a tree.
* Node - Still our data storage object, now it can contains 1 or more references to other Nodes.
* Left - One of children nodes (typically visualized on the left side).
* Right - The other child node (typically visualezed on the right side).
* K - the maximum number of references a Tree can have.
* Edges / Branches - A connection between 2 nodes.
* Children - Nodes that can be references by the current node, describes the relations between Nodes.
* Lead - Node with no children is considered a leaf.
* Height - The distance from the root to the furthest leaf.
* Incomplete / Complete - Whether or not all possible Node spaces are filled to the lowest possible level.
* Balancing - A tree is balanced when the height of the left and right subtrees differ by at most one.

## Binary Tree

* Only has 2 other references per node.

## Kary Tree

* 2 or more max references per node.
* Store a number `k` as the max number of references per node.
* Instead of having a `left` or a `right`, you would have `children` or `adjacencies` which is most likely an array.

## Binary Search Tree

* Still only 2 other node references per node.
* These are sorted, in such away that the left and right nodes values segregated based on some property.
  * Usually BST nodes store integers with lesser values on the left, and greater values on the right.

## Traversals (looking at all values in our tree)

* Depth First: favor looking at all the nodes on the left or the right, before moving the other side.
  * We must use either recursion or another data structure (like a queue or a linked list) to store previously visted Nodes.
* Breadth First: Favors looking at node on the left and the right, before moving down to the next set of nodes.
  * Also solvable with recursion, but will probably utilizes a queue.

### Depth First Traversal of a Tree

There are 3 orders in which we can look at nodes in a tree in a depth first manner:

* Pre-order: Start with the current value, move to the left, finish with the right.
* In-order: Start with the left node, than the current value, finish with the right.
* Post-order: Start with the left node, than the right node, finish with the current value.
