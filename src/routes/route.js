const express = require('express');
const welcome = require('../logger/logger')
const info = require('../util/helper')
const changeCase = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
  
    welcome.welcome()
    info.today()
    info.getBatchInfo()
    info.month()
    changeCase.trim()
    changeCase.uppercase()
    changeCase.lowercase()
    res.send('My first ever api!')
});

const _= require('lodash');

let  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let oddNumbers = [1,3,5,7,9,11,13,15,17,19]



router.get('/hello', function (req, res) {
  
    console.log(_.chunk(months,3))
    console.log(_.tail(oddNumbers))
    console.log(_.union([1, 2, 3],[3, 4, 5],[6, 2, 7],[3,4,10],[8,1,9]))
    console.log( _.fromPairs([['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]))
    res.send('My Second api!')
});

module.exports = router;