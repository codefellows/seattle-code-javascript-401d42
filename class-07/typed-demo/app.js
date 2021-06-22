'use strict';

// 3rd Party Resources
const express = require('express');
// const bcrypt = require('bcrypt');
// const base64 = require('base-64');
const { db } = require('./models/index.js');
const authRoutes = require('./routes/auth.js');
// const { Sequelize, DataTypes } = require('sequelize');

const app = express();

app.use(express.json());

// const sequelize = new Sequelize(process.env.DATABASE_URL);

app.use(express.urlencoded({ extended: true }));

// Create a Sequelize model
// const Users = sequelize.define('User', {
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   }
// });


app.use(authRoutes);
// These lines are telling Express how to route things
// app.post('/signup', async (req, res) => {

//   try {
//     req.body.password = await bcrypt.hash(req.body.password, 10);
//     const record = await Users.create(req.body);
//     res.status(200).json(record);
//   } catch (e) { res.status(403).send("Error Creating User"); }
// });


// // Basic Authentication (username, password / authentication with strings)
// //  by convention we put them in the header of the request, as an authorization object.
// //  we encode the strings (username / password), using base64.
// app.post('/signin', async (req, res) => {
  
//   // {Authorization: 'Basic encodedString'}
//   let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
//   let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
//   let decodedString = base64.decode(encodedString); // "username:password"
//   let [username, password] = decodedString.split(':'); // username, password

//   try {
//     const user = await Users.findOne({ where: { username: username } });
//     const valid = await bcrypt.compare(password, user.password);
//     if (valid) {
//       res.status(200).json(user);
//     }
//     else {
//       throw new Error('Invalid User')
//     }
//   } catch (error) { res.status(403).send("Invalid Login"); }

// });

db.sync()
  .then(() => {
    app.listen(3000, () => console.log('server up'));
  }).catch(e => {
    console.error('Could not start server', e.message);
  });
