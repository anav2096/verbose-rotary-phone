const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(__Hello);
    res.sendFile(path.join());
});

router.get('/apiRoutes', (req, res) => {
    res.sendFile(path.join());
});

router.get('/htmlRoutes', (req, res) => {
    res.sendFile(path.join());
});

router.get('*', (req, res) => {
    res.sendFile(path.join());
});

module.exports = router;