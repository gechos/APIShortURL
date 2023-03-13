const shortid = require("shortid");
const urlSchema = require('../models/shortUrl');

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = shortid();

  await urlSchema.create({
    original_url:body.url,
    short_url: shortID,
    shortenUrl:'https://'+req.headers.host+'/'+shortID,
    user_id:req.headers.user_id
  });

  return res.json({ original_url:body.url,
    short_url: shortID });
};

// consulta de todas las Url creadas

async function getallurls (req, res) {
  await urlSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

// consultar una URL por  short_url

async function getUrl (req, res) {
  const { shorturl } = req.body;
  await urlSchema
    .find({ short_url: shorturl })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
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

module.exports = { handleGenerateNewShortURL, getallurls, getUrl };
