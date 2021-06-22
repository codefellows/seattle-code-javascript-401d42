'use strict';

const jwt = require('jsonwebtoken');

const SECRET = process.env.API_SECRET || 'supersecretstring';

const Users = (sequelize, DataTypes) => {
  let model = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.VIRTUAL, // a field that is calculated at runtime
      get() {
        // create a token, using user data, and a signature
        return jwt.sign({ username: this.username }, SECRET);
      }
    }
  });

  // lifeCycle methods
  // Sequelize runs operations in a speicific order.
  model.beforeCreate(async (user, options) => {
    console.log(options)
    user.password = await bcrypt.hash(user.password, 10);
  });


  // constructor methods
  model.authenticateBasic = async function(username, password) {
    const user = await this.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      return user;
    } else {
      return new Error('Basic Auth Error');
    }
  }

  model.authenticateBearer = async function(token) {
    let parsedToken = jwt.verify(token, SECRET);
    let user = await this.findOne({ where: {username: parsedToken.username }});
    if(user) {
      return user;
    } else {
      return new Error('Invalid Token');
    }
  }

  return model;
};

module.exports = Users;
