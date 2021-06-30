'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000/family');

socket.emit('get chores');

socket.on('chore', (chore) => {

  console.log('completing chore ', chore);

  socket.emit('done', chore);
})
