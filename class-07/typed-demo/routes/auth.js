'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { users } = require('../models/index.js'); 
const basicMiddleware = require('../middleware/basic.js');
const bearerMiddleware = require('../middleware/bearer.js');

// These lines are telling Express how to route things
router.post('/signup', async (req, res) => {

  try {
    // req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await users.create(req.body);
    res.status(200).json(record);
  } catch (e) { res.status(403).send("Error Creating User"); }
});


// Basic Authentication (username, password / authentication with strings)
//  by convention we put them in the header of the request, as an authorization object.
//  we encode the strings (username / password), using base64.
router.post('/signin', basicMiddleware, async (req, res) => {
  
  let user = req.user;
  // {Authorization: 'Basic encodedString'}
  // let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
  // let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
  // let decodedString = base64.decode(encodedString); // "username:password"
  // let [username, password] = decodedString.split(':'); // username, password

  // try {
  //   const user = await users.findOne({ where: { username: username } });
  //   const valid = await bcrypt.compare(password, user.password);
  //   if (valid) {
  //     res.status(200).json(user);
  //   }
  //   else {
  //     throw new Error('Invalid User')
  //   }
  // } catch (error) { res.status(403).send("Invalid Login"); }
  res.status(200).json(user);
});

router.get('/users', bearerMiddleware, (req, res) => {
  console.log(req.user);
  res.send('You made it');
});

module.exports = router;
