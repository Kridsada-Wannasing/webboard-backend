const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    }).select("+password");

    if (!user || !(await user.correctPassword(password, user.password))) {
      throw new Error("Invalid email or password!!!");
    }

    const payload = {
      id: user._id,
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.SECRET_OR_KEY, {
      expiresIn: "7d",
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
