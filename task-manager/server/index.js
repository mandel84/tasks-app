const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');
const projectRoutes = require('./routes/projectRoutes');
const path = require('path');




const PORT = process.env.PORT || 5001;

const app = express();



app.use(cors({
  origin: '*'
}))

app.use(express.json());

app.use('/api/tasks', taskRoutes);
app.use('/api/projects', projectRoutes);

// Serve the React frontend
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

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
