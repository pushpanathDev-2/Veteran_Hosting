const express = require("express");
const cors = require("cors"); // ✅ Add this

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // ✅ Allow ALL origins by default

// your other code:
app.use(express.json());
app.use("/items", require("./routes/items"));

app.get("/", (req, res) => res.send("API is running!"));

app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
