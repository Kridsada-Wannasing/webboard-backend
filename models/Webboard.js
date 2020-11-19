const mongoose = require("mongoose");

const webBoardSchema = new mongoose.Schema({
  user_id: {
    type: String,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

webBoardSchema.set("timestamps", {
  createdAt: "create_at",
  updatedAt: "edit_at",
});

const WebBoard = mongoose.model("WebBoard", webBoardSchema);

module.exports = WebBoard;
