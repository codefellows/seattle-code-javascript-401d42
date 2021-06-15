'use strict';

module.exports = (req,res,next) => {
  let username = req.params.username;
  let User = {
    name: username,
    age: 31,
  }
  req.user = User;
  next();
};
