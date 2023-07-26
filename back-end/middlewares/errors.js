const ErrrorHandler=require('../utils/errorHandler')

module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode||500;     //statis code error or internal server error 
    err.message||'internal server error'

    res.status(err.statusCode).json({
        success:false,
        error:err.stack
    })
}