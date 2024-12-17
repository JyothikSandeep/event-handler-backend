const mongoose=require('mongoose');

const Admin=mongoose.Schema({
    user_id:{
        type:String,
        default:"admin"

    },
    password:{
        type:String,
        default:"Jyothik2308871"

    }
})

const AdminModel=new mongoose.model("Admin",Admin);

module.exports={AdminModel};