const User = require("../models/user");
const URL = require("../models/shortUrl");
var mongoose = require("mongoose");

// lee el historio de urls por usuario

const getListUrlsUser = async (req, res) => {
  const { userId } = req.body;
  // console.log( userId)

  var id = mongoose.Types.ObjectId(userId);

  return User.aggregate([
    { $match: { _id: id } },
    {
      $lookup: {
        from: "shortUrl",
        localField: "_id",
        foreignField: "user_id",
        as: "urls",
      },
    },
  ]).exec((error, dataResponse) => {
    if (error) {
      return res.status(500).json({ success: false, error });
    }
    return res.status(200).json({ success: true, data: dataResponse });
  });



  // datos a añadir en consulta raiz URl
  // return URL.find({ user_id: userId })
  //   .populate({ path: "user_id", select: "name", $addFields: { id: "_id" } })
  //   .exec((error, dataResponse) => {
  //     if (error) {
  //       return res.status(500).json({ success: false, error });
  //     }
  //     return res.status(200).json({ success: true, data: dataResponse });
  //   });
};

// eliminar una Url de un usuario

// delete a user

const deluserUrl = async (req, res) => {
  const { userId } = req.body;
  const { url }  = req.body;

  // console.log(url,userId)

  await URL
    .findOneAndRemove({ user_id: userId },{original_url: url})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};


module.exports = { getListUrlsUser, deluserUrl };
