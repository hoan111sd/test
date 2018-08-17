const getConnection = require("../../config/database");

const async = require("async");

const bcrypt = require("bcryptjs");

const saltRounds = 10;

const ObjectId = require("mongodb").ObjectID;

const getOrders = function(req, res) {
  let page = req.params.page || "1";
  let perPage = 50;

  getConnection(function(err, db) {
    if (err) {
      res.json({ error: "Cannot connect to database" });
      throw err;
    } else {
      var Orders = db.collection("Orders");

      async.waterfall(
        [
          function(callback) {
            Orders.find({}).count(function(err, total) {
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
            Orders.find({})
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
        function(err, orders, totalRecords) {
          if (err) {
            res.json({
              success: false,
              errCode: "connectionError",
              error: "Something went wrong!"
            });
          } else {
            let totalPages = Math.ceil(totalRecords / perPage);

            let promises = orders.map(order => {
              return getUserName(order.userID).then(function(doc) {
                return doc;
              });
            });

            Promise.all(promises).then(results => {
              orders = orders.map(function(order, index) {
                if (results[index]) {
                  order.profile = results[index].profile;
                }
                return order;
              });
              res.json({
                success: true,
                data: orders,
                currentPage: page,
                total: totalRecords,
                totalPages: totalPages.toString(),
                perPage: perPage,
                message: "Success!"
              });
            });
          }
        }
      );
    }
  });
};

function getUserName(userId) {
  return new Promise((resolve, reject) => {
    getConnection(function(err, db) {
      if (err) {
        console.log(err);
      } else {
        let Users = db.collection("Users");

        Users.findOne({ _id: ObjectId(userId) }, function(err, doc) {
          resolve(doc);
        });
      }
    });
  });
}

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

const deleteOrder = function(req, res) {
  let orderId = req.body.orderId || "";
  let page = req.body.page || "1";
  console.log(req.body);
  let perPage = 50;
  if (!orderId) {
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
            var Orders = db.collection("Orders");

            Orders.deleteOne({ _id: ObjectId(orderId) }, function(err, user) {
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
              let Orders = db.collection("Orders");

              Orders.find({}).count(function(err, total) {
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
            let Orders = db.collection("Orders");

            Orders.find()
              .limit(perPage)
              .skip(perPage * (Number(page) - 1))
              .toArray(function(err, docs) {
                if (err) {
                  return;
                } else {
                  console.log("aaaa");
                  callback(null, docs, total);
                }
              });
          }
        });
      }
    ],
    function(err, orders, totalRecords) {
      if (err) {
        res.json({
          success: false,
          errCode: "connectionError",
          error: "Something went wrong!"
        });
      } else {
        let totalPages = Math.ceil(totalRecords / perPage);

        let promises = orders.map(order => {
          return getUserName(order.userID).then(function(doc) {
            return doc;
          });
        });

        Promise.all(promises).then(results => {
          orders = orders.map(function(order, index) {
            if (results[index]) {
              order.profile = results[index].profile;
            }
            return order;
          });
          res.json({
            success: true,
            data: orders,
            currentPage: page,
            total: totalRecords,
            totalPages: totalPages.toString(),
            perPage: perPage,
            message: "Success!"
          });
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

const updateOrder = function(req, res) {
  let orderId = req.body.orderId;
  let page = req.params.page || "1";
  let perPage = 50;
  let data = req.body;

  delete data.orderId;
  delete data.page;

  if (!orderId) {
    res.json({ success: false, error: "" });
  } else {
    async.waterfall(
      [
        function(callback) {
          getConnection(function(err, db) {
            if (err) {
              res.json({ error: "Cannot connect to database" });
              throw err;
            } else {
              let Orders = db.collection("Orders");

              Orders.update(
                { _id: ObjectId(orderId) },
                {
                  $set: {
                    ...data
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
                      message: "Order not found"
                    });
                  } else {
                    callback(null, "success");
                  }
                  db.close();
                }
              );
            }
          });
        },
        function(msg, callback) {
          getConnection(function(err, db) {
            let Orders = db.collection("Orders");
            Orders.find({}).count(function(err, total) {
              if (err) {
                res.json({
                  success: false,
                  errCode: "connectionError",
                  error: err.message
                });
              } else {
                db.close();
                callback(null, total);
              }
            });
          });
        },
        function(totalRecords, callback) {
          getConnection(function(err, db) {
            let Orders = db.collection("Orders");
            Orders.find({})
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
          });
        }
      ],
      function(err, orders, totalRecords) {
        if (err) {
          res.json({
            success: false,
            errCode: "connectionError",
            error: "Something went wrong!"
          });
        } else {
          let totalPages = Math.ceil(totalRecords / perPage);

          let promises = orders.map(order => {
            return getUserName(order.userID).then(function(doc) {
              return doc;
            });
          });

          Promise.all(promises).then(results => {
            orders = orders.map(function(order, index) {
              if (results[index]) {
                order.profile = results[index].profile;
              }
              return order;
            });
            res.json({
              success: true,
              data: orders,
              currentPage: page,
              total: totalRecords,
              totalPages: totalPages.toString(),
              perPage: perPage,
              message: "Success!"
            });
          });
        }
      }
    );
  }
};

module.exports = {
  getOrders,
  getUser,
  deleteOrder,
  editUser,
  updateOrder
};
