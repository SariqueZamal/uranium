let trim = function(){
    let mystring = "functionUp "
    console.log(mystring.trim())
}

let lowercase = function(){
    let mystring = "functionUp "
    console.log(mystring.toLowerCase())
}

let uppercase = function(){
    let mystring = "functionUp "
    console.log(mystring.toUpperCase())
}

module.exports.trim = trim
module.exports.lowercase = lowercase
module.exports.uppercase = uppercase