const { count } = require("console")

const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")


const createBook= async function (req, res) {

    let data= req.body
    let bookData= await BookModel.create(data)
    res.send({msg: bookData})
}



const createAuthor= async function (req, res) {

    let data= req.body
    let authorData= await AuthorModel.create(data)
    res.send({msg: authorData})
}



const bookList= async function (req, res) {

    let details = await AuthorModel.findOne({ author_name:"Chetan Bhagat"})
    let allBooks = await BookModel.find({author_id:details.author_id}).select({bookName:1,_id:0})
    res.send({msg: allBooks})
}


const authorWithUpdatedPrice= async function (req, res) {

    let update= await BookModel.findOneAndUpdate({bookName:"Two states"},{$set:{price: 100}})
    
    let updatedPrice= await BookModel.find({bookName:"Two states"}).select({ price: 1, _id: 0})
    let authorName = await AuthorModel.find({author_id: update.author_id}).select({author_name: 1, _id: 0})
    res.send({msg: authorName,updatedPrice})
}



const findBook= async function (req, res) {

    let find= await BookModel.find({price:{$gte: 50, $lte: 100}}).select({author_id: 1, _id: 0})     
    let authorName=[];

   for (let index = 0; index < find.length; index++) {
    let x = await AuthorModel.find({author_id: find[index].author_id}).select({author_name: 1, _id: 0})
        authorName.push(x)
    }
            
       res.send({msg: authorName})
   }
    



module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.bookList= bookList
module.exports.authorWithUpdatedPrice= authorWithUpdatedPrice
module.exports.findBook= findBook
