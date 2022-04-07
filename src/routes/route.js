const express = require('express');
// const logger = require('./logger')

const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('------------------')
//     console.log(req)
//     console.log('------------------')
//     console.log('These are the request query parameters: ', req.query)
//     res.send('My first ever api!')
// });

const candidate = ["Jonh", "Mary","Kevin","harry",];
router.get('/all-candidates', function (req, res) {
    console.log(candidate)
    res.send(candidate)
});





module.exports = router;
// adding this comment for no reason