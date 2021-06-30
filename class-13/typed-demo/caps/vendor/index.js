'use strict';

const io = require('socket.io-client');

const HOST_URL = process.env.HOST_URL || 'http://localhost:3000'
const NAMESPACE = process.env.NAMESPACE || 'caps';

const socket = io.connect(`${HOST_URL}/${NAMESPACE}`);

socket.emit('join', '1-800-flowers');

// client needs to listen for a 'delivery' event?
socket.on('delivered', (payload) => {
  console.log('Thanks you, ' + payload.id );
});

setInterval(() => {
  const packageInfo = {
    id: '000-000-0001',
    address: 'Seattle WA',
    storeId: '1-800-flowers',
    details: 'one dozen roses'
  }

  socket.emit('pickup', packageInfo) // do you see my mouse moving?
}, 500);
