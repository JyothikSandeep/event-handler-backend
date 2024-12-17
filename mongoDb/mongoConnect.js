const mongoose=require('mongoose');

const connectDb=async()=>{

    await mongoose.connect("mongodb://localhost:27017/testing").then(()=>{
        console.log("connected to database")
    }).catch((err)=>{
        console.log(err.message);

    });
    
}

module.exports={connectDb}