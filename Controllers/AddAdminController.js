const  {AdminModel}=require('../model/Addadmin')
const AdminController=async(req,res)=>{

    await AdminModel.insertMany({});

res.send("success");

}
module.exports={AdminController}