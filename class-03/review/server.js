'use strict';

const express = require('express');
const logger = require('./middlewares/logger.js');
const validator = require('./middlewares/validator.js');

const app = express();

app.use(logger);
app.use(validator);

app.get('/person', (req, res) => {
  res.send('hello from person');
});

module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log('Server is running'));
  },
}
