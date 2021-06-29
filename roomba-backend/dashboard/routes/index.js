const router = require('express').Router();
const auth = require('./auth');
const main = require('./main');
const discord = require('./discord');

router.use('/auth', auth);
router.use('/main', main);
router.use('/discord', discord);

module.exports = router;