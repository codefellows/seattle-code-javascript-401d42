'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (!this.head) {
      this.head = new Node(value)
      return;
    };

    // traverse to the tail and add to the end.
    let current = this.head;
    let previous = null;
    while (current) {
      previous = current;
      current = current.next;
    }
    // current is null, how do we add to the list.
    previous.next = new Node(value);
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let arrayOfCharacters = key.split(''); //['J', 'a', 'c','o', 'b']
    let sumOfAsciiValues = arrayOfCharacters.reduce((acc, char) => {
      return acc + char.charCodeAt(0); // 0 + 74 + 99 + 98 .. 478
    }, 0);

    return (sumOfAsciiValues * 599) % this.size; // 201
  }

  // Parameters: Key so we store things, and some value
  add(key, value) {
    let hash = this.hash(key);

    // check if thers a linked list at the hashed index, add an empty linked list if not
    if (!this.buckets[hash]) this.buckets[hash] = new LinkedList();

    // add our key and our value to the linked list.
    let entry = { [key]: value }
    this.buckets[hash].insert(entry);
    return entry;
  }

  // get a key, look up the value in our hash table and return.
  find(key) {

  }

  // returns a boolean whether the key exists
  contains(key) {
    let hash = this.hash(key);

    return this.buckets[hash] ? true : false;
  }
}


let table = new HashTable(1024);
table.add('Jacob', 'instructor');

console.log(table.contains('Jacob'));

table.add('Chance', 'TA');
console.log(table.contains('Chance'));

