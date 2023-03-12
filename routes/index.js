var router = require('express').Router();


router.use('/user', require('./user'));

router.use('/shortUrl', require('./shortUrl'));



module.exports = router;