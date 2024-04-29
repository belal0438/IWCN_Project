const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequeldb");

const data = sequelize.define("Data", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  heading: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = data;
