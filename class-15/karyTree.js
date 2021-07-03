'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.children = [];
  }
}

class KaryTree {
  constructor(k){
    this.k = k;
    this.root = null;
  }

  breadthFirst() {

    // create our empty queue
    let queue = [];
    // put the root node into the front of the queue.
    queue.unshift(this.root);

    while(queue.length) {
      let current = queue.pop();
      // enqueue current chidlren into queue
      current.children.forEach(node => {
        queue.unshift(node); // add each child into the queue.
      });
      // console.log current value
      console.log(current.value);
    }
  }
}


const kt = new KaryTree(3);

kt.root = new Node(10);
kt.root.children[0] = new Node(5);
kt.root.children[1] = new Node(15);
kt.root.children[2] = new Node(20);
kt.root.children[0].children[0] = new Node(30);
kt.root.children[0].children[1] = new Node(4);
kt.root.children[1].children[0] = new Node(40);
kt.root.children[2].children[0] = new Node(100);
// kt.root.children[0].children[0].children[0] = new Node()

console.log(JSON.stringify(kt));
kt.breadthFirst();


