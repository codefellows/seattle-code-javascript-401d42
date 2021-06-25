'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null; 
  }

  // * assume we a value to add:
  push(value) {

// * create a new node from the value
    let newNode = new Node(value);

// * point the next to the current `top`.
    newNode.next = this.top;

// * set `top` of the stack to be our new `node`.
    this.top = newNode;
  }

  pop() {
    // * set a `temp` variable to be the current `top` node.
    let temp = this.top;

    // * move `top` of the stack to `temp.next` node.
    this.top = temp.next;
    // * set `temp.next` to null
    temp.next = null;

    // * return the `value` of the previously top node.
    return temp.value;
  }
}

let stack = new Stack();

stack.push(4);
stack.push(2);
stack.push(6);
stack.push(8);


let eight = stack.pop();
console.log(eight);
console.log(JSON.stringify(stack));

let six = stack.pop();
console.log(six);
console.log(JSON.stringify(stack));
