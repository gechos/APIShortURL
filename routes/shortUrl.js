const express = require("express");
const router = express.Router();
const Url = require('../models/shortUrl');
const shortid = require("shortid");


/// falta verificar si existe y devolver esa

 router.post("/", (req, res) => {
  const body = req.body;
  console.log(req.headers);
  if (!req.body.url) return res.status(400).json({ error: "url is required" });
  
  const shortID = shortid();
  Url.create({
    original_url:body.url,
    short_url: shortID,
    shortenUrl:'https://'+req.headers.host+'/'+shortID,
    user_id:req.headers.user_id
  });

  return res.json({ original_url:body.url,
    short_url: shortID });
  });




// get all urls
router.get("/urls", (req, res) => {
  Url
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});



router.get("/:shortId", (req, res) => {
  const shortId = req.params.shortId;
  const entry = urlSchema.findOneAndUpdate(
    {
      shortId,
    }
  );
  res.redirect(entry.redirecturlSchema);
});


router.get("/history/:userId", handleGetListUrls);


module.exports = router;