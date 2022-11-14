//Basic requires
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
require("./model-connection/connection")
const Member = require("./model-connection/member")
const cors = require("cors")
const bcrypt = require("bcrypt")

// Middlewares
app.use(express.json())
app.use(cors());

// Writing Api's

// Register Api
app.post("/register", async (req,res)=>{
    try{
            // console.log(req.body)
            const {email,password,cnfpassword} = req.body;
            const checkduplicate = await Member.findOne({email:email});
            // console.log(checkduplicate)
            if(checkduplicate){
                return res.json({status:"failed to register Email issue",message:"Email already exists"})
            }
            if(password==cnfpassword){
            //  Password hashing 
            let salt = await bcrypt.genSalt(10)
            let hashed_password= await bcrypt.hash(password,salt)
            // console.log(hashed_password);

            //creating and saving new user in database 
            const newMember = await Member.create({
            email:email,
            password:hashed_password
            })
            return res.json({status:"Registered successfully"})
            }  
            else{
                return res.json({status:"Confirm-password must match Password"})  
            } 
        }
        catch(e){
                    res.json({status:"failed to resgister",message:e.message})
                }
})



// Login Api

app.post("/login",async (req,res)=>{
    try{
    const {email,password}=req.body;
    // console.log(email,password)
    const findMember = await Member.findOne({email:email})
    // console.log(findMember);
    if(!findMember){
        return res.json({status:"Failed to login User does not exist", message:"Kindly Register First"});
    }
    const isMatch = await bcrypt.compare(password,findMember.password)
    if(isMatch==true){
        // Generating Token
        const token =  await findMember.generateAuthToken();
         res.json({status:"Logged Inn Succesfully",token:token,user_email:findMember.email})
    }else{
        res.json({status:"Failed to login", message:"Password not matching"})
    }
    }catch(e){
        res.json({status:"Failed to Login server error", message:e.message})
    }
})

// Listening to server
app.listen(port,()=>{console.log("Server is up at 8080")})