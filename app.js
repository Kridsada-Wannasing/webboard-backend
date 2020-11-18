const express = require("express");
const userRoutes = require("./routes/User");

const app = express();

app.use("/api/v1/user", userRoutes);

module.exports = app;
