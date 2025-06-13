const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

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
            { url: 'http://localhost:7000/api' },
        ],
        components: {
            schemas: {
                Order: {
                    type: 'object',
                    properties: {
                        orderId: { type: 'integer', description: 'Unique identifier for the order' },
                        idCustomer: { type: 'string', format: 'uuid', description: 'Customer unique identifier', example: '123e4567-e89b-12d3-a456-426614174000'},
                        senderName: { type: 'string', description: 'Name of the sender', example: 'Kenya Luna' },
                        receiverName: { type: 'string', description: 'Name of the receiver', example: 'Alejandra Luna' },
                        receiverPhone: { type: 'string', description: 'Receiver phone number', example: '0987654321' },
                        packageDetails: { type: 'string', description: 'Details of the package', example: 'Books and documents' },
                        shippingAddress: { type: 'string',  description: 'Shipping address for the package', example: 'La Arcadia, Quito, Ecuador' },
                        deliveryAddress: { type: 'string', description: 'Delivery address for the package', example: 'Av. Amazonas 123, Guayaquil, Ecuador' },
            
                    },
                    required: ['idCustomer', 'senderName', 'receiverName', 'shippingAddress', 'deliveryAddress']
                }
            }
        }
    },
    apis: [path.join(__dirname, "../routes/*.js")],  // Path to API documentation
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs; // Export only the swaggerDocs