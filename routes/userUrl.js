const express = require("express");
const router = express.Router();
const { getListUrlsUser, deluserUrl} = require("../controllers/userUrl"); 





//consulta de las url de un usuario
router.get("/", getListUrlsUser);

//eliminacion una url de un usuario


router.delete("/", deluserUrl);

module.exports = router;