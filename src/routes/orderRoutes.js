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
 *             type: object
 *             properties:
 *               senderName:
 *                 type: string
 *               receiverName:
 *                 type: string
 *               packageDetails:
 *                 type: string
 *               shippingAddress:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Order created successfully
 */

router.post('/orders', orderController.createOrder);

// Route for creating a new order
router.post('/orders', orderController.createOrder);

module.exports = router;