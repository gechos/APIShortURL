const express = require("express");
const bcrypt = require('bcrypt');
const User = require ('../models/user');


const router = express.Router();



//registro o login

router.post('/register',(req,res,next) =>{
  const {username, name, password} = req.body;
  console.log(username, name, password)

  const user = new User({username, name, password});

  user.save(err =>{
      if(err){
        res.status(500).send("Error al registrar el usuario");
        next();
      }else{
        res.status(200).json({ msg:'Usuario registrado', username: body.username , name: body.name, password: body.password});
        next()
      }
    });
});



router.post('/authenticate',(req,res,next) =>{
  const {username, password} = req.body;
  User.findOne({username},(err, user) =>{
    if(err){
      res.status(500).send("Error al autentificar el usuario");
    }else if(!user){
      res.status(500).send('Usuario no existe');
    }else{
      user.isCorrectPassword(password, (err, result) =>{
        if(err){
          res.status(500).send("Error al autentificar el usuario");
          next();
        }else if(result){
          res.status(200).json({ msg:'Usuario autentificado correctamente', user: user._id, username: user.username, name: user.name});
          next();
        }else{
          res.status(500).send('Usuario y/o contraseña incorrecta');
          next();
        }
      });
    }
  })

});




module.exports = router;