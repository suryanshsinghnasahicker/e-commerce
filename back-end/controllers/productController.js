const product = require('../models/product')
const Product=require('../models/product')

//Create New product =>>>/api/v1/product/new
exports.newProduct=async(req,res,next)=>{
    // this will get data from body and create  a new product
    const product=await Product.create(req.body)

    res.status(201).json({
        success:true,
        product
    })
}


//get all products from=>api/v1/product
exports.getProducts= async(req,res,next)=>{

    const products=await Product.find();
    res.status(200).json({
        success:true,
        count:product.length,
        products
    })
}

//get single product detail => /api/v1/product/:id

exports.getsingleProduct=async(res,req,next)=>{
    const product=await Product.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            sucess:false,
            message:'no such product bruh'
        })
    }
    res.status(200)({
        sucess:true,
        product
    })
}