const Product=require("../models/product")
const dotenv=require('dotenv')
const connectDatabase=require('../config/database')

const products=require("../data/product.json")

//setting up dotenv 
dotenv.config({path: "../cofig/config.env"})

//database 
connectDatabase();

//now seeder
const seedProducts=async ()=>{
    try{
            await Product.deleteMany();
            console.log('products are deleted')
            await Product.insertMany(products)
            console.log('product have been inserted')
            process.exit()
    }catch(error){
        console.log(error.message);
        process.exit()      //to exit from terminal/processs
    }
}

seedProducts()