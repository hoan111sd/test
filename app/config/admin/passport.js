var LocalStrategy = require("passport-local").Strategy;

var getConnection = require("../database");

const ObjectId = require("mongodb").ObjectID;

const jwt = require("jsonwebtoken");

const { secret } = require("../../../config/index");

var axios = require("axios");

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
    "admin-local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, done) {
        let ipAdd = req.connection.remoteAddress;

        const verificationURL =
          "https://www.google.com/recaptcha/api/siteverify?secret=" +
          "6LffB00UAAAAAEf6MHIek02ZD2-MsVMaWpgIFFfF" +
          "&response=" +
          req.body["recaptcha"] +
          "&remoteip=" +
          ipAdd;

        axios
          .get(verificationURL)
          .then(function(response) {
            let data = response.data;

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
                  Users.findOne(
                    { email: email, password: password, role: "admin" },
                    { _id: 1, profile: 1, email: 1 },
                    function(err, user) {
                      if (err) {
                        return done(err);
                      } else if (!user) {
                        return done(null, false, {
                          message: "User not found!"
                        });
                      } else {
                        var ssID = req.sessionID;

                        var UserId = user._id.toString();
                        user.token = jwt.sign({ UserId }, secret, {
                          expiresIn: 1440
                        });
                        insertSID(user._id, ssID, function(err, res) {
                          if (err) {
                            return done(null, false, {
                              message: "Something went wrong!"
                            });
                          } else {
                            user.ssID = ssID;
                            return done(null, user);
                          }
                        });
                        return;
                      }
                    }
                  );
                }
              });
            }
          })
          .catch(function(error) {
            return done(null, false, {
              message: "Something went wrong!"
            });
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
