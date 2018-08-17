const getConnection = require("../config/database");

const async = require("async");

const ObjectId = require("mongodb").ObjectID;

module.exports = function(req, res) {
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
      var WishList = db.collection("WishList");

      async.waterfall(
        [
          function(callback) {
            WishList.findOne(
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
              WishList.update(
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
              WishList.insertOne(
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
};
