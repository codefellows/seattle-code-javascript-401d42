'use strict';

const events = require('../event-pool.js');
const handleSweat = require('./sweat-handler');
const handleSunglasses = require('./sunglasses-handler.js');

events.on('sweat', handleSweat);
events.on('sunglasses', handleSunglasses);
