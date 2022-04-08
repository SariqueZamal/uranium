const express = require('express');


const router = express.Router();

router.get('/question1', function(req, res) {
    let arr= [1,2,3,5,6,7,8,9]
 
   let sum = 0;
  for (let i = 0; i < arr.length; i++) {
     sum += arr[i]; 
  }
   let missingNumber= (((arr.length+1) * (arr.length+2)) / 2) - sum
 
   res.send(  { "The Number is": missingNumber  }  );
})

router.get('/question2', function (req, res) {
    let arr= [13,14,15,17,18,19]

    let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i]; 
   }
    let missingNumber= (arr.length+1) * ((arr[0])+(arr[arr.length-1])) / 2 - sum
  
    res.send(  { "The Number is": missingNumber  }  );
});




module.exports = router;
// adding this comment for no reason