const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,  // This makes SSL required
      rejectUnauthorized: false  // This allows self-signed certificates (like in Neon)
    }
  },
});
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.error('Database connection error:', err.stack));

module.exports = sequelize;
