const mongoose = require("mongoose")



const InstuctorsSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true,
       
    },
     position :{
        type:String,
        required:true
    },  
})






module.exports = mongoose.model("Instuctors",InstuctorsSchema)