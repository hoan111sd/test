const getConnection = require("../config/database");

const async = require("async");

const ObjectId = require("mongodb").ObjectID;

const secret = require("../../config").secret;

const bcrypt = require("bcryptjs");

const saltRounds = 10;

const changePassword = function(req, res) {
  let userID = req.body.userID;

  if (!userID) {
    res.json({
      success: false,
      error: "Cannot connect to database"
    });
  }

  let password = req.body.password;

  let cpassword = req.body.cpassword;

  if (password !== cpassword) {
    res.json({
      success: false,
      error: "Password must be match!"
    });
  }
  let newPassword = bcrypt.hashSync(password, saltRounds);

  getConnection(function(err, db) {
    if (err) {
      res.json({ success: false, error: "Cannot connect to database" });
      throw err;
    } else {
      let Users = db.collection("Users");

      Users.update(
        { _id: ObjectId(userID) },
        {
          $set: {
            newField: "aaaa",
            password: newPassword,
            updateAt: new Date()
          }
        },
        function(err, doc) {
          if (err) {
            res.json({ success: false, error: "Somethign went wrong!" });
          } else {
            res.json({ success: true, data: doc, message: "True" });
          }
        }
      );
    }
  });
};

const changeInfo = function(req, res) {
  let userID = req.body.userID;

  let address = req.body.address || "";

  let firstName = req.body.firstName || "";

  let lastName = req.body.lastName || "";

  let phone = req.body.phone || "";

  let properties = ["address", "firstName", "lastName", "phone"];

  let updateInfo = {};

  let profile = {};
  properties.map(property => {
    if (req.body[property]) {
      if (property === "firstName" || property === "lastName") {
        profile[property] = req.body[property];
      } else {
        updateInfo[property] = req.body[property];
      }
    }
  });

  updateInfo["profile"] = profile;
  console.log(updateInfo);

  getConnection(function(err, db) {
    if (err) {
      res.json({ success: false, error: "Cannot connect to database" });
      throw err;
    } else {
      let Users = db.collection("Users");

      Users.update(
        { _id: ObjectId(userID) },
        {
          $set: {
            ...updateInfo,
            updateAt: new Date()
          }
        },
        function(err, doc) {
          if (err) {
            res.json({ success: false, error: "Somethign went wrong!" });
          } else {
            res.json({ success: true, message: "Profile updated!" });
          }
        }
      );
    }
  });
};

module.exports = {
  changePassword,
  changeInfo
};
