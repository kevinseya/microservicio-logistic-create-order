const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger/swaggerConfig');
const sequelize = require('./config/dbConfig'); 
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const app = express();

// Middleware setup
app.use(bodyParser.json());

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Redirect to Swagger when accessing the root URL
app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

// Routes setup
app.use('/api/order', orderRoutes);

// Start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Synchronize models with the database
sequelize.sync({ force: true })
    .then(() => {
        console.log('Database synchronized and tables recreated.');
    })
    .catch((error) => {
        console.error('Failed to synchronize database:', error);
    });

