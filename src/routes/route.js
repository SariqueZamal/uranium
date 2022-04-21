const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const authMiddleware= require("../middleware/auth")

router.post("/createUser", userController.createUser)

router.post("/loginUser", userController.loginUser)

router.get("/getUserData/:userId",authMiddleware.authentication, userController.getUserData)

router.put("/updateUser/:userId",authMiddleware.authentication, userController.updateUser)

router.delete("/deletedUser/:userId",authMiddleware.authentication, userController.deletedUser)

module.exports = router;