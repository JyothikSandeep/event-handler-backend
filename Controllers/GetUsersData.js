// const mongoose=require('mongoose')
const {User}=require('../model/AddUser')
const GetUsersData=async(req,res)=>{
    const data= await User.find({});
    console.log(data)
    res.send(data);
}
module.exports={GetUsersData}