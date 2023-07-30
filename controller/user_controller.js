const { User } = require("../models/index");
const bcryptjs = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

exports.getAllUser = (req, res) => {
  User.findAll()
    .then((User) => {
      res.status(200).json(User);
    })
    .catch((error) => {
      res.status(400).json({
        message: "tidak ada",
        error: error,
      });
    });
};

exports.LoginUser = async (req, res) => {
  const { email, password } = req.body;

  const dataUser = await User.findOne({
    where: {
      email: email,
    },
  });
  if (dataUser) {
    //jika emailnya ada di db
    const passwordNya = await bcryptjs.compare(password, dataUser.password);
    if (passwordNya) {
      //jika password ada di db
      const data = {
        id: dataUser.id,
      };
      //sign token dengan yang ada di .env
      const token = await jsonwebtoken.sign(data, process.env.JWT_SECRET, {
        expiresIn: 60 * 60,
      });
      return res.status(200).json({
        token: token,
      });
      //jika password setelah di sign tidak cocok maka
    } else {
      return res.status(400).json({
        status: false,
        message: "password salah",
      });
    }
    //jika email tidak cocok maka
  } else {
    return res.status(400).json({
      message: "anda belum terdaftar",
    });
  }
};

exports.SignUp = async (req, res) => {
  const { name, email, password, role } = req.body;
  //mencari apakah email sudah terdaftar di db
  const emailUser = await User.findOne({
    where: {
      email: email,
    },
  });
  //jika email sudah ada
  if (emailUser) {
    return res.status(400).json({
      status: false,
      message: "email sudah terdaftar",
    });
  }

  //isi
  const hashPassword = await bcryptjs.hash(password, 10);

  const user = new User({
    name: name,
    email: email,
    password: hashPassword,
    role: role,
  });
  //save
  user.save();

  return res.status(200).json({
    message: "anda berhasil di daftarkan",
  });
};

exports.GetUserById = (req, res) => {
  User.findByPk(req.params.id)
    .then((item) => {
      return res.status(200).json({
        item,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "error",
        data: null,
      });
    });
};

exports.deleteUserbyId = (req, res) => {
  const id = req.params.id;
  User.destroy({
    //hapus dengan id = id params
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User berhasil dihapus",
        });
      } else {
        res.send({
          message: `gagal hapus user dengan id=${id}. mungkin user sudah tidak ada`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "tidak dapat hapus dengan id=" + id,
      });
    });
};
