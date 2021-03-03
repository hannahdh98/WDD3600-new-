//creat the sequelize instance to connect to the database
const Sequelize = require('sequelize');
//state where the database is and where to get it.
const sequelize = require('../util/database');

const Order = sequelize.define('order', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});
module.exports = Order;
