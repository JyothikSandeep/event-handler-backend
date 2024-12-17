const express=require('express');
const userRouter=express.Router()
const {GetUpcomingController}=require('../Controllers/GetUpcomingController')
const {UpdatePassword}=require("../Controllers/UpdatePasswordController")
const {UserProfileController}=require("../Controllers/UserProfileController")
userRouter.get("/getupcomingevents",GetUpcomingController);
userRouter.post("/updatepassword",UpdatePassword)
userRouter.post("/userprofiledata",UserProfileController)
module.exports={userRouter}
