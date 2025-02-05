const Order = require('../models/order');
const axios = require('axios');

// Configuración de la API de Google Maps
const GOOGLE_MAPS_API_KEY = 'AIzaSyDInlbl1ldBYnYP7l1kJ1SNqfc38E0hw8I'; 

// Function to calculate distance using Google Maps API
async function getDistance(origin, destination) {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json`, {
            params: {
                origins: origin,
                destinations: destination,
                key: GOOGLE_MAPS_API_KEY
            }
        });
        
        if (response.data.status !== 'OK' || response.data.rows[0].elements[0].status !== 'OK') {
            throw new Error('Invalid response from Google Maps API');
        }
        
        const distance = response.data.rows[0].elements[0].distance.value / 1000; // Convert meters to km
        return distance;
    } catch (error) {
        console.error('Error fetching distance:', error);
        return null;
    }
}

// Function to calculate price based on distance
function calculatePrice(distance) {
    const baseRate = 2; // Base price
    const perKmRate = 1; // Price per km
    return baseRate + (distance * perKmRate);
}

// Create a new order with automatic price calculation
exports.createOrder = async (req, res) => {
    try {
        const { idCustomer, shippingAddress, deliveryAddress, ...orderData } = req.body;

        if (!idCustomer) {
            return res.status(400).json({ message: "idCustomer is required" });
        }

        const distance = await getDistance(shippingAddress, deliveryAddress);
        if (distance === null) {
            return res.status(500).json({ message: 'Failed to calculate distance' });
        }

        const price = calculatePrice(distance);
        const newOrder = await Order.create({ ...orderData, idCustomer, shippingAddress, deliveryAddress, price });

        res.status(201).json({
            orderId: newOrder.orderId,
            idCustomer: newOrder.idCustomer, 
            senderName: newOrder.senderName,
            receiverName: newOrder.receiverName,
            packageDetails: newOrder.packageDetails,
            shippingAddress: newOrder.shippingAddress,
            deliveryAddress: newOrder.deliveryAddress,
            price: newOrder.price,
            status: newOrder.status,
            createdAt: newOrder.createdAt,
            updatedAt: newOrder.updatedAt
        });

    } catch (error) {
        console.error('Error creating order:', error);
        res.status(500).json({ message: 'Failed to create order' });
    }
};


