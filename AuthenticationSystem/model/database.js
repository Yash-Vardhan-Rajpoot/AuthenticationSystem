const mongoose=require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/database")
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err));;
const schema=mongoose.Schema({
    username:String,
    password:String,
    email:String,
});
const usermodel=mongoose.model("User_info",schema,"User_info");
async function register(username,password,email){
    try{
    return await usermodel.create({username,password,email});
    } catch(err){
        console.log("document is not created",err);
    }
}
async function login(username,password){
    return await usermodel.findOne({username,password});
}
module.exports={
    usermodel,login,register,
}