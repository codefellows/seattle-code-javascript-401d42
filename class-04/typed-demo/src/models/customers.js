'use strict';

const Customers = (sequelize, DataTypes) => {
  return sequelize.define('Customers', {
    name: {
      type: DataTypes.STRING,
      required: true,
    },
  })
}

module.exports = Customers;
