const User = require("../models/user");
const urlSchema = require('../models/shortUrl');



// lee el historio de urls por usuario

async function getListUrlsUser(req, res) {
  const userId = req.body;
User
    .findOne({ user_id: userId })
    .populate('shortUrl')
    .exec (function (err, User) {
        if (err) return handleError(err); 
        return res.json({
        shortId: result.short_url,
        original_url: result.original_url,
        shortenUrl: result.shortenUrl
        });
      })
};
      


module.exports = { getListUrlsUser };
