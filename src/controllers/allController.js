const NewAuthorModel = require("../models/newAuthor")
const NewBookModel= require("../models/newBook")
const NewPublisherModel= require("../models/newPublisher")

const mongoose = require('mongoose');
const { updateMany } = require("../models/newAuthor");
const ObjectId = mongoose.Types.ObjectId

//---------------------------------------------------- SOLUTION NO 1 -------------------------------------------------------------------//


const createAuthor= async function (req, res) {

    let data = req.body
    let authorCreated = await NewAuthorModel.create(data)
    res.send({data: authorCreated})
}

//---------------------------------------------------- SOLUTION NO 2 -------------------------------------------------------------------//


const createPublisher= async function (req, res) {

    let data = req.body
    let publisherCreated = await NewPublisherModel.create(data)
    res.send({data: publisherCreated})
   
}

//---------------------------------------------------- SOLUTION NO 3 -------------------------------------------------------------------//


const createBook= async function (req, res) {

    let data = req.body

    if(!data.author) {
        res.send({msg: 'author_id is required'})

  } else if (!data.publisher) {
        res.send({msg: 'publisher_id is required'})

  } else if(!ObjectId.isValid(data.author)){
    res.send({msg: 'the author is not present'})

  } else if(!ObjectId.isValid(data.publisher)) {
    res.send({msg: 'the publisher  is not present'})

  }else{
    let bookCreated = await NewBookModel.create(data)
    res.send({data: bookCreated})
  }
}

//---------------------------------------------------- SOLUTION NO 4 -------------------------------------------------------------------//


const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
    let specificBook = await NewBookModel.find().populate(['author','publisher'])
    res.send({data: specificBook})

}

//---------------------------------------------------- SOLUTION NO 5 ----------------------------------------------------------------------//

const book= async function (req, res) {

  let attributeCreated = await NewBookModel.updateMany({publisher: {$in: ["62599fc2c08720447d0f8953","625b0a15d674b939753a61dc"]}},
  {$set: {isHardCover : true}});

  let update = await NewAuthorModel.find({rating: {$gt: 3.5}}).select({_id: 1})

  for (let i=0; i<update.length;i++) {

   updatedPrice= await NewBookModel.updateMany({author: update[i]._id}, {$inc: {price: 10}})
  }
  res.send({data: attributeCreated , updatedPrice})
}










module.exports.createAuthor= createAuthor
module.exports.createPublisher= createPublisher
module.exports.createBook= createBook
module.exports.getBooksWithAuthorAndPublisherDetails = getBooksWithAuthorAndPublisherDetails
module.exports.book= book