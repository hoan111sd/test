const ObjectId = require("mongodb").ObjectID;

const getConnection = require("../../config/database");

const async = require("async");

const getProducts = function(req, res) {
  getConnection(function(err, db) {
    if (err) {
      res.json({ error: "Cannot connect to database" });
      throw err;
    } else {
      var Products = db.collection("Products");

      Products.find({}).toArray(function(err, products) {
        if (err) {
          res.json({
            success: false,
            errCode: "connectionError",
            message: err.message
          });
        } else {
          res.json({ success: true, data: products, message: "" });
        }
      });
    }
  });
};

const deleteProduct = function(req, res) {
  let productID = req.body.productID || "";
  let page = req.body.page || "1";
  let perPage = 50;
  getConnection(function(err, db) {
    if (err) {
      res.json({ success: false, error: "Cannot connect to database" });
    } else {
      var Products = db.collection("Products");

      async.waterfall(
        [
          function(callback) {
            Products.deleteOne({ _id: ObjectId(productID) }, function(
              err,
              obj
            ) {
              if (err) {
                res.json({
                  success: false,
                  errCode: "connectionError",
                  message: err.message
                });
              } else {
                console.log("obj");
                callback(null, "success");
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
                  let Products = db.collection("Products");

                  Products.find({}).count(function(err, total) {
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
              console.log("bbbb");
              if (err) {
                res.json({
                  success: false,
                  error: "Cannot connect to database"
                });
                throw err;
              } else {
                let Products = db.collection("Products");

                Products.find({})
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
        function(err, totalProducts, products) {
          if (err) {
            res.json({
              success: false,
              errCode: "connectionError",
              error: "Something went wrong!"
            });
          } else {
            let total = totalProducts;
            let Products = products;
            let totalPages = Math.ceil(total / perPage);
            res.json({
              success: true,
              data: Products,
              currentPage: page,
              total: total,
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

module.exports = {
  getProducts,
  deleteProduct
};
