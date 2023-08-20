const route = require("express").Router()

const Instructors_controller = require("../Controllers/Instructors_controller")


route.post("/save",Instructors_controller.save)
route.get("/getall",Instructors_controller.getAll)
route.get("/getById/:id",Instructors_controller.getById)
route.get("/getByName",Instructors_controller.getByName)
route.put("/update/:id", Instructors_controller.update)
route.delete("/delete/:id",Instructors_controller.delete)

               
module.exports = route  
