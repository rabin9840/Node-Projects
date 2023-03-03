const express= require("express");
var accounts = require("./database");
const route= express.Router();

// GET request
route.get("/accounts",(req,res)=>{
    res.json({userData: accounts});
    
})

// POST method
route.post("/accounts",(req,res)=>{
    
    const incomingAccouts= req.body;
    accounts.push(incomingAccouts);
    console.log(incommingAccounts);
    console.log(accounts);
    res.json(accounts);
})

route.get("/accounts/:id",(req,res)=>{
    const accountid= Number(req.params.id);
    const getAccount= accounts.find((account)=>account.id===accountid);

    if(!getAccount){
        res.status(500).send("Account Not Found");
    }
    else{
        res.json({userData:[getAccount]});
    }
});

route.put("accounts/:id",(req,res)=>{
    const accountid= Number(req.params.id);
    const body= req.body;
    const account= accounts.find((account)=>account.id===accountid);
    const index= accounts.indexOf(account);

    if(!account){
        res.status(500).send("Account Not Found");
    }
    else{
        const updatedAccount= {...account, ...body};
        //console.log({account,body});
        accounts[index]=updatedAccount;
        res.send(updatedAccount);
    }
})

route.delete("/accounts/:id",(req,res)=>{
    const accountid= Number(req.params.id);
    const newAccounts= accounts.filter((account)=>account.id!=accountid)
    if(!newAccounts){
        res.status(500).send("account not found");
    }
    else{
        accounts=newAccounts;
        res.send(accounts);
    }
})

module.exports=route;