var router = require('express').Router();


router.use('/user', require('./userUrl'));

// router.use('/users', require('./user'));

router.use('/shortUrl', require('./shortUrl'));



module.exports = router;