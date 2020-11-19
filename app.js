const express = require("express");
const userRoutes = require("./routes/User");
const webBoardRoutes = require("./routes/WebBoard");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: false }));

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/web-board", webBoardRoutes);

module.exports = app;
