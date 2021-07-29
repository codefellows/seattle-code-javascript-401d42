'use strict';

module.exports = (sequelize, DataTypes) => {

  // defining the column data
  return sequelize.define('Todos', {
    name: {
      type: DataTypes.STRING,
      required: true,
    },
    assignee: {
      type: DataTypes.STRING,
      required: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      required: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      required: true,
      defaultValue: false,
    }
  })
}
