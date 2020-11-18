const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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

userSchema.methods.lastLoginAt = () => {
  this.last_login_at = Date.now();
};

userSchema.methods.correctPassword = (userPassword, password) => {
  return bcrypt.compareSync(userPassword, password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
