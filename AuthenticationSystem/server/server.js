//express part
const express=require("express");
const server=express();
server.use(express.urlencoded({extended:true}));
server.use(express.json());
//path
const path=require("path");
//ejs part
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, '../views'));
//router
const userrouter=require("../Handler/user");
server.use("/",userrouter);
const port=3001;
server.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})