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

exports.getAllWebBoard = async (req, res, next) => {
  const allWebBoard = await WebBoard.find();

  res.status(200).json({
    status: "success",
    allWebBoard,
  });
};

exports.getWebBoardById = async (req, res, next) => {
  try {
    const webBoard = await WebBoard.findById(req.params.id);

    if (!webBoard) {
      throw new Error("Not found this web-board");
    }

    res.status(200).json({
      status: "success",
      webBoard,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};
