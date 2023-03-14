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

// delete a user

async function deluser (req, res){
  const { email } = req.body;
  await User
    .remove({ username: email })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};



//registro o login

// async function handleregister (req,res) {
//   const {username, name, password} = req.body;
//   // console.log(username, name, password)

//   const user = new User({username, name, password});

//   await User
//     .save(err =>{
//         if(err){
//           res.status(500).send("Error al registrar el usuario");
//         }else{
//           res.status(200).json({ msg:'Usuario registrado', user_id: user._id, username: username , name: name, password: password});
//         }
//       });
// };

//inicio sesion o Login

// async function handleLogin (req,res,next){
//   const {username, password} = req.body;
//   await User
//     .findOne({username},(err, user) =>{
//       if(err){
//         res.status(500).send("Error al autentificar el usuario");
//       }else if(!user){
//         res.status(500).send('Usuario no existe');
//       }else{
//         user.isCorrectPassword(password, (err, result) =>{
//           if(err){
//             res.status(500).send("Error al autentificar el usuario");
//             next();
//           }else if(result){
//             res.status(200).json({ msg:'Usuario autentificado correctamente', user_id: user._id, username: user.username, name: user.name});
//             next();
//           }else{
//             res.status(500).send('Usuario y/o contraseña incorrecta');
//             next();
//           }
//         });
//       }
//     })
// };


  

module.exports = { getuser, getallusers , deluser };
