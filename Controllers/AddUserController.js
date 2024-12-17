const { User } = require("../model/AddUser");
const { hashpassword, Dehash } = require("../Helper/Bcrypt");
const AddUserController = async(req, res) => {
  console.log(req.body);
  let data = req.body;
  const pass = await hashpassword(data.user_id);

  data = { ...data, ['password']: pass };
  // Dehash();
  console.log(data);
  User.insertMany(data);
  res.send("Add user");
};

module.exports = { AddUserController };
