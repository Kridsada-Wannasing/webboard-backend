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

exports.editWebBoard = async (req, res, next) => {
  try {
    const editWebBoard = await WebBoard.findOneAndUpdate(
      { user_id: req.user.id },
      req.body,
      { new: true }
    );

    if (!editWebBoard) {
      throw new Error("Not found this Web-board");
    }

    res.status(200).json({
      status: "success",
      editWebBoard,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};