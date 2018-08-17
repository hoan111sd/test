const getConnection = require("../config/database");
const ObjectId = require("mongodb").ObjectID;
module.exports = function(req, res) {
  var productID = req.params.id || "";
  if (!productID) {
    return;
  }
  getConnection(function(err, db) {
    if (err) {
      throw err;
    } else {
      db
        .collection("Rating")
        .find({
          productID: productID
        })
        .toArray(function(err, docs) {
          if (err) {
            throw err;
            res.json({
              success: false,
              errCode: "CommentsNotFound",
              error: "Comments not found"
            });
          } else {
            res.json({
              success: true,
              data: docs,
              message: "ok!!!"
            });
          }
        });
    }
  });
};
