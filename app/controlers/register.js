const getConnection = require("../config/database");

const bcrypt = require("bcryptjs");

const saltRounds = 10;

const validateEmail = require("../functions").validateEmail;

const ObjectId = require("mongodb").ObjectID;

module.exports = function(req, res) {
  var email = req.body.email || "";
  var password = req.body.password || "";
  var firstName = req.body.firstName || "";
  var lastName = req.body.lastName || "";
  var address = req.body.address || "";
  var phone = req.body.phone || "";

  if (email && !validateEmail(email)) {
    res.json({ message: "Please insert a valid email" });
  } else if (password.length < 6) {
    res.json({ message: "Password must have atleast 6 digits" });
  } else {
    var passwordHash = bcrypt.hashSync(password, saltRounds);

    var id = new ObjectId().toString();

    var User = {
      _id: id,
      email: email,
      password: passwordHash,
      address: address,
      profile: {
        firstName: firstName,
        lastName: lastName
      },
      role: req.body.role || "user"
    };

    getConnection(function(err, db) {
      if (err) {
        throw err;
      } else {
        var Users = db.collection("users");

        Users.findOne({ email: User.email }, function(err, user) {
          if (user) {
            res.json("Email already exits!");
          } else {
            Users.insertOne(User, function(err, result) {
              db.close();
              if (err) {
                throw err;
                res.json(err);
              } else {
                res.json({ message: "Successfully resgister!" });
              }
            });
          }
        });
      }
    });
  }
};
