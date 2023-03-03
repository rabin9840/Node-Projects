const express= require("express");
const dotenv= require("dotenv");
const morgan= require("morgan");
const bodyparser= require("body-parser");
const path= require("path");

const connectDB= require("./server/database/connection")

const app= express();

const route= require("./server/routes/router");

dotenv.config({path: 'config.env'});    // set the path to the config

const port= process.env.PORT|| 8080;

// LOG REQUESTS
app.use(morgan("tiny"));

// MONGODB CONNECTION
connectDB();

// PARSE REQUEST TO BODY-PARSER
app.use(bodyparser.urlencoded({extended: true}));

// SET VIEW ENGINE
app.set("view engine","ejs");
// if all the ejs files is in seperate folder ejs inside views folder then
// app.set("views", path.resolve(__dirname, "views/ejs"));

// LOAD ASSETS
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
// css/style.css for style.css file inside css folder
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

// LOAD ROUTERS
app.use("/",require("./server/routes/router"));
//app.use("/",route);


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})

