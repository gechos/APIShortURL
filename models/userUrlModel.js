const mongoose = require("mongoose");
// user_urls.createIndexes( { "userid": 1 }, { unique: true } )) // indice unico en coleccion);

const userUrlSchema = new mongoose.Schema({ 
  // campos del esquema
  email: {
    type: String,
    required: true,
    unique: true,
  },
  User: {
    type: String,
    required: true
  },
  Pasword: {
    type: String,
    required: true,
  },
  history: [
    {
      shortId: {
        type: String,
        required: true,
        unique: true,
      },
      redirectURL: {
        type: String,
        required: true,
      },
    },
  ],
},
{ collection: 'user_urls' },  // <- nombre de la colección en Mongo
);
const URL = mongoose.model("userUrl", userUrlSchema);

module.exports = URL;
