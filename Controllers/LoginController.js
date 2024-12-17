const { User } = require("../model/AddUser");
const { AdminModel } = require("../model/Addadmin");
const { Dehash } = require("../Helper/Bcrypt");
const LoginController = async (req, res) => {
  const data = req.body;
  console.log(req.body);
  const adminCheck = await AdminModel.findOne({ user_id: data.username });
  const dbdata = await User.findOne({ user_id: data.username });
console.log(adminCheck)
  console.log(dbdata);
  let value;
  if (dbdata) {
    value = await Dehash(req.body.password, dbdata.password);
  }
  if (!dbdata && !adminCheck) {
    res.send("Invalid user Id");
  } else if (adminCheck && adminCheck.password === data.password) {
    res.send(adminCheck);
  } else if (value) {
    res.send(dbdata);
  } else {
    res.send("Wrong crediantials");
  }
};

module.exports = { LoginController };
