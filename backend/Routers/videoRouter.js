// to perform database operations on the user data
const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
    res.send('Response from video add');
})

module.exports = router;