'use strict';

const logger = require('../middlewares/logger.js');
const getUser = require('../middlewares/getUser.js');

describe('testing middleware functions', () => {
  test('logger logs method and headers, calls next', () => {

    let requestObject = {
      headers: 'test',
      method: 'test',
    }
    let responseObject = {};
    let nextFunction = jest.fn();
    console.log = jest.fn();

    logger(requestObject, responseObject, nextFunction);
    expect(nextFunction).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('test', 'test');
  });

  test('getUser attaches a object to the request', () => {
    
    let requestObject = {
      params: {
        username: '',
      }
    };
    let responseObject = {};
    let nextFunction = jest.fn();

    getUser(requestObject, responseObject, nextFunction);
    expect(nextFunction).toHaveBeenCalled();
    expect(requestObject.user.name).toStrictEqual('');
  });
});
