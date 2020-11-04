const { Sequelize, DataTypes, Op } = require("sequelize");
const sequelize = new Sequelize("pruebatecnica", "usuario1", "12345", {
  dialect: "mssql",
  host: "localhost",
  port: "1433",
  logging: false,
});

exports.DataTypes = DataTypes;
exports.sequelize = sequelize;
exports.Op = Op;
