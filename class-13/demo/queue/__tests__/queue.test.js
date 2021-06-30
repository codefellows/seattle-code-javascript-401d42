'use strict';

const MessageQueue = require('../MessageQueue.js');

describe('testing the message queue', () => {

  let testQueue = new MessageQueue("Test");
  it('should allow for messages to be added to the queue', () => {
    let newMessage = testQueue.add('My first Message');

    expect(testQueue.messages[newMessage.messageId]).toBeTruthy();
    expect(testQueue.messages[newMessage.messageId]).toEqual('My first Message');
  });

  it('should allow for message to be retrieved', () => {
    let allMessages = testQueue.getAll();

    expect(allMessages.length).toBeTruthy();
    expect(allMessages.length).toBe(1);
  });

  it('should be able to delete a message on received', () => {
    testQueue.received()
  });
});
