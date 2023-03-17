const mongoose = require('mongoose')
const shortId = require('shortid')

const urlSchema = new mongoose.Schema({
  original_url: {
    type: String,
    required: true,
    // unique: true,
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
  user_id: {
    type: mongoose.Schema.Types.ObjectId, ref: "User"
  },
},{collection: 'shortUrl' }
)

urlSchema.index({ "user_id": 1, "original_url" : 1}); // nivel de esquema

module.exports = mongoose.model('Url', urlSchema)