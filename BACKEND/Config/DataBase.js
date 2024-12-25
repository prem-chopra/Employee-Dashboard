const mongoose =require("mongoose")
require("dotenv").config()

exports.dbConnection = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>console.log("database is connected successfully"))
    .catch((err)=>console.log(err,"dikkat hogyi hai "))
}