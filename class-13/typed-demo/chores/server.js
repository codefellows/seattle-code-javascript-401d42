'use strict';

const io = require('socket.io');
const MessageQueue = require('./MessageQueue.js');

const server = io(3000);
const family = server.of('/family');

const chores = new MessageQueue();
// const flowers = new MessageQueue();
// const widgets = new MessageQueue();

family.on('connection', (socket) => {

  socket.on('new chore', (payload) => {

    // add to the queue
    chores.add(payload);
    // emit to namespace 'new chore'
    console.log('Chore added to queue : ', chores);
    family.emit('new chore', payload);
  });

  socket.on('get chores', () => {
    const allChores = chores.get();

    allChores.forEach(chore => {
      // send each chore indivdually to the client
      socket.emit('chore', chore);
    });
  });

  socket.on('done', (payload) => {
    // remove the chore from  the queue.
    chores.received(payload.id);
    // emit to namespace'done
    console.log('chore done : ', chores);
    family.emit('done', payload);
  });
});
