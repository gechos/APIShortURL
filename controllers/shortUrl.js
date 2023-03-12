const shortid = require("shortid");
const urlSchema = require('../models/urlModel');

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = shortid();

  await urlSchema.create({
    original_url:body.url,
    short_url: shortID,
  });

  return res.json({ original_url:body.url,
    short_url: shortID });
}


module.exports = { handleGenerateNewShortURL };
