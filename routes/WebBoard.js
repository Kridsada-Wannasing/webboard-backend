const router = require("express").Router();
const webBoardControllers = require("../controllers/WebBoard");

router.post("/", webBoardControllers.createWebBoard);

module.exports = router;
