'use strict';

const pickupHandler = require('../src/handlers/pickupHandler.js');
const driverHandler = require('../src/handlers/driverHandler.js');
const deliveryHandler = require('../src/handlers/deliveryHandler.js');
const events = require('../src/events.js');
const { expect } = require('@jest/globals');

describe('testing event handers', () => {

  console.log = jest.fn();
  events.emit = jest.fn();

  let today = new Date();
  let date = `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`;
  let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  let dateTime = `${date} ${time}`;

  it('pickup handler should console log and emit', (done) => {
    pickupHandler({
      packageInfo: {
        event: `pickup`,
        time: dateTime,
        payload: {
          store: '1-206-flowers',
          orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
          customer: 'Jane Doe',
          address: 'Schmittfort, LA'
        }
      }
    });

    expect(console.log).toHaveBeenCalled();
    expect(events.emit).not.toHaveBeenCalled();
    done();
  });

  test('driver handler should console log and emit', (done) => {
    driverHandler({
      packageInfo: {
        event: `driver`,
        time: dateTime,
        payload: {
          store: '1-206-flowers',
          orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
          customer: 'Jane Doe',
          address: 'Schmittfort, LA'
        }
      }
    });

    expect(console.log).toHaveBeenCalled();
    expect(events.emit).not.toHaveBeenCalled();
    done();
  });

  it('delivery handler should console log and emit', (done) => {
    deliveryHandler({
      packageInfo: {
        event: `delivered`,
        time: dateTime,
        payload: {
          store: '1-206-flowers',
          orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
          customer: 'Jane Doe',
          address: 'Schmittfort, LA'
        }
      }
    });

    expect(console.log).toHaveBeenCalled();
    expect(events.emit).not.toHaveBeenCalled();
    done();
  });
});