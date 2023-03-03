
const express= require("express");
const app= express();
const cookies= require("cookie-parser");


const PORT= process.env.PORT || 3000
app.use(cookies());

let users={
    name:"John",
    age: 28
}

//homepage
app.get('/',(req,res)=>{
    res.send("Cookies Example");
});

app.get("/setuser",(req,res)=>{
    res.cookie("userData",users);
    res.send("user data added to cookies.");

});

app.get("/getUser",(req,res)=>{
    res.send(req.cookies);
});

app.get("/logout",(req,res)=>{
    res.clearCookie("userData");
    res.send("user log out successful");
})

app.listen(PORT,()=>{
    console.log(`Listening to requests on http://localhost:${PORT}`);
});