'use strict';

// const EventEmitter = require('events');

// singleton;
// const events = new EventEmitter(); // creates an `event pool` or a series of events that we get to define.

const events = require('./event-pool.js');

require('./skin/skin.js');
require('./brain/brain.js');


// for Subscribers we use this syntax:
//  pass a callback / function to deal with the eevent data.
// events.on('temperature', (temp) => {
//   if (temp.degrees < 80) {
//     console.log('its not too bad');
//   } else {
//     console.log('its too hot');
//     events.emit('sweat');
//   }
// });
// events.on('sunglasses', () => {
//   console.log('time to put on your shades');
// });

// events.on('sweat', () => {
//   console.log('beginning to sweat');
//   events.emit('sunglasses');
// });


// for Publishers we use this syntax:
// events.emit('temperature', {degrees: 80});
setInterval(() => {
  let randomTemp = Math.floor(Math.random() * 100);
  console.log(randomTemp);
  events.emit('temperature', { degrees: randomTemp });
}, 2000);
