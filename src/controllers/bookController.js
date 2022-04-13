const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {

    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {

    let allBooks= await BookModel.find( ).select({bookName: 1, authorName: 1, _id: 0})
    res.send({msg: allBooks})
}

const getBooksInYear= async function (req, res) {

    let data= req.body.year
    
    let allBooksInTheYear= await BookModel.find({ year: { $eq: data}})
    res.send({msg: allBooksInTheYear})
}

const getParticularBooks= async function (req, res) {

    let data= req.body
    let particularBooks = await BookModel.find(data)

    res.send({msg: particularBooks})
}

const getINRBooks= async function (req, res) {

    // let allXINRBooks= await BookModel.find({ $or: [{'price.indianPrice': { $in:"100INR"}} ,{'price.indianPrice':{$in:"200INR"}},
    // {'price.indianPrice':{$in:"500INR"}} ]  } )

    let allXINRBooks= await BookModel.find( { 'price.indianPrice' : { $in: [ '100INR' , '200INR', '500INR' ]  }} )
    
    res.send({msg: allXINRBooks})
}

const getRandomBooks= async function (req, res) {

    let randomBooks= await BookModel.find({ $or:[{stockAvailable :{ $eq:true}},{totalPages:{ $gt:500 }} ] })
    res.send({msg: randomBooks})
}

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks
module.exports.getINRBooks= getINRBooks
module.exports.getRandomBooks= getRandomBooks
