const express = require('express');
const router = express.Router();


const commonMW = require ("../middlewares/commonMiddlewares")



router.get("/firstApi", commonMW.firstApi)
router.get("/secondApi", commonMW.secondApi)
router.get("/thirdApi", commonMW.thirdApi)




module.exports = router;