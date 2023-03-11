const mongoose = require('mongoose')
const shortId = require('shortid')

const urlSchema = new mongoose.Schema({
  original_url: {
    type: String,
    required: true,
    unique: true,
  },
  short_url: {
    type: String,
    required: true,
    default: shortId.generate,
    unique: true,
  },
  shortenUrl: {
    type: String,
    required: true,
  },
},
{collection: 'shortUrl' }
)

module.exports = mongoose.model('shortUrl', urlSchema)