const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("2019", "root", "*", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

class Cities extends Model {}

Cities.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    aeropuerto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ciudades",
  }
);

module.exports = Cities;
