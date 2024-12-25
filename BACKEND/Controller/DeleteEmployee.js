const Employees = require("../Model/EmployeeSch")

exports.DeleteEmployee = async(req,res) =>{
    try {
        const {id} = req.params     
        const delEmployee = await Employees.findByIdAndDelete(id);
        if(!delEmployee){
            return res.status(404).json({mesaage:"Employee not found"})
        }
        return res.status(200).json({
            success:true,
            message:"Employee deleted successfully",
            data:delEmployee
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}