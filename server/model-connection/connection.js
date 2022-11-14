// Connecting to Database via mongoose

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/schwetmann-api",{useNewUrlParser:true,useUnifiedTopology:true,family:4})
.then(()=>{console.log("connected to DB successfully")})
.catch((e)=>{console.log(e.message)})