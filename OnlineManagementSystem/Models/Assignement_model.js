const mongoose = require("mongoose")



const AssignementSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true,
       
    },
     ref :{
        type:String,
        required:true
    },  
})




module.exports = mongoose.model("Assignements",AssignementSchema)