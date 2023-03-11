const shortid = require("shortid");
const URL = require("../models/userUrlModel");

// crea colección usuario Urls
async function handleGenerateNewUserURL(req, res) {
  const body = req.body;
  if (!body.user) return res.status(400).json({ error: "user is required" });
  if (!body.pasword) return res.status(400).json({ error: "pasword is required" });
  if (!body.email) return res.status(400).json({ error: "email is required" });
  await URL.create({
    email: body.email,
    User: body.user,
    Pasword: body.pasword,
    history: []
  });
  return res.json({ UserId: body.user , Pasword: body.pasword});
};



// consulta de usuarios creados
async function getallusers (req, res) {
  URL
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// get a user
async function getuser (req, res) {
  const { email } = req.params;
  URL
    .find({ email: email })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// delete a user

async function deluser (req, res){
  const { email } = req.params;
  console.log(email);
  URL
    .findOneAndDelete({ email: email })
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


// añade url por usuario

async function handleAddNewURl(req, res) {
    const shortID = shortid();
    const newurl=req.body.url;
    
    URL.updateOne({ email: req.body.email }, {
                $push: {
                    'history': {
                        shortId: shortID,
                        redirectURL: newurl
                    }
                }
            },
            function(error) {
                if (error) {
                    return res.json({
                        success: false,
                        msj: 'No se pudo agregar la URL',
                        err
                    });
                } else {
                    return res.json({
                        success: true,
                        msj: 'Se agregó correctamente la URL'
                    });
                }
            }
        )
      };

// lee el historico de urls por usuario

async function handleGetListUrls(req, res) {
  const userId = req.params.userId;
  const result = await URL.findOne({ UserId });
  return res.json({
    shortId: result.history,
    redirectURL: result.history,
  });
};
  

module.exports = { handleGenerateNewUserURL, getuser, getallusers, deluser, handleGetListUrls, handleAddNewURl };