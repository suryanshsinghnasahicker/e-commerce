const app=require('./app')
const dotenv=require('dotenv')
const connectDatabase=require('./config/database')

//setting up env config
dotenv.config({path:'back-end/config/config.env'})

//connecting to databser
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Sever started on PORT :${process.env.PORT} and it is running in ${process.env.NODE_ENV} mode`)
})