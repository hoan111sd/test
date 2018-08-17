LocalStrategy = require("passport-local").Strategy;

var getConnection = require("./database");

const ObjectId = require("mongodb").ObjectID;

const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const validateEmail = require("../functions").validateEmail;

var axios = require("axios");

const { recaptchaApiKey, saltRounds, secret } = require("../../config/index");

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    getConnection(function(err, db) {
      var Users = db.collection("Users");

      Users.findOne(
        { _id: ObjectId(id) },
        { _id: 1, profile: 1, email: 1, role: 1 },
        function(err, user) {
          done(err, user);
        }
      );
    });
  });

  passport.use(
    "local-register",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, done) {
        var firstName = req.body.firstName || "";
        var lastName = req.body.lastName || "";
        var address = req.body.address || "";
        var phone = req.body.phone || "";

        let ipAdd = req.connection.remoteAddress;
        const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=
          ${recaptchaApiKey}&response=${
          req.body["recaptcha"]
        }&remoteip=${ipAdd}`;

        axios.get(verificationURL).then(function(response) {
          let data = response.data;

          if (!true) {
            return done(null, false, {
              message: "Failed captcha verification!"
            });
          } else {
            if (email && !validateEmail(email)) {
              return done(null, false, {
                message: "Please insert a valid email"
              });
            } else if (password.length < 6) {
              return done(null, false, {
                message: "Password must have atleast 6 digits"
              });
            } else {
              var passwordHash = bcrypt.hashSync(password, saltRounds);

              //var id = new ObjectId().toString();

              var User = {
                //_id: id,
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
                  var Users = db.collection("Users");

                  Users.findOne({ email: User.email }, function(err, user) {
                    if (user) {
                      return done(null, false, {
                        message: "Email already exits!"
                      });
                    } else {
                      Users.insertOne(User, function(err, result) {
                        db.close();
                        if (err) {
                          throw err;
                          return done(err);
                        } else {
                          return done(null, User);
                        }
                      });
                    }
                  });
                }
              });
            }
          }
        });
      }
    )
  );

  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, done) {
        let ipAdd = req.connection.remoteAddress;

        console.log(req.body["recaptcha"]);

        const verificationURL =
          "https://www.google.com/recaptcha/api/siteverify?secret=" +
          "6LffB00UAAAAAEf6MHIek02ZD2-MsVMaWpgIFFfF" +
          "&response=" +
          req.body["recaptcha"] +
          "&remoteip=" +
          ipAdd;

        axios.get(verificationURL).then(function(response) {
          let data = response.data;
          console.log(data);
          if (data.success !== true) {
            return done(null, false, {
              message: "Failed captcha verification!"
            });
          } else {
            getConnection(function(err, db) {
              if (err) {
                throw err;
              } else {
                var Users = db.collection("Users");

                Users.findOne({ email: email, role: "user" }, function(
                  err,
                  user
                ) {
                  if (err) {
                    return done(err);
                  } else if (!user) {
                    return done(null, false, { message: "User not found!" });
                  } else {
                    if (!bcrypt.compareSync(password, user.password)) {
                      return done(null, false, {
                        message: "Oops! Wrong password!"
                      });
                    } else {
                      var UserId = user._id.toString();
                      user.token = jwt.sign({ UserId }, "comesticshop", {
                        expiresIn: 1440
                      });
                      delete user.password;

                      return done(null, user);
                    }
                    //var ssID = req.sessionID;

                    //var UserId = user._id.toString();

                    //   insertSID(user._id, ssID, function(err, res) {
                    //     if (err) {
                    //       return done(null, false, {
                    //         message: "Something went wrong!"
                    //       });
                    //     } else {
                    //       user.token = jwt.sign({ UserId }, secret, {
                    //         expiresIn: 1440
                    //       });
                    //       user.ssID = ssID;
                    //       return done(null, user);
                    //     }
                    //   });
                    return;
                  }
                });
              }
            });
          }
        });
      }
    )
  );
};

function insertSID(userID, ssID, callback) {
  getConnection(function(err, db) {
    if (err) {
      throw err;
    } else {
      var Users = db.collection("Users");

      Users.updateOne(
        { _id: ObjectId(userID) },
        { $set: { ssID: ssID } },
        function(err, res) {
          callback(err, res);
        }
      );
    }
  });
}
