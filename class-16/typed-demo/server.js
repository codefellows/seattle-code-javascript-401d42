'use strict';

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Elastic beanstalk');
});

app.listen(PORT, () => {
  console.log('Beanstalk app up on ,' + PORT);
});
