'use strict';

const io = require('socket.io-client');

const HOST_URL = process.env.HOST_URL || 'http://localhost:3000'
const NAMESPACE = process.env.NAMESPACE || 'caps';

const socket = io.connect(`${HOST_URL}/${NAMESPACE}`);

socket.on('pickup', payload => {
  // wait 1.5 secs and then emit in-transit
  setTimeout(() => {
    console.log('Package in transit :', payload.id);
    socket.emit('in-transit', payload);
  }, 1500)

  // wait 3 secs and emit delivered
  setTimeout(() => {
    socket.emit('delivered', payload);
  }, 3000);
});
