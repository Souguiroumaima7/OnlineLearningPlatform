const express = require("express")
const cors = require("cors")
const app = express()
const database = require("./Config/database")
const dotenv = require("dotenv").config()


app.use(express.json())
app.use(cors())

const PORT = process.env.PORT


const auth_router = require("./Routers/auth_router")
const admin_router = require("./Routers/admin_router")
const cour_router = require("./Routers/Cour_router") 
const CourList_router = require("./Routers/CourList_router") 
const CourDetail_router = require("./Routers/CourDetail_router") 
const Instuctor_router = require("./Routers/Instuctor_router") 
const Lesson_router = require("./Routers/Lesson_router")  



app.use ("/auth",auth_router)
app.use("/admin",admin_router)
app.use("/cours", cour_router)
app.use("/CourList", CourList_router)
app.use("/CourDetail", CourDetail_router) 
app.use("/Instuctors", Instuctor_router) 
app.use("/Lesson", Lesson_router) 




     
app.listen(PORT,()=>{
console.log(`server working good on http://localhost:${PORT}`)
})

       