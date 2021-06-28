'use strict';

const tempHandler = require('../skin/temperature-handler.js');
const events = require('../event-pool.js');

describe('testing event handers', () => {

  console.log = jest.fn();
  events.emit = jest.fn();

  it('temp handler should console log', () => {
    tempHandler({degrees: 75});

    expect(console.log).toHaveBeenCalledWith('its not too bad');
    expect(events.emit).not.toHaveBeenCalled();
  });

  it('temp handler should emit when degrees are above 80', () => {
    tempHandler({ degrees: 85 });

    expect(console.log).toHaveBeenCalledWith('its too hot');
    expect(events.emit).toHaveBeenCalledWith('sweat');
  });
});
