const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

// Order model definition
const Order = sequelize.define('Order', {
    orderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    senderName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    receiverName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    packageDetails: {
        type: DataTypes.TEXT,
    },
    shippingAddress: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending',
    },
});

sequelize.sync({ force: false }) // Sync model with database
    .then(() => console.log('Order table created successfully'))
    .catch(err => console.error('Error creating table:', err));

module.exports = Order;