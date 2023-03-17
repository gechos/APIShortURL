const express = require("express");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const {
  getuser,
  getallusers,
  deluser,
  updatenameuser,
  resetpassworduser
} = require("../controllers/user");

const router = express.Router();


//consultas usuarios

router.get("/users", getallusers);

// consulta de un usuario

router.get("/user", getuser);

//Eliminacion de un usuario

router.delete( "/user", deluser);

// update name usuario

router.patch( "/user", updatenameuser );

// update password usuario  encriptada/

router.patch("/user/password", resetpassworduser);

module.exports = router;
