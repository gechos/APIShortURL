const User = require("../models/user");


const signIn = async (req, res, next) => {

const { username, password } = req.body;

  User.findOne({ username: username }, (err, user) => {
    if (err) {
      res.status(500).send("Error al autentificar el usuario");
    } else if (!user) {
      res.status(500).send("Usuario no existe");
    } else {
      user.isCorrectPassword(password, (err, result) => {
        if (err) {
          res.status(500).send("Error al autentificar el usuario", err.message);
          next();
        } else if (result) {
          res
            .status(200)
            .json({
              msg: "Usuario autentificado correctamente",
              user_id: user._id,
              username: user.username,
              name: user.name,
            });
          next();
        } else {
          res.status(500).send("Usuario y/o contraseña incorrecta");
          next();
        }
      });
    }
  });
}

module.exports = signIn;
