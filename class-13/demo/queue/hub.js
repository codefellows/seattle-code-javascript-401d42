'use strict';

// const uuid = require('uuid').v4;
const io = require('socket.io')(3000);

const MessageQueue = require('./MessageQueue.js');

// A keyed queue. There's no order presumed here, messages just get delivered and
// removed from this list as the are received.
const chores = new MessageQueue('chores');

const family = io.of('/family');

family.on('connection', socket => {

  socket.on('new chore', payload => {
    try {
      let chore = chores.add(payload);
      socket.emit('added');
      family.emit('chore', {
        id: chore.messageId,
        payload: chore.messageValue
      });
    } catch (e) {
      console.error(e);
    }
  });

  socket.on('getall', () => {
    const allChores = chores.getAll();
    allChores.forEach(chore => {
      socket.emit('chore', chore);
    });
  });

  socket.on('received', message => {
    chores.received(message.id);
  });
});

