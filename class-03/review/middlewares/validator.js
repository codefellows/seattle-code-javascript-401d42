'use strict';


function validator(req, res, next) {
  if (!req.query.name) {
    next('No name on query'); // should trigger an error in Express
  } else {
    next(); // move along to the next functionconfigured within express.
  }
}

// module.exports 
module.exports = validator;
