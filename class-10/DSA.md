# Data Structures and Algorithms: Stacks and Queues

Both of these data structures are types of linked lists:

> Linked List: Nodes that have a value and reference point to another Node(or null).

We still care about the linear sequence.  The changes we'll implement involve specific behaviors that these linked lists exhibit:

## Stack

The order in which we can remove and add to the Linked List.

* Only allows you to place new values at the head, and remove values from the head.


### Terminology

* `top`: this is what we call the `head` now, refers to the very firs item in he stack.
* `push` : adding a value to he `top` of he stack. The only way the stack has of adding values.
* `pop` : removing a value from the `top` of the stack, this is the only way to remove values fromn the stack.

We describe as 'FiLo`: First in last out.
  * We can do this in constant time: O(1).

### How can we implement his behavior on a stack.

Push: adding a value to the top.

* assume we a value to add:
* create a new node from the value
* point the next to the current `top`.
* set `top` of the stack to be our new `node`.

Efficiency:

* time: O(1)
* space: O(1)

Pop: Removing a value from the top:

* set a `temp` variable to the `top` node.
* move `top` to `temp.next`
* set `temp.next` to null
* return the `temp.value`

## Queue

A queue also ican be dscribed by the order in which Nodes are added and removed, but the order is the opposite from a stack:

> `FIFO`: First in First out. `LiLo`: last in last out.

## Terminology

* `Front`: The place where Nodes get removed.
* `Rear`: The place where Nodes get added.
* `enqueue`: Adding a node to the `rear` of the queue.
* `dequeue`: Removing a Node from the `front` of the queue.

Enqueing

* Create a new Node from the input value.
* Set `rear.next` equal to the new Node.
* Set the `rear` of the queue to the new Node.

Dequeuing

* look direcly at the front Node(set temp to front of queue).
* Set the `front` of the queue to the (front|temp)next node.
* set `temp`.next to null (remove al node references)
* return `temp` node value;
