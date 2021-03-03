//creat the sequelize instance to connect to the database
const Sequelize = require('sequelize');
//state where the database is and where to get it.
const sequelize = require('../util/database');
// Adding columns
const Order = sequelize.define('order', {
  id: {
    type: Sequelize.INTEGER,
    // create auto_incrementing integer columns
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
});
module.exports = Order;
