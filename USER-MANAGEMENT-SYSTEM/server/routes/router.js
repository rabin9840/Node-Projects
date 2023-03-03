const express= require('express');
const route=express.Router();
const services= require("../services/render");
const controller= require("../controller/controller")

/*
route.get("/",(req,res)=>{
    //res.send("User Management System");
    res.render("index");
})

route.get("/add-user",(req,res)=>{
    //res.send("User Management System");
    res.render("add_user");
})

route.get("/update-user",(req,res)=>{
    //res.send("User Management System");
    res.render("update_user");
})

*/


/**
 * @description Root Route
 * @method GET
 */
route.get("/",services.homeRoutes);


/**
 * @description add users
 * @method GET /add-user
 */
route.get("/add-user",services.add_user);

/**
 * @description Root Route
 * @method GET  /update-users
 */
route.get("/update-user",services.update_user);

// API
route.post("/api/users",controller.create);
route.get("/api/users",controller.find);
route.put("/api/users/:id",controller.update);
route.delete("/api/users/:id",controller.delete);

module.exports=route;