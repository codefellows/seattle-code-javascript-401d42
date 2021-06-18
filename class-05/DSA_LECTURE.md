# Linked Lists

We're focusing today on an abstract thing: a way of organizing data.

* What is a Car?
  * drive (go forward)
  * brake (stop the car)
  * play music
  * turn

## What is A Linked List?

A linear sequence of objects that are linked / connected together. (SQL / array / callback -> stack).

* Arrays: Other languages have arrays that are fixed size.
  * Those langauges usesd a linked list to add items to a larger linked list.

## Behaviors

* Linked Lists Traverse down a linear sequence of `Nodes`
* Because `Nodes` contain references to other `Nodes` Linked List are recursive.
* Dynamic structure, that easily `add` and `remove` `Nodes`.

## Terminology

* `Node`: the thing that holds data and is linked together.
  * `value`: stores the data value.
  * `next`: a reference to anther Node or null / undefined.
* `Current`: the node you are currently looking at / referencing.
* `Singly`: All Node point to Node in one direction, they only have a `next` property.
* `Doubly`: Nodes point both direction to each end of the list. Nodes have a `next` and a `previous` property.
* Traversal: Looking at data values within a structure.

## Big O

Analyzing Algorithm / Program efficiency. What we really want look at closely, is how many of code are running and how many times they run, and how much varibales we make, how many references we add, how much resource space we're taking up.  Always analyzed for the the worst.

  * Considerations for space and time.
  * We can think of the notation as comparing the alorithm inputs ( the things the program needs) to th time it takes to run, and the amount space it consumes / uses.
    * As the inputs grow, at what rate does space. time grow

  * Big O: O(n) - linear
  * Big O: O(1) - constant
  * Big O: O(n^2) - exponential
  * Big O: O(logn) - logarithmic
