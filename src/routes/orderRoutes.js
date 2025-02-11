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
 *               "idCustomer":
 *                 type: string
 *                 example: "123e4567-e89b-12d3-a456-426614174000"
 *               "senderName":
 *                 type: string
 *                 example: "Kenya Luna"
 *               "receiverName":
 *                 type: string
 *                 example: "Alejandra Luna"
 *               "receiverPhone":
 *                 type: string
 *                 example: "0987654321"
 *               "packageDetails":
 *                 type: string
 *                 example: "Books and documents"
 *               "shippingAddress":
 *                 type: string
 *                 example: "La Gazca, Quito, Ecuador"
 *               "deliveryAddress":
 *                 type: string
 *                 example: "Av. Amazonas 123, Guayaquil, Ecuador"
 *                                         
 *     responses:
 *       201:
 *         description: Order created successfully
 *       500:
 *         description: Internal server error
 *       
 */

// Route for creating a new order
router.post('/create', orderController.createOrder);

module.exports = router;