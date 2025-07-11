const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["http://localhost:3000"], // ✅ Allow only this
    credentials: true, // ✅ If you need cookies or auth headers
  })
);

app.use(express.json());
app.use("/items", require("./routes/items"));
app.use("/users", require("./routes/users/users"));

app.get("/", (req, res) => res.send("API is running!"));

app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
