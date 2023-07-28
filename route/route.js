const router = require("express").Router();
const {
  LoginUser,
  SignUp,
  getAllUser,
  GetUserById,
  deleteUserbyId,
} = require("../controller/user_controller");

const {
  runValidation,
  validationSignUp,
  validationLogin,
} = require("../validation");
const { authUser, isAdmin } = require("../middlewares/authUser");

router.get("/", authUser, isAdmin, getAllUser);
router.post("/", validationSignUp, runValidation, SignUp);
router.get("/:id", authUser, isAdmin, GetUserById);
router.delete("/:id", authUser, isAdmin, deleteUserbyId);
router.post("/login", validationLogin, runValidation, LoginUser);

module.exports = router;
