require('dotenv').config(); // Load environment variables
const express = require("express");
const app = express();
const cors = require("cors");

const { connectDb } = require("./mongoDb/mongoConnect");
const { loginrouter } = require("./Routes/LoginRoute");
const { adminRouter } = require("./Routes/AdminRoutes");
const {userRouter}=require("./Routes/UserRoutes")
app.use(cors());
app.use(express.json());
app.use("/", loginrouter);
app.use("/admin", adminRouter); 
app.use("/user",userRouter)

app.get("/",(req,res)=>{
  res.send("hello world!")
})
app.listen(process.env.PORT, () => {
  connectDb();
  console.log("listening to server");
});
