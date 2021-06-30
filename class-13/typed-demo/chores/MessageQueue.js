'use strict';

const uuid = require('uuid').v4;

class MessageQueue{
  constructor() {
    this.messages = {};
  }

  add(value) {
    let key = uuid();
    this.messages[key] = value;
  }

  get() {
    return Object.keys(this.messages).map(id => {
      return { id, value: this.messages[id] };
    });
  }

  received(id) {
    delete this.messages[id];
  }
}

module.exports = MessageQueue;
