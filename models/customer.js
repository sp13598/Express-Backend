const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Customer = sequelize.define('Customer', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  mobile: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Customer.sync({ force: false }) // Set force to true to recreate the table
  .then(() => {
    console.log('Customer table created (if not exists)');
  })
  .catch(error => {
    console.error('Error creating Customer table:', error);
  });

module.exports = Customer;
