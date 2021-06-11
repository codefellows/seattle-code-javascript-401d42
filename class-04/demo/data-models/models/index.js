'use strict';

require('dotenv').config();
const POSTGRES_URI = process.env.DATABASE_URL;
const { Sequelize, DataTypes } = require('sequelize');

const Collection = require('./lib/collection.js');
const customerSchema = require('./customer.schema.js');
const orderSchema = require('./order.schema.js');

let sequelize = process.env.NODE_ENV === 'test' ? new Sequelize('sqlite::memory:') : new Sequelize(POSTGRES_URI);

const customerModel = customerSchema(sequelize, DataTypes);
const orderModel = orderSchema(sequelize, DataTypes);

// create the collection class for each model
const customerCollection = new Collection('Customers', customerModel);
const orderCollection = new Collection('Orders', orderModel);

// Tell our collections that we have associated data models
customerCollection.createAssociation('hasMany', orderCollection.model, { foreignKey: 'customerId', sourceKey: 'id'});
orderCollection.createAssociation('belongsTo', customerCollection.model, { foreignKey: 'customerId', targetKey: 'id'})

module.exports = {
  db: sequelize,
  Orders: orderCollection,
  Customers: customerCollection,
}
