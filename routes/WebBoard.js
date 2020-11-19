const router = require("express").Router();
const webBoardControllers = require("../controllers/WebBoard");

router.post("/", webBoardControllers.createWebBoard);
router.patch("/:id", webBoardControllers.editWebBoard);

module.exports = router;
