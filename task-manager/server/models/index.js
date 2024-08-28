const sequelize = require('../config/database');  // Import the sequelize instance
const Project = require('./Project');
const Task = require('./Task');

// Define associations if any
Project.hasMany(Task, { foreignKey: 'projectId' });
Task.belongsTo(Project, { foreignKey: 'projectId' });

module.exports = {
  sequelize,
  Project,
  Task,
};
