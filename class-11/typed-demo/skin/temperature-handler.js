'use strict';

// a dependency of our module.
const events = require('../event-pool.js');

module.exports = (temp) => {
  if (temp.degrees < 80) {
    console.log('its not too bad');

  } else {
    console.log('its too hot');
    events.emit('sweat');
  }
}
