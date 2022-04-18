const batchModel = require("../models/batchModel")
const developerModel= require("../models/developerModel")


const batches= async function (req, res) {
    let batch = req.body
    let batchCreated = await batchModel.create(batch)
    res.send({data: batchCreated})
}

const developers= async function (req, res) {
    let developer = req.body
    let developerCreated = await developerModel.create(developer)
    res.send({data: developerCreated})
}

const scholarshipDevelopers = async function (req, res) {
    let specificDevelopers = await developerModel.find({gender:"female" , percentage:{$gte: 70}}) 
    res.send({data: specificDevelopers})
    
//({gender:"female" , percentage:{$gte: 70}})
}


const findDevelopers = async function (req, res) {
    let find = await batchModel.findOne({name: req.query.name},{_id: 1});
    let developers = await developerModel.find({percentage: {$gte: req.query.percentage}, batch: find._id}).populate('batch')
    res.send({data: developers})

}

module.exports.batches= batches
module.exports.developers= developers
module.exports.scholarshipDevelopers = scholarshipDevelopers
module.exports.findDevelopers = findDevelopers