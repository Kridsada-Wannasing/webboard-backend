const express = require("express");
const userRoutes = require("./routes/User");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: false }));

app.use("/api/v1/user", userRoutes);

module.exports = app;
