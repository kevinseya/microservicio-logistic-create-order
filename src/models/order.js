const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Order = sequelize.define('Order', {
    orderId: {
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true, 
    },
    idCustomer: { 
        type: DataTypes.UUID,
        allowNull: false,
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
    deliveryAddress: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending',
    },
});


sequelize.sync({ alter: true })
    .then(() => console.log('Order table updated successfully'))
    .catch(err => console.error('Error updating table:', err));

module.exports = Order;
