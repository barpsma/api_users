const router = require("express").Router();
const { LoginUser } = require("../controller/user_controller");

const {
  runValidation,
  validationSignUp,
  validationLogin,
} = require("../validation");
const { authUser, isAdmin } = require("../middlewares/authUser");

router.post("/login", validationLogin, runValidation, LoginUser);

module.exports = router;
