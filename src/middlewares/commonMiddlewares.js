

const headerValidation = function ( req, res, next) {

    let data= req.headers
    if(data.isfreeappuser) {
        if(data.isfreeappuser===true){
            req.isfreeappuser=true;
        }else{
            req.isfreeappuser=false; 
        }
        next()
    }else {
        res.send({msg: 'the request is missing a mandatory header'})
    }
}


module.exports.headerValidation = headerValidation 
