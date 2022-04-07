const express = require('express');
// const logger = require('./logger')

const router = express.Router();

// ==>Solution 1



router.get('/movies', function(req, res) {
    let movies= ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']  
    res.send(movies)
});

// ==>Solution 2 & 3

router.get('/movies/:indexNumber', function(req, res) {
let movies= ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']  

let abc = req.params.indexNumber

   for (let index = 0; index < movies.length; index++) {
    if (abc < ((movies.length))) {
        res.send(movies[abc]) 
       }
         else{
        res.send("Please use a valid index") 
       }
   }
});

// ==>Solution 4

router.get('/films', function(req, res) {
    let movies= [ {
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Nemo'
       }]  
    res.send(movies)
});

// ==>Solution 5

router.get('/films/:filmId', function(req, res) {
    let movies= [ {
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Nemo'
       }]  

    let xyz = req.params.filmId

    for (let index = 0; index < movies.length; index++) {
        if (xyz < ((movies.length))) {
            res.send(movies[xyz].name) 
           }
             else{
            res.send("No movie exists with this id") 
        }
    }
});



module.exports = router;
// adding this comment for no reason