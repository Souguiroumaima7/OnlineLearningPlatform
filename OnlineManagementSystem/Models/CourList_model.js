const mongoose = require("mongoose")



const CourListSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true,
       
    },
     details :{
        type:String,
        required:true
    },  
})






module.exports = mongoose.model("CoursList",CourListSchema)