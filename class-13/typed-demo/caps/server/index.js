'use strict';

//  how do I get started with socket.io
const io = require('socket.io');

const PORT = process.env.PORT || 3000;

// create our socket server
const server = io(PORT);
const caps = server.of('/caps'); // adding a namespace for socket messages

// let url = 'http://localhost:3000/
// const client = io.connect(`${url}/caps`); => triggers 'connection' event

// what do tell our server to do?

// 1) listen for the connection event
caps.on('connection', (socket) => {

    console.log('SOCKET CONNECTED : ' + socket.id);

    // socket.on('join', room =>{
    //   socket.join(room);
    // });

    socket.on('pickup', (payload) => {
      console.log('EVENT : ', payload);
      caps.emit('pickup', payload);
    });

    socket.on('in-transit', (payload) => {
      console.log('EVENT : ', payload);
      // broadcase sends events to all other socket.  (but not the current socket)
      socket.broadcast.emit('in-transit', payload);
    });

    socket.on('delivered', (payload) => {
      console.log('EVENT : ', payload);
      socket.broadcast.emit('delivered', payload);
    });
});


