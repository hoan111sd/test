const getConnection = require("../../config/database");

const async = require("async");

const bcrypt = require("bcryptjs");

const saltRounds = 10;

const ObjectId = require("mongodb").ObjectID;

const getUsers = function(req, res) {
  let page = req.params.page || "1";
  let perPage = 50;

  getConnection(function(err, db) {
    if (err) {
      res.json({ error: "Cannot connect to database" });
      throw err;
    } else {
      var Users = db.collection("Users");

      async.waterfall(
        [
          function(callback) {
            Users.find({ role: "user" }).count(function(err, total) {
              if (err) {
                res.json({
                  success: false,
                  errCode: "connectionError",
                  error: err.message
                });
              } else {
                callback(null, total);
              }
            });
          },
          function(totalRecords, callback) {
            Users.find({ role: "user" })
              .limit(perPage)
              .skip(perPage * (Number(page) - 1))
              .toArray(function(err, docs) {
                if (err) {
                  res.json({
                    success: false,
                    errCode: "connectionError",
                    error: err.message
                  });
                } else {
                  callback(null, docs, totalRecords);
                }
              });
          }
        ],
        function(err, users, totalRecords) {
          if (err) {
            res.json({
              success: false,
              errCode: "connectionError",
              error: "Something went wrong!"
            });
          } else {
            let totalPages = Math.ceil(totalRecords / perPage);
            res.json({
              success: true,
              data: users,
              currentPage: page,
              total: totalRecords,
              totalPages: totalPages.toString(),
              perPage: perPage,
              message: "Success!"
            });
          }
        }
      );
    }
  });
};

const getUser = function(req, res) {
  getConnection(function(err, db) {
    if (err) {
      res.json({ error: "Cannot connect to database" });
      throw err;
    } else {
      var UserId = req.params.id || "";
      var Users = db.collection("Users");

      Users.findOne({ _id: ObjectId(UserId) }, function(err, user) {
        if (err) {
          res.json({
            success: false,
            errCode: "connectionError",
            message: err.message
          });
        } else if (!user) {
          res.json({
            success: false,
            errCode: "userNotFound",
            message: "User not found"
          });
        } else {
          res.json({ success: true, data: [user], message: "" });
        }
      });
    }
  });
};

const deleteUser = function(req, res) {
  let userID = req.body.userID || "";
  let page = req.body.page || "1";
  console.log(req.body);
  let perPage = 50;
  if (!userID) {
    res.json({
      success: false,
      error: "Something went wrong!"
    });
  }
  async.waterfall(
    [
      function(callback) {
        getConnection(function(err, db) {
          if (err) {
            res.json({ error: "Cannot connect to database" });
            throw err;
          } else {
            var Users = db.collection("Users");

            Users.deleteOne({ _id: ObjectId(userID) }, function(err, user) {
              if (err) {
                res.json({
                  success: false,
                  errCode: "connectionError",
                  message: err.message
                });
              } else if (!user) {
                res.json({
                  success: false,
                  errCode: "userNotFound",
                  message: "User not found"
                });
              } else {
                callback(null, "success");
              }
            });
          }
        });
      },
      function(message, callback) {
        if (message === "success") {
          getConnection(function(err, db) {
            if (err) {
              res.json({
                success: false,
                error: "Cannot connect to database"
              });
              throw err;
            } else {
              let Users = db.collection("Users");

              Users.find({}).count(function(err, total) {
                if (err) {
                  return;
                } else {
                  callback(null, total);
                }
              });
            }
          });
        }
      },
      function(total, callback) {
        getConnection(function(err, db) {
          if (err) {
            res.json({
              success: false,
              error: "Cannot connect to database"
            });
            throw err;
          } else {
            let Users = db.collection("Users");

            Users.find({ role: "user" })
              .limit(perPage)
              .skip(perPage * (Number(page) - 1))
              .toArray(function(err, docs) {
                if (err) {
                  return;
                } else {
                  console.log("aaaa");
                  callback(null, total, docs);
                }
              });
          }
        });
      }
    ],
    function(err, totalUsers, users) {
      if (err) {
        res.json({
          success: false,
          errCode: "connectionError",
          error: "Something went wrong!"
        });
      } else {
        let total = totalUsers;
        let Users = users;
        let totalPages = Math.ceil(total / perPage);
        res.json({
          success: true,
          data: Users,
          currentPage: page,
          total: total,
          totalPages: totalPages.toString(),
          perPage: perPage,
          message: "Success!"
        });
      }
    }
  );
};

const editUser = function(req, res) {
  let UserId = req.body.userID || "";
  let email = req.body.email || "";
  let firstName = req.body.firstName || "";
  let lastName = req.body.lastName || "";
  let password = req.body.password || "";
  let address = req.body.address || "";
  let profile = {
    firstName,
    lastName
  };
  let passwordHash = bcrypt.hashSync(password, saltRounds);
  getConnection(function(err, db) {
    if (err) {
      res.json({ error: "Cannot connect to database" });
      throw err;
    } else {
      var Users = db.collection("Users");

      Users.update(
        { _id: ObjectId(UserId) },
        {
          $set: {
            email,
            profile,
            address,
            password: passwordHash
          }
        },
        function(err, result) {
          if (err) {
            res.json({
              success: false,
              errCode: "connectionError",
              message: err.message
            });
          } else if (!result) {
            res.json({
              success: false,
              errCode: "userNotFound",
              message: "User not found"
            });
          } else {
            res.json({ success: true, message: "Edit success!" });
          }
        }
      );
    }
  });
};

module.exports = {
  getUsers,
  getUser,
  deleteUser,
  editUser
};
