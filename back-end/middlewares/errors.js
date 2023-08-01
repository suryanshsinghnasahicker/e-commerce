const ErrrorHandler=require('../utils/errorHandler')

module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode || 500;     //statis code error or internal server error 
   
    if(process.env.NODE_ENV==='DEVELOPMENT'){
        res.status(err.statusCode).json({
            success:false,
            error:err,
            errMessage:err.message,
            stack:err.stack 
        })
    }
    if(proccess.env.NODE_ENV==='PRODUCTION'){
        let error={...err}
        error.message=err.message 
        res.status(error.statusCode).json({
            success:false,
           message:error.message || "INTERNAL SERVER ERROR"
        })
    }

   
}