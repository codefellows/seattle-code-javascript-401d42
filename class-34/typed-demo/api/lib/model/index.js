'use strict';

// import Sequelize dependencies
const { Sequelize, DataTypes } = require('sequelize');

// schema contains specific about what data each column contains
const todoSchema = require('./todo.schema.js');
const userSchema = require('./user.schema.js');

// connect to SQL database
let sequelize = new Sequelize(process.env.DATABASE_URL || 'sqlite:memory:');

// connect the schema, creates the table using the values defined in the schema as columns.
const todoModel = todoSchema(sequelize, DataTypes);
const userModel = userSchema(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  todos: todoModel,
  users: userModel,
}


