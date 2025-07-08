// app.js
const express = require("express");
const bodyParser = require("body-parser");
const itemRoutes = require("./routes/items");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/items", itemRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
