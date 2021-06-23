'use strict';

require('dotenv').config();
// Start up DB Server
const { db } = require('./models/index.js');
const PORT = process.env.PORT;

db.sync()
  .then(() => {

    // Start the web server
    require('./server.js').start(PORT);
  });
