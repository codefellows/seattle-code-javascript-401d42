'use strict';

const io = require('socket.io');

// we have a hub for creating events on.
const server = io(3000);

// namespaces of socket.io
//  connect to locahost:3000/eyes

const eyeController = server.of('/eyes');

server.on('connection', (socket) => {

  // joining a room in socket.io, recommend joining as a specific event.
  // socket.join('vendor-id');

  console.log('client connected', socket.id);
  // server emits to all sockets connected
  server.emit('success', 'yay');


  socket.on('hello', (number) => {

    // communicate with a room that a socket has joined.
    // socket.to(roomName).emit('event-name', payload);

    // send to all other sockets.
    socket.broadcast.emit('greeting', {message: 'nice to meet you '+number});
  });
});

eyeController.on('connection', (socket) => {

  console.log(socket.id);

  server.emit('success', 'eye controller connected');
  socket.emit('success');
})


