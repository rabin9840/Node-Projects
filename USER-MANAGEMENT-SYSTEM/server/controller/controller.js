var UserDb= require("../model/model");

// CREATE AND SAVE NEW USER

exports.create= (req,res)=>{
    // VALIDATE USER
    if(!req.body){
        res.status(400).send({message:"Content cannot be empty!"});
        return;
    }

    // NEW USER
    const user= new UserDb({
        name:req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });

    // SAVE USER IN DATABASE
    user
        .save(user)
        .then(data=>{
            //res.send(data)
            res.redirect("/add-user")
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Some Error Occured!"});
        });
}

// RETRIEVE AND RETURN ALL USERS // OR SINGLE USER

exports.find=(req,res)=>{
    if(req.query.id){
        const id= req.query.id;
        UserDb.findById(id)
            .then(data=>{
                if(!data){
                    res.status(404)
                    .send({message: "Not found user with id: "+id})
                }
                else{
                    res.send(data);
                }
            })
            .catch(err=>{
                res.status(500).send({message:"Error retreiving user with id: "+id});
            })

    }
    else{
    UserDb.find()
    .then(user=>{
        res.send(user);
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "Error occured while fetching data!"});
    });
}

}

//UPDATE A NEW IDETIFIED USER BY USER ID
exports.update= (req,res)=>{
    if(!req.body){
        return res
                .status(400)
                .send({message: "Data update cannot be empty"});
    }
    const id= req.params.id;

    UserDb.findByIdAndUpdate(id,req.body,{userFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(400).send({message: `Cannot update user with ${id} Maybe user not found`})
        }
        else{
            res.send(data);
        }
    })
    .catch(err=>{
        res.status(500).send({message: "Error Update User Information"});
    });

}

// DELETE A USER WITH SPECIFIED USER ID IN THE REQUEST
exports.delete=(req,res)=>{
    const id= req.params.id;

    UserDb.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Cannot Delete"});
            }
            else{
                res.send({
                    message:"User Was deleted successfully"
                });
            }
        })

        .catch(err=>{
            res.status(500).send({
                message: "Could not delete user with id: "+ id
            })
        })


}