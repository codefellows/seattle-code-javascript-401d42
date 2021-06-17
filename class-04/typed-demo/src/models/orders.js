'use strict';

const Orders = (sequelize, DataTypes) => {
  return sequelize.define('Orders', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
}

module.exports = Orders;
