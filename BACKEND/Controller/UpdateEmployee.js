const Employees = require("../Model/EmployeeSch")

exports.UpdatedEmployee = async (req,res) => {
    try {
        const {name,emp_id,department,designation,phone,_id} = req.body
        const updatedEmployee = await Employees.findByIdAndUpdate({_id:_id},
        { name,emp_id,department,designation,phone } , {new:true})
        res.status(200).json({
            success : true,
            message : "Employee Updated Successfully",
            updatedEmployee
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message +"Error Occured While Updating Employee",
        })
    }
}