//Error Handling class

class ErrorHandler  extends Error {          //ErrrorHandler is child class, Error is parent class
    constructor(message,statusCode){
        super(message);
        this.statusCode=statusCode
        Error.captureStackTrace(this,this.constructor)
    }

}

module.exports=ErrorHandler