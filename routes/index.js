var router = require('express').Router();

//registro usuarios
router.use('/register', require('./register'));

// inicio Sesion o registro
router.use('/authenticate', require('./authenticate'));

// consultas usuarios
router.use('/user', require('./user'));

//consultas urls
router.use('/shortUrl', require('./shortUrl'));

//consultas urls por usuario
router.use('/userUrls', require('./userUrl'));




module.exports = router;