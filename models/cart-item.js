//creat the sequelize instance to connect to the database
const Sequelize = require('sequelize');

//state where the database is and where to get it.
const sequelize = require('../util/database');

const CartItem = sequelize.define('cartItem', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  //makes the sequelize data type integer
  quantity: Sequelize.INTEGER
});
module.exports = CartItem;
