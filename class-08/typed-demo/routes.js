'use strict';

const express = require('express');
const authRouter = express.Router();

const { users } = require('./models/index.js');
const basicAuth = require('./middlewares/basic.js');
const bearerAuth = require('./middlewares/bearer.js');
const acl = require('./middlewares/acl.js');

authRouter.post('/signup', async (req, res, next) => {
  try {
    let userRecord = await users.create(req.body);
    const output = {
      user: userRecord,
      token: userRecord.token
    };
    res.status(200).json(output);
  } catch (e) {
    console.error(e);
    next(e.message);
  }
});

authRouter.post('/signin', basicAuth, (req, res, next) => {
  const user = {
    user: req.user,
    token: req.user.token
  };
  res.status(200).json(user);
});

// let writePermissions = acl('create');

authRouter.get('/users', bearerAuth, acl('read'), async (req, res, next) => {
  const userData = await users.findAll({});
  const list = userData.map(user => user.username);
  res.status(200).json(list);
});

authRouter.get('/secret', bearerAuth, acl('create'), async (req, res, next) => {
  res.status(200).send("Welcome to the secret area!")
});


module.exports = authRouter;
