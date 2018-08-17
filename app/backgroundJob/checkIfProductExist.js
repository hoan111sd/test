var getConnection = require("../config/database");

var async = require("async");

function checkProduct(product) {
  let name = product.name;
  let site = product.crawlFrom;
  async.waterfall(
    [
      function(callback) {
        getConnection(function(err, db) {
          const Products = db.collection("Products");

          Products.findOne({ name: name }, function(err, doc) {
            if (err) {
              callback(null, false);
            }
            if (doc) {
              callback(null, doc);
            }
          });
          db.close();
        });
      },
      function(result, callback) {
        if (result) {
          if (result.site === site) {
            callback(null, "do-nothing");
          } else {
            var price1 = Number(result.price) * (1 - Number(result.sale) / 100);
            var price2 =
              Number(product.price) * (1 - Number(product.sale) / 100);
            if (price1 > price2) {
              callback(null, product.price, product.sale);
            } else {
              callback(null, "do-nothing");
            }
          }
        } else {
          callback(null, "do-nothing");
        }
      }
    ],
    function(err, price, sale) {
      if (price === "do-nothing" && !sale) {
        return;
      } else {
        getConnection(function(err, db) {
          const Products = db.collection("Products");
          Products.update(
            { name: name },
            { $set: { price: price, sale: Number(sale) + 5 } },
            function(err, doc) {
              if (err) {
                return;
              }
              if (doc) {
                return true;
              }
            }
          );
          db.close();
        });
      }
    }
  );
}

module.exports = checkProduct;
