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
app.listen(5000, () => {
  connectDb();
  console.log("listening to server");
});
