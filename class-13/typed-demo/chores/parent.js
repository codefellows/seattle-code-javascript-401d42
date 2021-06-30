'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000/family');
const chore = process.argv[2];

console.log(chore);

socket.emit('new chore', chore);

socket.on('new chore', () => {
  socket.disconnect();
});
