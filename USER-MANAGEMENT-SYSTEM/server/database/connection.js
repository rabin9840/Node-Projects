const mongoose=require("mongoose");

const conectDB= async ()=>{
    try{
        //mongodb connection string
        const con= await mongoose.connect(process.env.MONGO_URI,{
            // properties will stop unwanted warning in console
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModigy: false,
            useCreateIndex: true
        })
        console.log(`MongoDb Connected...:${con.connection.host}`);

    }
    catch(err){
        console.log(err);
        process.exit(1);

    }
}

module.exports= conectDB