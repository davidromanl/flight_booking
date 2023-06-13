const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("data23", "DatabaseUser", "FBdata2023", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
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
