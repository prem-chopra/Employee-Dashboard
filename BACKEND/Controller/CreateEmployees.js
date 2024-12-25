const Employees = require("../Model/EmployeeSch")

exports.CreateEmployees = async (req,res)=>{
    try {
        const {name,emp_id,designation,department,phone} = req.body;
        const employee = await Employees.create({name,emp_id,designation,department,phone,
            avatar:`https://api.dicebear.com/9.x/adventurer/svg?seed=${name}&flip=true`
        })
        res.status(201).json({
            message:"Employee created successfully",
            employee,
            success:true
        })
    } catch (error) {
        res.status(501).json({
            message:error.message+"Error creating employee",
            success:false
        })  
    }
}