const Sequelize = require('sequelize');
require('dotenv').config();


console.log(  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW)

const sequelize = new Sequelize(
  "ecommerce_db",
  "root",
  "Developer32!",
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;
