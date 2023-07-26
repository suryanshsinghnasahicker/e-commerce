//Error Handling class

class ErrorHandler  extends Error {          //ErrrorHandler is child class, Error is parent class
    constructer(message,statusCode){
        super(message);
        this.statusCode=statusCode

        Error.captureStackTrace(this,this.constructer)
    }

}

module.exports=ErrorHandler