const getConnection = require("../config/database");

const async = require("async");

module.exports = function(req, res) {
  let page = req.params.page || "1";
  let perPage = 50;

  async.parallel(
    [
      function(callback) {
        getConnection(function(err, db) {
          if (err) {
            res.json({ success: false, error: "Cannot connect to database" });
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
      },
      function(callback) {
        getConnection(function(err, db) {
          if (err) {
            res.json({ success: false, error: "Cannot connect to database" });
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
                  callback(null, docs);
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
          errCode: "connectionError",
          error: "Something went wrong!"
        });
      } else if (!results) {
        res.json({
          success: false,
          error: "Something went wrong!"
        });
      } else {
        let total = results[0];
        let Products = results[1];
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
