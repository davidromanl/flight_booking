const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("2019", "root", "*", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "usuarios",
  }
);

module.exports = User;