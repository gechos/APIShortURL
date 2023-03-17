const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const register = require("../controllers/register");

const router = express.Router();

//registro o login


router.post(
  "/",
  body("username", "Introduce un email válido").isEmail(),
  body("name", "Introduce un nombre válido").isLength({ min: 3 }),
  body("password", "Introduce una contraseña válida").isLength({
    min: 6,
    max: 8,
  }),register
);


module.exports = router;
