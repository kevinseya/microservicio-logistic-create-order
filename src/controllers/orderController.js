const Order = require('../models/order');

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const orderData = { ...req.body, status: req.body.status || 'Pending' };
        const newOrder = await Order.create(orderData);
        res.status(201).json(newOrder);
    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Failed to create order' });
    }
};