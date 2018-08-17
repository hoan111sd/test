const async = require("async");

const _ = require("lodash");

const getConnection = require("../config/database");

const ObjectId = require("mongodb").ObjectID;
module.exports = function(req, res) {
  var productID = req.params.id || "";
  if (!productID) {
    res.json({
      success: false,
      errCode: "error",
      message: "Something went wrong!"
    });
  }

  async.parallel(
    [
      function(callback) {
        getConnection(function(err, db) {
          if (err) {
            throw err;
          } else {
            let Rating = db.collection("Rating");

            Rating.find({ productID }).toArray(function(err, docs) {
              if (err) {
                res.json({ success: false, error: "Something went wrong" });
              } else {
                let avg = _.meanBy(docs, function(o) {
                  return Number(o.rating);
                });
                if (avg) {
                  callback(null, avg.toFixed(2));
                } else {
                  callback(null, 0);
                }
              }
            });
          }
        });
      },
      function(callback) {
        getConnection(function(err, db) {
          if (err) {
            throw err;
          } else {
            let Products = db.collection("Products");

            Products.findOne({ _id: ObjectId(productID) }, function(err, doc) {
              if (err) {
                res.json({
                  success: false,
                  errCode: "productNotFound",
                  message: "Product not found"
                });
              } else if (!doc) {
                res.json({
                  success: false,
                  errCode: "productNotFound",
                  message: "Product not found"
                });
              } else {
                callback(null, doc);
              }
            });
          }
        });
      }
    ],
    function(err, results) {
      if (err) {
        res.json({
          success: false,
          errCode: "productNotFound",
          message: "Product not found"
        });
      } else if (results.length !== 2) {
        res.json({
          success: false,
          errCode: "error",
          message: "Something went wrong!"
        });
      } else {
        let Rating = results[0];
        let Product = results[1];
        Product.rating = Rating;

        res.json({
          success: true,
          data: Product,
          message: "Success!"
        });
      }
    }
  );

  // getConnection(function(err, db) {
  //   if (err) {
  //     throw err;
  //   } else {
  //     db
  //       .collection("Products")
  //       .findOne({ _id: ObjectId(id) }, function(err, doc) {
  //         if (err) {
  //           throw err;
  //           res.json({
  //             success: false,
  //             errCode: "productNotFound",
  //             message: "Product not found"
  //           });
  //         } else {
  //           res.json({ success: true, data: doc, message: "ok!!!" });
  //         }
  //       });
  //   }
  // });
};
