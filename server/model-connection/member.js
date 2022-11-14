// Creating userSchema to store User login details when he registers

const mongoose = require("mongoose");
const SECRET_KEY = "mynameisshubhammohanmohite";
const jwt = require("jsonwebtoken")

const memberSchema = new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
});
// Logic for generating Token.
memberSchema.methods.generateAuthToken = async function (){
    try{
        const token = jwt.sign({_id:this._id},SECRET_KEY,{expiresIn:"1d"})
        return token;
    }
    catch(e){
        console.log(e.message);
    }
}
const Member = new mongoose.model("Member",memberSchema);
module.exports = Member;