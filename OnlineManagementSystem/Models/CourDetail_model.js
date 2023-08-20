const mongoose = require("mongoose")



const CourDetailSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true,
       
    },
   
})






module.exports = mongoose.model("CoursDetails",CourDetailSchema)