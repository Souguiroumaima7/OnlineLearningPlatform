const route = require("express").Router()

const CourList_controller = require("../Controllers/CourList_controller")


route.post("/save",CourList_controller.save)
route.get("/getall",CourList_controller.getAll)
route.get("/getById/:id",CourList_controller.getById)
route.get("/getByName",CourList_controller.getByName)
route.put("/update/:id", CourList_controller.update)
route.delete("/delete/:id",CourList_controller.delete)

               
module.exports = route  
