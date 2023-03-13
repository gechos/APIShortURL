const express = require("express");
const router = express.Router();
const {handleGenerateNewShortURL, getallurls, getUrl  } = require("../controllers/shortUrl");



// generar ShortUrl por id usuario en cabecera

router.post("/", handleGenerateNewShortURL);


// get all urls database

router.get("/urls",getallurls);

//consulta por url corta

router.get("/shorturl",getUrl);

//consulta de las url de un usuario


//eliminacion de una url de un usuario



module.exports = router;