const req = require("express/lib/request")

const userModel= require("../models/userModel")
const productModel= require("../models/productModel")
const orderModel= require("../models/orderModel")

const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId


const createProduct= async function (req, res) {

    let data= req.body

    let productCreated= await productModel.create(data)
    res.send({data: productCreated})
}


const createUser= async function (req, res) {

    let data= req.body

    let userCreated= await userModel.create(data)
    res.send({data: userCreated}) 
}


const createOrder= async function (req, res) {

    let data= req.body

    if(!ObjectId.isValid(data.userId)){
        res.send({data: 'the user is not valid'})
    
      } else if(!ObjectId.isValid(data.productId)) {
        res.send({data: 'the product is not exist'})
    
      }else{
        let header= req.headers;
            if(header.isfreeappuser==="true"){
                let orderdata= {
                    userId: data.userId,
                    productId: data.productId,
                    amount: 0,
                    isFreeAppUser: true,
                    date: data.date
                }
                let orderCreated= await orderModel.create(orderdata)
                  res.send({data: orderCreated})
            }
            else{

            let userBalance = await userModel.findOne({_id: data.userId})  
            let productPrice = await productModel.findOne({_id: data.productId}) 

            if(userBalance.balance<productPrice.price){
                res.send({data: "the user doesn't have enough balance"})
            }
            else{
                let updatedUserBalance = await userModel.findOneAndUpdate({_id: data.userId},{$inc:{ balance: -(productPrice.price)}});
                
                let orderdata= {
                    userId: data.userId,
                    productId: data.productId,
                    amount: productPrice.price,
                    isFreeAppUser: false,
                    date: data.date
                }
                let orderCreated= await orderModel.create(orderdata)
                  res.send({data: orderCreated, updatedUserBalance})
            } 
        }

      }

}


module.exports.createProduct = createProduct
module.exports.createUser = createUser
module.exports.createOrder = createOrder