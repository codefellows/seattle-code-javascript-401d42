'use strict';

module.exports = (info) => {
  let today = new Date();
  let date = `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`;
  let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  let dateTime = `${date} ${time}`;
  info.packageInfo.time = dateTime;
  info.packageInfo.event = 'delivered';
  console.log(`DRIVER: delivered up ${info.packageInfo.payload.orderID}`);
  console.log(`VENDOR: Thank you for delivering ${info.packageInfo.payload.orderID}`)
  console.log('EVENT', info.packageInfo);
}
