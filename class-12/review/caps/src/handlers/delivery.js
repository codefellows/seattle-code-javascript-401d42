'use strict';

const events = require('../events.js');
const deliveryHandler = require('./deliveryHandler.js');

events.on('delivery', deliveryHandler);
