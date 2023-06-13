const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("data23", "DatabaseUser", "FBdata2023", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
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
