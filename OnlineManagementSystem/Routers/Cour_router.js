const route = require("express").Router()

const Cour_controller = require("../Controllers/Cour_controller")


route.post("/save",Cour_controller.save)
route.get("/getall",Cour_controller.getAll)
route.get("/getById/:id",Cour_controller.getById)
route.get("/getByName",Cour_controller.getByName)
route.put("/update/:id", Cour_controller.update)
route.delete("/delete/:id",Cour_controller.delete)

               
module.exports = route  
