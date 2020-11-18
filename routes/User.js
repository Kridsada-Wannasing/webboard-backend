const router = require("express").Router();
const userControllers = require("../controllers/User");

router.post("/login", userControllers.login);

module.exports = router;
