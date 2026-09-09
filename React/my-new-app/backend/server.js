const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const app = express();

// Middleware
app.use(cors({origin: "http://localhost:5173"}));
app.use(express.json());

// MongoDB
mongoose
    .connect("mongodb://127.0.0.1:27017/merncrud")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log(error);
    });

// Routes
app.use("/api/users", userRoutes);

// Server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});