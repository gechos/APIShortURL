const shortid = require("shortid");
const userSchema = require("../models/userUrlModel");

// crea colección usuario userSchemas
async function handleGenerateNewuserURL(req, res) {
  const body = req.body;
  if (!body.user) return res.status(400).json({ error: "user is required" });
  if (!body.pasword) return res.status(400).json({ error: "pasword is required" });
  if (!body.email) return res.status(400).json({ error: "email is required" });
  await userSchema.create({
    email: body.email,
    User: body.user,
    Pasword: body.pasword,
    history: []
  });
  return res.json({ UserId: body.user , Pasword: body.pasword});
};



// consulta de usuarios creados
async function getallusers (req, res) {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// get a user
async function getuser (req, res) {
  const { email } = req.params;
  userSchema
    .find({ email: email })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// delete a user

async function deluser (req, res){
  const { email } = req.params;
  userSchema
    .remove({ email: email })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};



  

module.exports = { handleGenerateNewuserURL, getuser, getallusers,deluser };
