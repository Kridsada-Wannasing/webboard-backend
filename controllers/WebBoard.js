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
      { id: req.params.id, user_id: req.user.id },
      req.body,
      { new: true }
    );

    if (!editWebBoard) {
      throw new Error("Not found this web-board or is not your web-board");
    }

    res.status(200).json({
      status: "success",
      editWebBoard,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
