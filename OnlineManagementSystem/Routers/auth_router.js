const route = require("express").Router()

const auth_controller = require("../Controllers/auth_controller")

  

route.post("/login",auth_controller.login)
route.post("/refreshToken", auth_controller.RefreshToken)
route.post("/logout", auth_controller.logout)

module.exports = route 