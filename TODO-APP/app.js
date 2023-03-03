const express= require("express");
const mongoose= require("mongoose");

const app= express();


mongoose.connect("mongodb://localhost/todo_express",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const port=process.env.PORT|| 3000;


// middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

//routes
app.use(require("./Routes/index"));
app.use(require("./Routes/todo"));




//server configuration
app.listen(port, ()=>{
    console.log(`Listening to server port: ${port}`);
})