'use strict';

const io = require('socket.io-client');

const eyeClient = io.connect('http://localhost:3000/eyes');

eyeClient.on('success', () => {
  console.log('eyes connected');
});

