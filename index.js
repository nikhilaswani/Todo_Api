const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
var cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use(cors());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/todos", require("./routes/todoRoutes"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
