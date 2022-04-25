const express = require('express');
const router = express.Router();
const Controller= require("../controllers/controller")



router.get("/vaccinationSessionsFindByDistrict", Controller.vaccinationSessionsFindByDistrict)

router.get("/SortedCities", Controller.SortedCities)

router.post("/memesCreation", Controller.memesCreation)



module.exports = router;