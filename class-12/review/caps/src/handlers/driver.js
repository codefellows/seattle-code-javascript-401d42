'use strict';

const events = require('../events.js');
const driverHandler = require('./driverHandler.js');

events.on('driver', driverHandler);
