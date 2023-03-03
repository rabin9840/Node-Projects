const router= require('express').Router();
const Todo= require("../Models/Todo");

// routes

router.post("/add/todo",(req,res)=>{
    const {todo}= req.body;
    console.log(todo);
    const newTodo= new Todo({todo});

    //save
    newTodo.save()
    .then(()=>{
        console.log("Successfully added.");
        res.redirect("/");

    })
    .catch((err)=>console.log(err));

    })

// delete
router.get("/delete/todo:_id",(req,res)=>{
    const {_id}=req.params;
    Todo.deleteOne({_id})
    .then(()=>{
        console.log("Delete Todo Successfull...");
        res.redirect("/");

    })
    .catch((err)=>console.log(err));

})


module.exports=router;