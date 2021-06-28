'use strict';

const events = require('../event-pool.js');

module.exports = () => {
  console.log('beginning to sweat');
  events.emit('sunglasses');
}
