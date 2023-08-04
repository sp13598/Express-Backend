const Sequelize = require('sequelize');

const sequelize = new Sequelize('bank2', 'root', 'Pass@123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;