const user_model = require("./user_model")

const mongoose = require('mongoose')    



const AdminSchema = new mongoose.Schema({
     
})

const admins  = user_model.discriminator("admins",AdminSchema)      
  

module.exports = mongoose.model("admins") 