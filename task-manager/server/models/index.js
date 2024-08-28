const sequelize = require('../config/database');  
const Project = require('./Project');
const Task = require('./Task');


Project.hasMany(Task, { foreignKey: 'projectId' });
Task.belongsTo(Project, { foreignKey: 'projectId' });

module.exports = {
  sequelize,
  Project,
  Task,
};
