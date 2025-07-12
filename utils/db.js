const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('stackdot', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;