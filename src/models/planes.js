'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Planes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Planes.init({
    planeName: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    capacity: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        max:1000,
      }
    }
  }, {
    sequelize,
    modelName: 'Planes',
  });
  return Planes;
};