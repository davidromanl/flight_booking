const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("data23", "DatabaseUser", "FBdata2023", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
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