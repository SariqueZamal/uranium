const express = require('express');
const router = express.Router();


const AbController= require("../controllers/abController")




router.post("/createBook", AbController.createBook)

router.post("/createAuthor", AbController.createAuthor)

router.get("/bookList", AbController.bookList)

router.get("/authorWithUpdatedPrice", AbController.authorWithUpdatedPrice)

router.get("/findBook", AbController.findBook)



module.exports = router;
