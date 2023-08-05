const dotenv=require('dotenv')
const app=require('./app')
const connectDatabase=require('./config/database')

//setting up env config
dotenv.config({path:'back-end/config/config.env'})

//connecting to databser
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Server started on PORT :${process.env.PORT}  ${process.env.NODE_ENV}and it is running in ${process.env.NODE_ENV} mode`)
})