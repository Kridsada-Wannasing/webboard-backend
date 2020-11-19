const WebBoard = require("../models/Webboard");

exports.createWebBoard = async (req, res, next) => {
  const newWebBoard = await WebBoard.create({
    ...req.body,
    user_id: req.user.id,
  });

  res.status(201).json({
    status: "success",
    newWebBoard,
  });
};
