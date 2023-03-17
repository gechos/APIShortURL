const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/user");

const router = express.Router();

//registro o login


router.post(
  "/",
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


module.exports = router;
