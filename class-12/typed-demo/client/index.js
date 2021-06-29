'use strict';

const io = require('socket.io-client');

const client = io.connect('http://localhost:3000');

client.on('success', (payload) => {
  console.log('we are connected!', payload);

  let randomNumber = Math.floor(Math.random() * 1000);

  console.log(randomNumber);
  client.emit('hello', randomNumber);
});

client.on('greeting', console.log);
