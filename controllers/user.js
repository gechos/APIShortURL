const shortid = require("shortid");
const User = require("../models/user");



// consulta de usuarios creados
async function getallusers (req, res) {
  User
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// get a user
async function getuser (req, res) {
  const { email } = req.body;
  User
    .find({ username: email })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// delete a user

async function deluser (req, res){
  const { username } = req.params;
  User
    .findAndRemove({ username: username })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};



//eliminar usuario

//  async function deluser(req, res){
// //método para encontrar y eliminar un dato en la DB, el _id es el identificador en la DB
//   // const { email } = req.params;
//   const email = req.body.email
//     URL
//     .findAndRemove({ email: email })
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// };
  

module.exports = { getuser, getallusers ,deluser };
