const bcrypt = require("bcrypt");
const salt = bcrypt.genSalt(10);

async function hashing(userPassword){
  password = bcrypt.hash(userPassword, salt);
  return password;
}
module.exports = hashing;