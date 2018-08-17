const getConnection = require("../config/database");

const async = require("async");

const ObjectId = require("mongodb").ObjectID;

const categories = function(req, res) {
  getConnection(function(err, db) {
    var Categories = db.collection("Categories");

    Categories.find({}).toArray(function(err, docs) {
      if (err) {
        throw err;
      } else {
        res.json({ success: true, data: docs });
      }

      db.close();
    });
  });
};

const category = function(req, res) {
  let categoryID = req.params.categoryID;

  let page = req.params.page || "1";
  let perPage = 50;

  if (!categoryID) {
    res.json({ success: false, error: "Something went wrong!" });
  } else {
    async.waterfall(
      [
        function(callback) {
          getConnection(function(err, db) {
            if (err) {
              res.json({ success: false, error: "Cannot connect to database" });
              throw err;
            } else {
              let Products = db.collection("Products");

              Products.find({ "category._id": ObjectId(categoryID) }).count(
                function(err, total) {
                  if (err) {
                    return;
                  } else {
                    callback(null, total);
                  }
                }
              );
            }
          });
        },

        function(total, callback) {
          getConnection(function(err, db) {
            var Products = db.collection("Products");
            Products.find({ "category._id": ObjectId(categoryID) })
              .limit(perPage)
              .skip(perPage * (Number(page) - 1))
              .toArray(function(err, docs) {
                if (err) {
                  return;
                } else {
                  callback(null, docs, total);
                }
              });
          });
        }
      ],
      function(err, docs, totalItems) {
        if (err) {
          res.json({
            success: false,
            errCode: "connectionError",
            error: "Something went wrong!"
          });
        } else {
          let total = totalItems;
          let Products = docs;
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
};

module.exports = { categories, category };
