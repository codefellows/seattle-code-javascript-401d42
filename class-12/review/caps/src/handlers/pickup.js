'use strict';

const events = require('../events.js');
const pickupHandler = require('./pickupHandler');

events.on('pickup', pickupHandler);
