const express = require('express');
const router = express.Router();

const allController= require("../controllers/allController")




router.post("/createAuthor", allController.createAuthor)

router.post("/createPublisher", allController.createPublisher)

router.post("/createBook", allController.createBook)

router.get("/getBooksWithAuthorAndPublisherDetails", allController.getBooksWithAuthorAndPublisherDetails)

router.put("/book", allController.book)

module.exports = router;