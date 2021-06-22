'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./users.js');

const sequelize = new Sequelize(process.env.DATABASE_URL || 'sqlite:memory:');

const userModel = userSchema(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: userModel,
}
