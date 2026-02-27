const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
const studentRoutes = require("./routes/studentRoutes");
app.use("/api", studentRoutes);

// Serve React Frontend
app.use(express.static(path.join(__dirname, "../frontend2/frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend2/frontend/build", "index.html"));
});

// Server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});