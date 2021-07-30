'use strict';

const express = require('express');
const base64 = require('base-64');
const { todos, users } = require('./model/index.js');
require('dotenv').config();
const app = express();
app.use(express.json());
console.log(process.env.PORT);
// define route handlers on the app.
app.get('/todos', async (req, res) => {

  // what operations does this route handler perform?
  //  read from todo data
  let rows = await todos.findAll();
  console.log(rows);
  res.json(rows);
});

app.post('/todos', (req, res) => {

  //  create todo data

});
app.put('/todos/:id', (req, res) => {

  //  update todo data
 
});
app.delete('/todos/:id', (req, res) => {

 //  delete todo data

});
app.post('/signup', async (req, res) => {

  let {username, password} = req.body;
  console.log(username, password);
  let user = await users.create({ username, password });
  res.json({user, token: user.token});
});
app.post('/signin', async (req, res) => {
  // req.headers = {authorization: 'Basic 2387456hgasuy'}
  let encodedCreds = req.headers.authorization.split(' ')[1]; // `234765237645`
  let decodedCreds = base64.decode(encodedCreds) // username:password
  let [username, password] = decodedCreds.split(':');
  let validUser = await users.authenticateBasic(username, password);
  res.json({
    user: validUser,
    token: validUser.token
  });
});

app.listen(process.env.PORT, () => console.log('app is running'));

module.exports = {
  app: app,
//   start: (PORT) => {
// }
}
