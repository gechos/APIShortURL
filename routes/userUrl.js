const express = require("express");
const {handleGenerateNewUserURL, getuser, getallusers, deluser, handleGetListUrls, handleAddNewURl  } = require("../controllers/userUrl");

const router = express.Router();

router.post("/user", handleGenerateNewUserURL);

router.get("/user", getallusers);

router.get("/user/:email", getuser);

//No funciona delete no tiene permisos mongo
// router.delete("/user/:email", deluser);

router.delete("/user/del/::email", deluser);

/// hay que calcular primero con URl

router.post('/addUrl', handleAddNewURl);
 

router.get("/history/:userId", handleGetListUrls);


module.exports = router;
