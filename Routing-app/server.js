const express= require("express");
const app= express();
const bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));

const route= require('./router');

const port= 3000;

app.use("/api",route);

// HOME ROUTE
app.get("/",(req,res)=>{
    res.end("Routing App");
});

app.listen(port,()=>{
    console.log(`Listening to port: ${port}`);
})