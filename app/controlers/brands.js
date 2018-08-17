const getConnection = require("../config/database");

const async = require("async");

const ObjectId = require("mongodb").ObjectID;

const getBrands = function(req, res) {
  getConnection(function(err, db) {
    var Brands = db.collection("Brands");

    Brands.find({}).toArray(function(err, docs) {
      if (err) {
        res.json({ success: false, error: "Somethign went wrong!" });
      } else {
        res.json({ success: true, data: docs });
      }
      db.close();
    });
  });
};

const getproductsOfBrand = function(req, res) {
  let brandID = req.params.id;
  let page = req.params.page || "1";
  let perPage = 50;
  console.log(brandID);
  if (!brandID) {
    res.json({ success: false, error: "Something went wrong!" });
  }

  async.waterfall(
    [
      function(callback) {
        getConnection(function(err, db) {
          if (err) {
            res.json({ success: false, error: "Cannot connect to database" });
            throw err;
          } else {
            let Products = db.collection("Products");

            Products.find({ "brand._id": ObjectId(brandID) }).count(function(
              err,
              total
            ) {
              if (err) {
                return;
              } else {
                callback(null, total);
              }
            });
          }
        });
      },
      function(totalItems, callback) {
        getConnection(function(err, db) {
          var Brands = db.collection("Brands");

          Brands.findOne({ _id: ObjectId(brandID) }, function(err, doc) {
            if (err) {
              res.json({ success: false, error: "Somethign went wrong!" });
            } else if (!doc) {
              res.json({ success: false, error: "Somethign went wrong!" });
            } else {
              console.log(doc);
              callback(null, doc._id, totalItems);
            }
            db.close();
          });
        });
      },
      function(brandId, totalItems, callback) {
        getConnection(function(err, db) {
          if (err) {
            res.json({ success: false, error: "Cannot connect to database" });
            throw err;
          } else {
            let Products = db.collection("Products");

            Products.find({ "brand._id": brandId })
              .limit(perPage)
              .skip(perPage * (Number(page) - 1))
              .toArray(function(err, docs) {
                if (err) {
                  return;
                } else {
                  callback(null, docs, totalItems);
                }
              });
          }
          db.close();
        });
      }
    ],
    function(err, docs, totalItems) {
      console.log(docs.length);
      console.log(totalItems);
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
};

module.exports = { getBrands, getproductsOfBrand };
