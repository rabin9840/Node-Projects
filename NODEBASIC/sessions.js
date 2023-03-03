
const express= require('express');
const app= express();
const session= require('express-session');

const PORT= process.env.PORT || 3000

app.use(session({
    secret:"Your secret key",
    resave: true,
    saveUninitialized: true
}));

app.get("/",(req,res)=>{
    //create session variable
    req.session.name="JOHN";

    return res.send("session set");
});

app.get("/session",(req,res)=>{
    var name= req.session.name;
    return res.send(name);
});

// Destroy the session
app.get("/destroy",(req,res)=>{
    req.session.destroy(function(err){
        console.log("Session Destroyed");
    });
    res.end();
})

app.listen(PORT,()=>{
    console.log(`Listening to requests on http://localhost:${PORT}`);
});
