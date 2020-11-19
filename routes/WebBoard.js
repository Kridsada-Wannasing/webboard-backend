const router = require("express").Router();
const webBoardControllers = require("../controllers/WebBoard");
const passport = require("passport");

const authentication = passport.authenticate("jwt", { session: false });

router.use(authentication);

router.get("/", webBoardControllers.getAllWebBoard);
router.get("/:id", webBoardControllers.getWebBoardById);
router.post("/", webBoardControllers.createWebBoard);
router.patch("/:id", webBoardControllers.editWebBoard);

module.exports = router;
