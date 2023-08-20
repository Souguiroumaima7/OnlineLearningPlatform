const route = require("express").Router()

const Lesson_controller = require("../Controllers/Lesson_controller")



route.post("/save",Lesson_controller.save)
route.get("/getall",Lesson_controller.getAll)
route.get("/getById/:id",Lesson_controller.getById)
route.get("/getByName",Lesson_controller.getByName)
route.put("/update/:id", Lesson_controller.update)
route.delete("/delete/:id",Lesson_controller.delete)

               
module.exports = route  
