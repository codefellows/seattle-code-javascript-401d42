'use strict'

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    // * Create a new Node from the input value.
    let newNode = new Node(value);

    if(!this.rear) { // if there is no rear??
      // do something special here
      // * Set the `rear` of the queue to the new Node.
      this.rear = newNode;
      // also set the front if the first node.
      this.front = newNode;
    } else {

      this.rear.next = newNode;
      // * Set the `rear` of the queue to the new Node.
      this.rear = newNode;
    }
  }

  dequeue() {
    // * look direcly at the front Node(set temp to front of queue). 
    let temp = this.front;
    // * Set the `front` of the queue to the (front|temp)next node.
    this.front = temp.next;

    // * set `temp`.next to null (remove al node references)
    // * return `temp` node value;
    temp.next = null;
    return temp.value;
  }
}


let queue = new Queue(); // {front: null, back: null}

queue.enqueue(5);
// step1: {value: 5, next null}
// step2: check rear === null
// final state: {front: { value: 5, next: null} rear: { value: 5, next null }}

queue.enqueue(10); 
// step1: {value: 10, next null}
// step2: rear.next = {value: 10, next null}'
// step3: rear = { vaue: 10, next null }

console.log(queue);
console.log(queue);

let five = queue.dequeue();

console.log(five)
console.log(queue);

let ten = queue.dequeue();
console.log(ten);
console.log(queue);
