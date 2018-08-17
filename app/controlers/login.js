const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const secret = require("../../config").secret;

const getConnection = require("../config/database");

module.exports = function(req, res) {
  console.log("Body: ", req.body.email);

  getConnection(function(err, db) {
    if (err) {
      throw err;
    } else {
      var Users = db.collection("users");

      Users.findOne({ email: req.body.email }, function(err, user) {
        console.log("User: ", user);
        db.close();
        if (err) {
          console.log("Error: ", err);
          throw err;
        } else {
          if (!user) {
            res.json({ message: "User not found!" });
          } else if (!bcrypt.compareSync(req.body.password, user.password)) {
            res.json({ message: "Wrong password" });
          } else {
            console.log("user", user);
            const token = jwt.sign(user, secret, {
              expiresIn: 1440
            });

            res.json({
              success: true,
              data: [{ username: user.username, token: token }],
              message: "Login sucessfull"
            });
          }
        }
      });
    }
  });
};
