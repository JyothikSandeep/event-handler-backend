const express=require('express')
const loginrouter=express.Router()
const {LoginController}=require('../Controllers/LoginController')


loginrouter.post("/login",LoginController)

module.exports={loginrouter}