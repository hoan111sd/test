const getConnection = require("../config/database");

const ObjectId = require("mongodb").ObjectID;

const userInfo = function(req, res) {
  var decoded = req.decoded || "";

  var userId = decoded._id || "";

  getConnection(function(err, db) {
    if (err) {
      res.json({ error: "Cannot connect to database" });
      throw err;
    } else {
      var Users = db.collection("Users");

      Users.findOne(
        { _id: ObjectId(userId) },
        { email: 1, address: 1 },
        function(err, doc) {
          if (err) {
            res.json({ success: false, error: "Somethign went wrong!" });
          } else {
            res.json({ success: true, data: doc });
          }
        }
      );
    }
  });
};

const userCheckOut = function(req, res) {
  let userID = req.body.userID;
  let product = req.body.product;
  let productID = product._id || "";
  if (!req.body || !userID || !product) {
    res.json({
      success: false,
      errorCode: "error",
      error: "Something went wrong!"
    });
  }
  delete product._id;

  getConnection(function(err, db) {
    if (err) {
      throw err;
    } else {
      var OrdersHistory = db.collection("OrdersHistory");

      async.waterfall(
        [
          function(callback) {
            OrdersHistory.findOne(
              {
                userID: userID,
                productID: productID
              },
              function(err, doc) {
                if (err) {
                  callback(null, err, null);
                } else if (doc) {
                  callback(null, null, doc);
                } else {
                  callback(null, null, null);
                }
              }
            );
          },
          function(err, doc, callback) {
            if (err) {
              res.json({
                success: false,
                errorCode: "error",
                error: "Something went wrong!"
              });
            } else if (doc) {
              let productAmount = doc.quantity || 1;
              OrdersHistory.update(
                {
                  userID: userID,
                  productID: productID
                },
                {
                  $set: {
                    quantity: productAmount + 1
                  }
                },
                function(err, res) {
                  if (err) {
                    callback(err);
                  }
                  callback(null, "success");
                }
              );
            } else {
              OrdersHistory.insertOne(
                {
                  userID,
                  productID: productID,
                  product,
                  quantity: 1
                },
                function(err, res) {
                  if (err) {
                    callback(err);
                  }
                  callback(null, "success");
                }
              );
            }
          }
        ],
        function(err, result) {
          if (err) {
            res.json({
              success: false,
              errorCode: "error",
              error: "Something went wrong!"
            });
          } else {
            res.json({
              success: true,
              message: "Add to Wishlist successfull!"
            });
          }
        }
      );
    }
  });

}


const userHistory = function(req, res) {
  let userID = req.body.userID;

  getConnection(function(err, db) {
    var OrdersHistory = db.collection("OrdersHistory");

    OrdersHistory.find({userID}, function(err, docs) {
      db.close();
      if (err) {
        res.json({ success: false, error: "Something went wrong!" });
      } else {
        res.json({ success: true, message: "Success!", data: docs });
      }
    });
  });
}

module.exports = {
  userCheckOut,
  userHistory,
  userInfo
};
