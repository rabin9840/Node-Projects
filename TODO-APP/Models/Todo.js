
const mongoose= require("mongoose");
const Joi= require("joi");
//const { boolean } = require("joi");

const TodoSchema= new mongoose.Schema({
    todo:{
        type: String,
        required: true,
        minlength: 5,
        trim:true

    },
});



module.exports= new mongoose.model("Todo", TodoSchema);
/*
const Todos= new mongoose.model("Todo",TodoSchema);

function validateTodo(task){
    const schema= Joi.object({
        todo: Joi.string().max(50).required(),

    })

    return schema.validate(task);
}

module.exports.Todos=Todos;
module.exports.validate=validateTodo;
*/
