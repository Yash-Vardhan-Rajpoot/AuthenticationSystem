//express part
const express=require("express");
const router=express.Router();
// database
const {login,register}=require("../model/database");
router.get("/home",(req,res,next)=>{
    res.render("home");
})
router.post("/submit", async (req,res,next)=>{
    const{username,password,email,button}=req.body;
    if(button==="sign-up"){
        try{
           await register(username,password,email);
           res.redirect("/home"); 
        } catch(error){
        console.error('Error fetching data:', error);
        }
    }
    else if(button==='login'){
        try{
            const user=await login(username,password);
            if(user){
                res.send("login sucessfully");
            }
            else{
                res.status(401).send("Invalid email or password");
            }
        }catch(err){
            console.log("user not login sucessfully",err);
        }
    }
})
module.exports=router;