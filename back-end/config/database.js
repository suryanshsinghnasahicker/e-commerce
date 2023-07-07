const mongoose=require("mongoose")

//setting up dotenv 

console.log("test meeeeeeeeeeee"+process.env.PORT)
console.log("hello"+process.env.DB_LOCAL_URL)
const connectDatabase=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/mernshop",{
        useNewUrlParser:true,
        useUnifiedTopology:true 
    }).then(con=>{
        console.log(`mongoose databse has been sucessfully connected to Host ${con.connection.host }`)
    })
}
module.exports=connectDatabase;