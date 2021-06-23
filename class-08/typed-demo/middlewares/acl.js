'use strict';

// const { users } = require('../models/index.js');

// we assume req.user exists and contains an instance of a user with all the values required.
module.exports = (capability) => (req, res, next) => {
  
  if(req.user.capabilities.includes(capability)) {
    next();
  } else {
    next('User Unauthorized');
  }

}
