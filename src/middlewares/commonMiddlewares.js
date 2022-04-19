
const firstApi= function ( req, res) {
    res.send("My first ever api!")
}


const secondApi= function ( req, res) {
    res.send("My second api!")
}


const thirdApi= function ( req, res) {
    res.send("My third api!")
}



module.exports.firstApi=firstApi
module.exports.secondApi= secondApi
module.exports.thirdApi= thirdApi
