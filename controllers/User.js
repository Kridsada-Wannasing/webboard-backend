const User = require("../models/User");
const jwt = require("jsonwebtoken");
const Validate = require("../utils/Validate");

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOneAndUpdate(
      {
        username,
      },
      { last_login_at: Date.now() },
      { new: true }
    ).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      throw new Error("Invalid username or password!!!");
    }

    const payload = {
      id: user._id,
      username: user.username,
    };

    const token = jwt.sign(payload, process.env.SECRET_OR_KEY, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(200).json({
      status: "success",
      token,
      user,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const validateEmail = new Validate(email).validateEmail();
    const validatePassword = new Validate(password).validatePassword();

    if (!validateEmail) {
      throw new Error("Invalid email.");
    } else if (!validatePassword) {
      throw new Error("Invalid password.");
    }

    const target = await User.findOne({ username: req.body.username });

    if (target) {
      throw new Error("Username already taken.");
    }

    const newUser = await User.create(req.body);

    res.status(201).json({
      status: "success",
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
