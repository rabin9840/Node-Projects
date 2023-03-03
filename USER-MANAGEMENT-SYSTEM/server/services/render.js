const axios= require("axios");

// here homeRoutes, add_user, update_user are the name of callback function

exports.homeRoutes= (req,res)=>{
    //Make a get request to /api/user
    axios.get("http://localhost:3000/api/users")
    .then(function(response){
        res.render("index",{users: response.data});
    })
    .catch(err=>{
        res.send(err);
    })
   // res.render("index",{users: "New Data"});        // here users is the variable to access in index.ejs file
}
   

exports.add_user=(req,res)=>{
    res.render("add_user");
}

exports.update_user=(req,res)=>{
    axios.get("http://localhost:3000/api/users",{params:{id:req.query.id}})
        .then(function(userdata){
            res.render("update_user",{user: userdata.data});
        })
        .catch(err=>{
            res.send(err);
        })
    //res.render("update_user");
}