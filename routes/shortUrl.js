const express = require("express");
const router = express.Router();
const utils = require('../middlewares/utils');
const urlSchema = require('../models/shortUrl');
const shortid = require("shortid");
// const URL = require("./models/url");


/// falta verificar si existe y devolver esa

 router.post("/", (req, res) => {
  const body = req.body;
  if (!req.body.url) return res.status(400).json({ error: "url is required" });
  
  const shortID = shortid();
  urlSchema.create({
    original_url:body.url,
    short_url: shortID,
    shortenUrl: this.route+shortID
  });

  return res.json({ original_url:body.url,
    short_url: shortID });
  });



// redireccion con corta

// router.post('/shortUrls', async (req, res) => {
//   await urlSchema.create({ original_url: req.body.fullUrl })

//   res.redirect('/')
// });


// get all urls
router.get("/urls", (req, res) => {
  urlSchema
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


module.exports = router;