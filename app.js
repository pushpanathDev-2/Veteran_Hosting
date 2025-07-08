require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // ✅ 1️⃣ Add CORS

const itemRoutes = require("./routes/items");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ 2️⃣ Use CORS middleware (allow all origins or configure as needed)
app.use(cors());

app.use(bodyParser.json());

// Routes
app.use("/items", itemRoutes);

// ✅ Railway health check
app.get("/", (req, res) => {
  res.send("API is running!");
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
