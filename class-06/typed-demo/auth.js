'use strict';

require('dotenv').config();
const express = require('express');
const base64 = require('base-64');
const bcrypt = require('bcrypt');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();

const PORT = process.env.PORT || 3000;
// Heroku defines this for us, this is our connection string to Postgres
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL);

const UserModel = sequelize.define('Users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

// lifecycle method built into sequelize
UserModel.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

// allows express to parse json request bodies
app.use(express.json());
// allws express to parse url encoded request bodies
app.use(express.urlencoded( { extended: true }));

// an unauthenticated route, lets users Create a `User`.
app.post('/signup', async (req, res) => {

  // grab JSON from the body
  let userInfo = req.body;
  // { username: 'Jacob', password: 'supersecret' }

  let newUser = await UserModel.create(userInfo);

  res.send(newUser);
});

app.get('/signin', async (req, res) => {

  // expecting a header object with `authorization: "Basic kajsdnf87qy38"
  let authHeaders = req.headers.authorization;
  let basicString = authHeaders.split(' ')[1]; // kajsdnf87qy38
  let decodedString = base64.decode(basicString); // "Jacob:supersecret"

  // let username = decodedString.split(':')[0];
  // let password = decodedString.split(':')[1];

  let [username, password] = decodedString.split(':');
  console.log(username, password); // logging the password is not great.

  let userFromDB = await UserModel.findOne({ where:{ username: username }});
  let isValid = await bcrypt.compare(password, userFromDB.password);

  if (isValid) {
    res.send(userFromDB);
  } else {
    res.status(401).send('Authentication Error');
  }
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('app is up');
  });
});
