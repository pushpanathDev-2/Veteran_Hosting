// app.js
const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/items');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/items', itemRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});