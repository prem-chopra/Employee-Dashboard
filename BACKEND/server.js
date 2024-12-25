const express  = require("express")
const app = express()
const cors = require("cors")

require("dotenv").config()
const PORT = process.env.PORT || 4000

// middle ware
app.use(express.json())

// cors configuration
app.use(
    cors({
        origin:"*",
    })
)

// route mount 

const employeeRoute = require("./Routes/Route")
 
app.use("/api/v1",employeeRoute)

const {dbConnection}=require("./Config/DataBase")
dbConnection()


//server activate
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

