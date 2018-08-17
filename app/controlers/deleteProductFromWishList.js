const getConnection = require("../config/database");

const async = require("async");

const ObjectId = require("mongodb").ObjectID;

module.exports = function(req, res) {
  let userID = req.body.userID;
  let productID = req.body.productID;
  if (!req.body || !userID || !productID) {
    res.json({
      success: false,
      errorCode: "error",
      error: "Something went wrong!"
    });
  }

  getConnection(function(err, db) {
    if (err) {
      throw err;
    } else {
      var WishList = db.collection("WishList");

      WishList.deleteOne({ userID: userID, productID: productID }, function(
        err,
        obj
      ) {
        if (err) {
          res.json({
            success: false,
            errorCode: "error",
            error: "Somethign went wrong!"
          });
        } else {
          res.json({
            success: true,
            message: "Deleted success!"
          });
        }
      });
    }
  });
};
