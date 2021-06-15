'use strict';

// this only gets called if something gets passed into the next function of a previous middleware
module.exports = (err, req, res, next) => {
  console.log(err);
  res.status(500).send(err);
}
