const express=require('express')
const app=express();
const errorMiddleware=require('./middlewares/errors')


app.use(express.json())

//import all routes
const products=require('./routes/product')
app.use('/api/v1',products)

//Middle ware to handle errrors
app.use(errorMiddleware)

module.exports=app 