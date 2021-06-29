'use strict';

const events = require('../events.js');
// require('./driver.js');

module.exports = (info) => {
  console.log(`EVENT`, info.packageInfo);
  setTimeout(function () { events.emit('driver', { packageInfo: info.packageInfo }) }, 1000);
}
