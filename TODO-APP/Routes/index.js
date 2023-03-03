const Todo = require("../Models/Todo");

const router= require("express").Router();

// routes 
router.get("/",async (req,res)=>{
    const allTodo= await Todo.find();
    res.render("index",{todo: allTodo});
})


module.exports= router;