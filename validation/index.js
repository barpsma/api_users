const { check, validationResult } = require("express-validator");

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: false,
      message: errors.array()[0].msg,
    });
  }
  next();
};

exports.validationSignUp = [
  check("name", "nama tidak boleh kosong").notEmpty(),
  check("email", "email tidak boleh kosong")
    .notEmpty()
    .matches(/.+\@.+\..+/)
    .withMessage("email harus valid"),
  check("password", "password tidak boleh kosong")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("password minimal 8 karakter"),
  check("role", "role tidak boleh kosong").notEmpty(),
];

exports.validationLogin = [
  check("email", "email tidak boleh kosong")
    .notEmpty()
    .matches(/.+\@.+\..+/)
    .withMessage("email harus valid"),
  check("password", "password tidak boleh kosong")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("password minimal 8 karakter"),
];
