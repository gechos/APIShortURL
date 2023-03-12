const shortid = require("shortid");
const userSchema = require("../models/user");



// consulta de usuarios creados
async function getallusers (req, res) {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// get a user
async function getuser (req, res) {
  const { username } = req.params;
  userSchema
    .find({ username: username })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// delete a user

async function deluser (req, res){
  const { username } = req.params;
  userSchema
    .remove({ username: username })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};



  

module.exports = { getuser, getallusers,deluser };
