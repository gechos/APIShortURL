const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const router = express.Router();
const signIn = require("../controllers/signIn");



//inicio sesion o Login

router.post("/", body("username", "Introduce un email válido").isEmail(),
  body("name", "Introduce un nombre válido").isLength({ min: 3 }),
  body("password", "Introduce una contraseña válida").isLength({
    min: 6,
    max: 8,
  }), signIn);


module.exports = router;
