const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     description: Create a new logistics order with the provided details.
 *     tags:
 *       - Orders
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              type: 'object',
                    properties: {
                        orderId: { type: 'integer', description: 'Unique identifier for the order' },
                        senderName: { type: 'string', description: 'Name of the sender' },
                        receiverName: { type: 'string', description: 'Name of the receiver' },
                        packageDetails: { type: 'string', description: 'Details of the package' },
                        shippingAddress: { type: 'string', description: 'Shipping address for the package' },
                        status: { type: 'string', description: 'Current status of the order' },
                    },
                    required: ['senderName', 'receiverName', 'packageDetails','shippingAddress', 'status'],
                },
 *     responses:
 *       201:
 *         description: Order created successfully
 */

// Route for creating a new order
router.post('/orders', orderController.createOrder);

module.exports = router;