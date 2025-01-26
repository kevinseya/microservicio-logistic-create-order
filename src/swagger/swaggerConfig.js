const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger configuration
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Logistics Order API',
            version: '1.0.0',
            description: 'API for managing logistics orders',
        },
        servers: [
            { url: 'http://localhost:3000/api' },
        ],
        components: {
            schemas: {
                Order: {
                    type: 'object',
                    properties: {
                        orderId: { type: 'integer', description: 'Unique identifier for the order' },
                        senderName: { type: 'string', description: 'Name of the sender' },
                        receiverName: { type: 'string', description: 'Name of the receiver' },
                        packageDetails: { type: 'string', description: 'Details of the package' },
                        shippingAddress: { type: 'string', description: 'Shipping address for the package' },
                        status: { type: 'string', description: 'Current status of the order' },
                    },
                },
            },
        },
    },
    apis: ['./src/routes/*.js'], // Path to API documentation
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs; // Export only the swaggerDocs