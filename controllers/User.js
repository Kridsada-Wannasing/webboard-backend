const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      username,
    }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      throw new Error("Invalid username or password!!!");
    }

    await user.lastLoginAt();

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
    const target = await User.findOne({ email: req.body.email });

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
