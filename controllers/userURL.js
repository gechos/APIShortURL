const User = require("../models/user");
const URL = require('../models/shortUrl');



// lee el historio de urls por usuario

async function getListUrlsUser (req, res) {
  const userId = req.body; 
  // datos a añadir en consulta raiz URl
  var populate = { 
        path: 'user', 
        select: 'User.username User.name'
    };
// .find({ user_id: userId })
  await 
  URL.find()
     .populate( populate )
     .exec((error, URL) => {
      if (error) {
        return res.status(500).json({ success: false, error })
        }
        return URL;
       })    
  }

// 


// URL.find().populate( 'user_id.ref' ).exec();
// }


module.exports = { getListUrlsUser };