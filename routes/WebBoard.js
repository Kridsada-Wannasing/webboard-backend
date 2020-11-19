const router = require("express").Router();
const webBoardControllers = require("../controllers/WebBoard");

router.get("/", webBoardControllers.getAllWebBoard);
router.get("/:id", webBoardControllers.getWebBoardById);
router.post("/", webBoardControllers.createWebBoard);

module.exports = router;
