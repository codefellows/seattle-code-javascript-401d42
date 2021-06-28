'use strict';

// all we're doing is providing a singleton to our modules.
const EventEmitter = require('events');

const events = new EventEmitter();

module.exports = events; // allow a single event pool to be configured by our other modules.
