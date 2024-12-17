const { User } = require("../model/AddUser");
const { Dehash,hashpassword
 } = require("../Helper/Bcrypt");
const UpdatePassword = async (req, res) => {
  const data = await User.findOne({ user_id: req.body.user_id });
  const result = await Dehash(req.body.data.current_password,data.password);

  if(result){
    const haspass= await hashpassword(req.body.data.new_password);
    console.log(haspass);
    await User.findOneAndUpdate({user_id:req.body.user_id},{password:haspass,initial_password:false})
    res.status(200).send("password updated successful");
  }
  else{
    res.status(401).send("incorrect current password");
  }

  
//   console.log(data);
//   console.log(req.body);
//   console.log(result);
//   res.send("hi");
};

module.exports = { UpdatePassword };
