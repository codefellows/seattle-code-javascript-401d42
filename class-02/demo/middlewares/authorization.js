'use strict';

module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    // res.status(403).send({'Error': 'No auth provided'});
    next({'Error': 'No auth provided'}); // this will trigger our error handler
  } else{
    next(); // passing anything into the next function its considered an error.
  }
}
