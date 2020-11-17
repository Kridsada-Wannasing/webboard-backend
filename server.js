const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({
  path: "./config.env",
});

process.on("uncaughtException", (err) => {
  console.log("uncaught exception!!!");
  console.log(err.name, err.message);
  process.exit(1);
});

const database = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Database connections successful!!!"));

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`running at port ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("unhandle rejection!!!");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
