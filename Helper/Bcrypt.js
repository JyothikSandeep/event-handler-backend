const bcrypt = require("bcrypt");

const hashpassword = async (value) => {
  console.log(value);
  const saltrounds = 10;
  const pass = await bcrypt.hash(value, saltrounds);
  // console.log(pass);
  return pass;
};
const Dehash = async (password1, password2) => {
  const val1 = bcrypt.compareSync(password1, password2);
  return val1;
};

module.exports = { hashpassword, Dehash };
