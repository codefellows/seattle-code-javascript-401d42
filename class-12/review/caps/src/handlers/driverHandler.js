'use strict';

const events = require('../events.js');
// require('./delivery.js');

module.exports = (info) => {
  let today = new Date();
  let date = `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`;
  let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  let dateTime = `${date} ${time}`;
  info.packageInfo.time = dateTime;
  info.packageInfo.event = 'in-transit';
  console.log(`DRIVER: picked up ${info.packageInfo.payload.orderID}`);
  console.log('EVENT', info.packageInfo);
  setTimeout(function () { events.emit('delivery', { packageInfo: info.packageInfo }) }, 2000);
}
