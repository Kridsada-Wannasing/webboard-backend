const mongoose = require("mongoose");

const webBoardSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
    unique: true,
  },
  create_at: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  edit_at: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

webBoardSchema.pre("findOneAndUpdate", async function (next) {
  this.edit_at = Date.now();

  next();
});

const WebBoard = mongoose.model("WebBoard", webBoardSchema);

module.exports = WebBoard;
