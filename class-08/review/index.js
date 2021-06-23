'use strict';

require('dotenv').config();
// Start up DB Server
const { db } = require('./src/auth/models/index.js');
const PORT = process.env.PORT;

db.sync()
  .then(() => {

    // Start the web server
    require('./src/server.js').start(PORT);
  });

