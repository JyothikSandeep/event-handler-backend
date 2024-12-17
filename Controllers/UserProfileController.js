const {User}=require("../model/AddUser")
const UserProfileController=async(req,res)=>{
    console.log(req.body)
    const data=await User.findOne({"user_id":req.body.user_id});
    res.send(data);
    

}

module.exports={UserProfileController}