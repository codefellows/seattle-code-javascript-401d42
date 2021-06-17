'use strict';

// Provide a layer of logic between Express Router handlers, and Postgres operations.

class Collection {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  read(id, options = {}) {
    // spread syntax, this allows us to create a new object literal from the keys / values from the options object
    //   this allows us to keep the options passed into the read method and the parameter for the model as seperate entities.
    let modelParams = {...options};

    if (id) {
      modelParams.where = { id: id };
      return this.model.findOne(modelParams);
    } else {
      return this.model.findAll(modelParams);
    }
  }

  create(json) {
    return this.model.create(json);
  }

  async update(id, json) {

    let row = await this.model.findOne({
      where: {
        id: id,
      }
    });

    let updatedRow = await row.update(json);

    return updatedRow;
  }

  delete(id) {
    return this.model.destroy({ where: { id: id } });
  }

  // the things sequelize needs to create an association
  createAssociation(type, model, options) {
    // type == 'hasMany || 'belongsTo'
    // model == some sequelize model
    // option == {foreignKey, sourceKey}
    console.log(type, model, options);
    try {
      this.model[type](model, options);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = Collection;
