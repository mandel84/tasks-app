const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Correct import

const Project = sequelize.define('Project', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Project;
