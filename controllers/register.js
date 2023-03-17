const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  var BCRYP_SALT_RAUNDS = 10;

  const { username, password, name} = req.body;

  const passwordCryp = await bcrypt.hash(password, BCRYP_SALT_RAUNDS);

  try {
    const response = await registeruser(name, username, passwordCryp);
     const token = jwt.sign({ username }, process.env.SECRET, {
       algorithm: "HS256",
       expiresIn: 30000,
     });
     
     res.status(201).json({  username: response.username, name: response.name, token: token });
   } catch (error) {
     res.status(400).json({ error });
   }
 };


 // registro usuarios

async function registeruser(name, username, passwordCryp) {
  const user = await User.create({ 
    username: username,
    name: name,
    password: passwordCryp,
  });
  await user.save();
  return user;
};


module.exports = register;