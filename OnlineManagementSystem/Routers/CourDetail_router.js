const route = require("express").Router()

const CourDetail_controller = require("../Controllers/CourDetail_controller")


route.post("/save",CourDetail_controller.save)
route.get("/getall",CourDetail_controller.getAll)
route.get("/getById/:id",CourDetail_controller.getById)
route.get("/getByName",CourDetail_controller.getByName)
route.put("/update/:id", CourDetail_controller.update)
route.delete("/delete/:id",CourDetail_controller.delete)

               
module.exports = route  
