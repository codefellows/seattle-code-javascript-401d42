# Class 07: Bearer Authentication

## Warm Up

* Create a method on the `Linked List` class called `toArray` that takes all the values stored in the list, puts them in an array and returns the array.

```javascript

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList() {
  constructor() {
    this.head = null;
  }

  // converts list to an array and returns the array.
  toArray() {
    const localArray = [];
    let current = this.head;
    while(current !== null){
      localArray.push(current.value);
      current = current.next;
    }
    return localArray;
  }
}

let list = new LinkedList();

// { head: null }

let node1 = new Node(2);
let node2 = new Node('string');
let node3 = new Node(10);

list.head = node1;
list.head.next = node2;
list.head.next.next = node3;



list.toArray();

```

## Code Review

* Start with starter-code.
* beforeCreate / lifeCycle methods.

## Bearer Authentication

It's clunky for a client to send strings (username / password) with every request, why not just assign user something they can use instead.
  
* Instead of just responding with a user object, we also send them a `token`.

### jsonwebtoken (jwt)

* What is a token?
  * Encoded information about the user.
  * Signed with a secret key.
    * We are going to use `jsonwebtoken`, to sign tokens, send those to clients, and verify there legitimacy when a request is made.

## Extending the User Model

Our user model should contain the functions that authenticate a user, both for authenticating with basic and bearer.
