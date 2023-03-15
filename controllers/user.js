const shortid = require("shortid");
const bcrypt = require('bcrypt');
const User = require("../models/user");



// consulta de usuarios creados
async function getallusers (req, res) {
  await User
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// get a user
async function getuser (req, res) {
  const { email } = req.body;
  await User
    .find({ username: email })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// update name

async function updatenameuser (req, res){
  const {userId} = req.body;
  const { name } = req.body;
  await User
    .find({_id: userId})
    .updateOne({name: name})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

async function updatepassworduser (req, res){
  const {userId} = req.body;
  const { password } = req.body;
  await User
    .find({_id: userId})
    .updateOne({password: password})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};


// delete a user

async function deluser (req, res){
  const { email } = req.body;
  await User
    .remove({ username: email })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};



module.exports = { getuser, getallusers , deluser, updatenameuser, updatepassworduser };
