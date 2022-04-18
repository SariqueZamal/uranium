const express = require('express');
const router = express.Router();

const allController= require("../controllers/allController")



router.post("/batches", allController.batches)

router.post("/developers", allController.developers)

router.get("/scholarshipDevelopers", allController.scholarshipDevelopers)

router.get("/findDevelopers", allController.findDevelopers)

module.exports = router;