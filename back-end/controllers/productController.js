const product = require('../models/product')
const Product=require('../models/product')
const ErrorHandler=require('../utils/errorHandler')
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

exports.getsingleProduct=async(req,res,next)=>{
    const product=await Product.findById(req.params.id)
    if (!product){
        return next(new ErrorHandler('product not found',404));
    }
    res.status(200).json({
        sucess:true,
        product
    })
}

//UPdate product => /api/v1/product/:id
exports.updateProduct=async(req,res,next)=>{
    let product=await Product.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            success:false,
            message:'cant find the product'
        })
    }
        product=await Product.findByIdAndUpdate(req.params.id,req.body,req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:false
    });
    res.status(200).json({
        success:true,
        product
    })

}

//delete product=>/api/v1/admin/product/:id
exports.deleteProduct=async(req,res,next)=>{
    const product=await Product.findById(req.params.id)
    if(!product){
        return res.status(404).json({
            success:false,
            message:'cant find the product'
        })
    } 

    await product.deleteOne()

    res.status(200).json({
        success:true,
        message:'Product is deleted'
    })
}