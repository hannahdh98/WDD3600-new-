//creat the sequelize instance to connect to the database
const Sequelize = require('sequelize');
//state where the database is and where to get it/path
const sequelize = require('../util/database');
//adds columns
const User = sequelize.define('user', {
  id: {
    //adds comments
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING
});
//exports users table
module.exports = User;
