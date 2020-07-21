const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Inspector extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }
  Inspector.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    location: DataTypes.STRING,
    rating: DataTypes.STRING,
    isAvailable: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Inspector',
  });
  return Inspector;
};
