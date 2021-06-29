const router = require('express').Router();
const path = require('path');
var ts = new Date();
const timestampLogslash = ts.toLocaleString().split(" ");
const timestampLog = timestampLogslash[0].replace(/\//g, "-");


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../index.html'));
});
router.get('/bootstrap', (req, res) => {
    res.sendFile(path.join(__dirname + '/../css/bootstrap.min.css'));
});

router.get('/maincss', (req, res) => {
    res.sendFile(path.join(__dirname + '/../css/main.css'));
});
router.get('/nowui', (req, res) => {
    res.sendFile(path.join(__dirname + '/../css/now-ui-kit.css'));
});


router.get('/message', function(req, res) {
    res.sendFile(path.join(__dirname + `/../logs/${timestampLog}.txt`));
});
router.get('/urldashboard', function(req, res) {
    res.sendFile(path.join(__dirname + `/../url/url1.txt`));
});
router.get('/logs', function(req, res) {
    res.sendFile(path.join(__dirname + '/../logs.html'));
});
router.get('/agenda', function(req, res) {
    res.sendFile(path.join(__dirname + '/../agenda.html'));
});
router.get('/todo', function(req, res) {
    res.sendFile(path.join(__dirname + '/../todo.html'));
});
router.get('/timeline', function(req, res) {
    res.sendFile(path.join(__dirname + '/../timeline.html'));
});
router.get('/app', function(req, res) {
    res.sendFile(path.join(__dirname + `/../js/app.js`));
});
router.get('/nowuijs', function(req, res) {
    res.sendFile(path.join(__dirname + `/../js/now-ui-kit.min.js`));
});
router.get('/urlapp', function(req, res) {
    res.sendFile(path.join(__dirname + `/../js/urlapp.js`));
});
router.get('/output', function(req, res) {
    res.sendFile(path.join(__dirname + `/../servinfo/output.json`));
});

router.get('/BotLogoPNG', function(req, res) {
    res.sendFile(path.join(__dirname + `/../assets/BotLogo.png`));
});
router.get('/BotLogoSNG', function(req, res) {
    res.sendFile(path.join(__dirname + `/../assets/BotLogo.svg`));
});
router.get('/BotLogoWordSVG', function(req, res) {
    res.sendFile(path.join(__dirname + `/../assets/BotLogoWord.svg`));
});
router.get('/menuIcon', function(req, res) {
    res.sendFile(path.join(__dirname + `/../assets/menuIcon.svg`));
});
router.get('/wavy-blurple-by-nouridioSVG', function(req, res) {
    res.sendFile(path.join(__dirname + `/../assets/wavy-blurple-by-nouridio.svg`));
});
router.get('/wavy-dark-by-nouridioSVG', function(req, res) {
    res.sendFile(path.join(__dirname + `/../assets/wavy-dark-by-nouridio.svg`));
});
router.get('/wavy-light-by-nouridioSVG', function(req, res) {
    res.sendFile(path.join(__dirname + `/../assets/wavy-light-by-nouridio.svg`));
});
router.get('/wavy-purple-by-nouridioSVG', function(req, res) {
    res.sendFile(path.join(__dirname + `/../assets/wavy-purple-by-nouridio.svg`));
});






module.exports = router;