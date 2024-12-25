const express = require("express")
const router = express.Router()

const {CreateEmployees} = require("../Controller/CreateEmployees")
const {GetAllEmployees, GetSingleData} =require("../Controller/GetAllEmpolyees")
const {DeleteEmployee} =require("../Controller/DeleteEmployee")
const {UpdatedEmployee} = require("../Controller/UpdateEmployee")


router.post("/create",CreateEmployees)
router.get("/getalldata",GetAllEmployees)
router.get("/getsingledata/:id",GetSingleData)
router.delete("/delete/:id",DeleteEmployee)
router.put("/update",UpdatedEmployee)


module.exports=router;