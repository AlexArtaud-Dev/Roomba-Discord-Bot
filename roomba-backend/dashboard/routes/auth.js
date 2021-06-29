const router = require('express').Router();
const passport = require('passport');


router.get('/discord', passport.authenticate('discord'));

router.get('/discord/redirect', passport.authenticate('discord'), (req, res) => {
    res.redirect('http://90.112.182.166:3001/menu');
})

router.get('/', (req, res) => {
    if (req.user) {
        res.send(req.user);
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }

})
module.exports = router;