const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("iwcn_project", "root", "B#5266@belal", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
