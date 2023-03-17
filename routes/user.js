const express = require("express");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const {
  getuser,
  getallusers,
  deluser,
  updatenameuser,
  resetpassworduser,
  signIn,
} = require("../controllers/user");

const router = express.Router();

//registro o login

// router.post("/register", handleregister);

router.post(
  "/register",
  body("username", "Introduce un email válido").isEmail(),
  body("name", "Introduce un nombre válido").isLength({ min: 3 }),
  body("password", "Introduce una contraseña válida").isLength({
    min: 6,
    max: 8,
  }),
  (req, res) => {
    const { username, name, password } = req.body;

    const user = new User({ username, name, password });

    user.save((err) => {
      if (err) {
        // res.status(500).send("Error al registrar el usuario");
        res.status(500).send(err.message);
      } else {
        res
          .status(200)
          .json({
            msg: "Usuario registrado",
            user_id: user._id,
            username: username,
            name: name,
            password: password,
          });
      }
    });
  }
);

//inicio sesion o Login

// router.post('/authenticate', handleLogin);
router.post("/authenticate", (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({ username: username }, (err, user) => {
    if (err) {
      res.status(500).send("Error al autentificar el usuario");
    } else if (!user) {
      res.status(500).send("Usuario no existe");
    } else {
      user.isCorrectPassword(password, (err, result) => {
        if (err) {
          res.status(500).send("Error al autentificar el usuario", err.message);
          next();
        } else if (result) {
          res
            .status(200)
            .json({
              msg: "Usuario autentificado correctamente",
              user_id: user._id,
              username: user.username,
              name: user.name,
            });
          next();
        } else {
          res.status(500).send("Usuario y/o contraseña incorrecta");
          next();
        }
      });
    }
  });
});

//consultas usuarios

router.get("/users", getallusers);

// consulta de un usuario

router.get(
  "/user",
  body("email", "Introduce un email válido").isEmail(),
  (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.json({ errors: errors.array() });
    }
    getuser;
  }
);

//Eliminacion de un usuario

router.delete(
  "/user",
  body("email", "Introduce un email válido").isEmail(),
  (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.json({ errors: errors.array() });
    }
    deluser;
  }
);

// update name usuario

router.patch(
  "/user",
  body("email", "Introduce un email válido").isEmail(),
  (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors.array());
      return res.json({ errors: errors.array() });
    }
    updatenameuser;
  }
);

// update password usuario  encriptada/

router.patch("/user/password", resetpassworduser);

module.exports = router;
