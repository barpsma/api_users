require("dotenv").config();
const jsonwebtoken = require("jsonwebtoken");
const { User } = require("../models/index");

exports.authUser = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(400).json({
      message: "token tidak ada",
    });
  }
  try {
    const decode = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    req.id = decode.id;
    next();
  } catch (err) {
    return res
      .status(400)
      .json({ message: "token tidak valid atau sudah expired" });
  }
};

exports.isAdmin = async (req, res, next) => {
  //mencari user berdasarkan id
  const dataUser = await User.findOne({
    where: {
      id: req.id,
    },
  });
  //variabel menyimpan data role
  const dataRole = dataUser.role;
  // console.log(dataRole)

  //jika user ditemukan
  if (dataUser) {
    //jika role sama dengan admin
    if (dataRole == "admin") {
      //maka
      next();
    } else {
      return res.status(400).json({
        message:
          "Hanya Admin yang bisa mengakses ini, silahkan login dengan Role admin",
      });
    }
  }
};
