const express = require("express");
const router = express.Router();
const { getListUrlsUser} = require("../controllers/userUrl"); 





//consulta de las url de un usuario
router.get("/", getListUrlsUser);

//eliminacion de una url de un usuario



module.exports = router;