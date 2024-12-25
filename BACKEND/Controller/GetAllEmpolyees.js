const Employees = require("../Model/EmployeeSch")

exports.GetAllEmployees = async (req,res)=>{
    try {
        const employee = await Employees.find({})
        res.status(201).json({
            message:"Employee data get successfully",
            employee,
            success:true
        })
    } catch (error) {
        res.status(501).json({
            message:error.message+" doesn't get  employee data",
            success:false
        })  
    }
}



// get single data

exports.GetSingleData = async (req,res) => {
    try{
        const id = req.params.id
        const singleData = await Employees.findOne({_id:id})
        if(!singleData){
            return res.status(404).json({
                message:"Employee data not found",
                success:false
            })
        }
        res.status(201).json({
            message:"Employee data get successfully",
            singleData,
            success:true
        })
    }
    catch(error){
        res.status(501).json({
            message:error.message+" doesn't get employee data",
            success:false
            })
    }
}