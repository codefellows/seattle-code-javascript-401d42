'use strict';

const express = require('express');
const logger = require('./middlewares/logger.js');
const auth = require('./middlewares/authorization.js');
const getUser = require('./middlewares/getUser.js');
const error = require('./middlewares/error.js');

const app = express();

// this is an example of middleware, a function sitting between other functions.

// app.use((req,res,next) => {
//   console.log(req.method, req.authorization);
//   next(); // move on to the next route handler function
// });
// app.use((req, res, next) => {
//   if (!req.headers.authorization) {
//     res.status(403).send({'Error': 'No auth provided'});
//   } else{
//     next();
//   }
// })

// using application level middleware from a file in our project.
app.use(logger);
app.use((req,res, next) => {
  console.log(req.query) // access the queery string

  next();
});
app.use(auth);
app.use(error);

app.get('/', (req, res) => {
  res.send('Hello from express method route');
});

// middleware for a given route.
app.get('/data', getUser,  (req, res) => {
  res.send(req.user);
});

app.get('/data/:userId', (req, res) => {
  console.log(req.params);
  res.send(req.params.userId)
})

// no route was hit
app.use('*', (req,res) => {
  res.status(404).send('UGH OHHHHH, No route found');
});

module.exports = app;
