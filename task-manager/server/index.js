const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');  
const taskRoutes = require('./routes/taskRoutes');
const projectRoutes = require('./routes/projectRoutes');

const PORT = process.env.PORT || 5001;

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json());

app.use('/api/tasks', taskRoutes);
app.use('/api/projects', projectRoutes);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Unable to sync database:', error.stack);
  });

module.exports = app;  
