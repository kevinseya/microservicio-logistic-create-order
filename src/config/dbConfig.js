const { Sequelize } = require('sequelize');

// Database connection setup
const sequelize = new Sequelize('logistics_db', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
