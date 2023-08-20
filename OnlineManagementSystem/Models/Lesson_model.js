const mongoose = require("mongoose")



const LessonSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    ref:{
        type:String,
        required:true,
       
    },
     description :{
        type:String,
        required:true
    },
     details :{
        type:String,
        required:true
    }, 
})


module.exports = mongoose.model("Lessons",LessonSchema)