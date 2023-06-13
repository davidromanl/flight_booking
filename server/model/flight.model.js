const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("data23", "DatabaseUser", "FBdata2023", {
  host: "localhost",
  dialect: "postgres",
});

class Flight extends Model {}

Flight.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    origen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destino: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salida: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    llegada: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "vuelos",
  }
);

module.exports = Flight;
