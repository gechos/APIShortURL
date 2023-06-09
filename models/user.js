const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const saltRounds = 10; // veces que realiza bcrypt

const UserSchema = new mongoose.Schema(
  {
    // campos del esquema
    username: { type: String, required: true, unique: true, '$regex': /@midominio\.com$/   },
    name: { type: String, required: true, max: 10, min: 3 },
    password: { type: String, required: true, min: 6, max: 8  },
  },
  { collection: "user" } // <- nombre de la colección en Mongo
);

// Previo a registro y calculo clave encriptada

UserSchema.pre("save", function (next) {
  if (this.isNew || this.isModified("password")) {
    const document = this;

    bcrypt.hash(document.password, saltRounds, (err, hashedPassword) => {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else { 
    next();
  }
});

UserSchema.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};




// modelo, varible
module.exports = mongoose.model("User", UserSchema);
