'use strict';

const events = require('./events.js');
require('./handlers/pickup.js');
require('./handlers/driver.js');
require('./handlers/delivery.js');


setInterval(() => {
  let today = new Date();
  let date = `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`;
  let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  let dateTime = `${date} ${time}`;
  let packageInfo = {
    event: `pickup`,
    time: dateTime,
    payload: {
      store: '1-206-flowers',
      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
      customer: 'Jane Doe',
      address: 'Schmittfort, LA'
    }
  }
  events.emit('pickup', { packageInfo: packageInfo });
}, 5000);
