const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("2019", "root", "*", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

class Reservation extends Model {}

Reservation.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flight_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nro_pasajeros: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "reservaciones",
  }
);

module.exports = Reservation;
