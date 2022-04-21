const express = require('express');
const router = express.Router();


const allController= require("../controllers/allController")
const commonMW = require("../middlewares/commonMiddlewares")



router.post('/createProduct', allController.createProduct)
router.post('/createUser',commonMW.headerValidation, allController.createUser)
router.post('/createOrder',commonMW.headerValidation, allController.createOrder)




module.exports = router;