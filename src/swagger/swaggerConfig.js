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
                        senderName: { type: 'string', description: 'Name of the sender', example: 'Kenya Luna' },
                        receiverName: { type: 'string', description: 'Name of the receiver', example: 'Alejandra Luna' },
                        packageDetails: { type: 'string', description: 'Details of the package', example: 'Books and documents' },
                        shippingAddress: { type: 'string', description: 'Shipping address for the package', example: 'La Arcadia' },
                        status: { type: 'string', description: 'Current status of the order' },
                    },
                    required: ['senderName', 'receiverName', 'packageDetails','shippingAddress'],
                },
            },
        },
    },
    apis: ['./routes/*.js'], // Path to API documentation
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs; // Export only the swaggerDocs