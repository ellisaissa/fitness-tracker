const router = require('express').Router();
const path = require('path');

//home
router.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//stats
router.get('/stats.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

//exercise
router.get('/exercise.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

module.exports = router;