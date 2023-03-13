var router = require('express').Router();

// inicio Sesion o registro y consultas usuarios
router.use('/user', require('./user'));


//consultas urls
router.use('/shortUrl', require('./shortUrl'));



module.exports = router;