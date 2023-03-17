const User = require("../models/user");
const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  var BCRYP_SALT_RAUNDS = 10;
  console.log(req.body)
  const { username, password, name} = req.body;

  const ifExist = await User.signIn(username);

  if (!ifExist) {
    const passwordCryp = await bcrypt.hash(password, BCRYP_SALT_RAUNDS);

    await User.register(username, name, passwordCryp);
    // const token = jwt.sign({ username }, process.env.SECRET, {
    //   algorithm: "HS256",
    //   expiresIn: 3000,
    // });
    // res.status(201).json({ token, name: client.name, id_user: client.id_user });
    res.status(201).json({ name: User.name, user_id: User.user_id });
  } else{
    const error =[{Msg:"usuario ya existente"}]
      res.status(406).json(error)
  }
};

module.exports = register;