const mongoose = require("mongoose")
const dotenv = require("dotenv").config()


const DB = process.env.URI

 const database = mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });



module.exports = database
  
