const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    emp_id:{
        type:String,
        required:true,
        trim:true,
    },
    designation:{
        type:String,
        required:true,
        trim:true
    },
    department:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
    }

})

module.exports =  mongoose.model("Employees",EmployeeSchema)