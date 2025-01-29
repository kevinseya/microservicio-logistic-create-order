const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const { v4: uuidv4 } = require('uuid');

// Order model definition
const Order = sequelize.define('Order', {
    orderId: {
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true, 
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