const User = require("../model/user");
const bcrypt = require("bcrypt");
const localStrategy = require("passport-local").Strategy;

const localStrat = new localStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
    if (err) throw err;
    if (!user) {
      console.log("User doesnt exist");
      return done(null, false);
    }
    bcrypt.compare(password, user.password, (err, result) => {
      if (result === true) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  });
});

module.exports = localStrat;
