const express = require("express");
const {handleGenerateNewuserURL, getuser, getallusers,deluser,handleGetListuserSchemas, handleAddNewuserSchema  } = require("../controllers/user");

const router = express.Router();

router.post("/user", handleGenerateNewuserURL);

router.get("/user", getallusers);

router.get("/user/:email", getuser);

//No funciona delete
router.delete("/user/:email", deluser);

/// hay que calcular primero con URl

router.post('/addUrl', handleGetListuserSchemas);
 

router.get("/history/:userId", handleAddNewuserSchema);


module.exports = router;