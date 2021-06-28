'use strict';

const events = require('../event-pool.js');
const tempHandler = require('./temperature-handler.js');

events.on('temperature', tempHandler);
