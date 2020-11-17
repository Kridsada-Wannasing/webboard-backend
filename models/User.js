const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  last_login_at: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
