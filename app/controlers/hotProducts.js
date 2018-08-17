const getConnection = require("../config/database");

const async = require("async");

module.exports = function(req, res) {
  async.parallel(
    [
      function(callback) {
        getConnection(function(err, db) {
          if (err) {
            res.json({ success: false, error: "Cannot connect to database" });
            throw err;
          } else {
            let Products = db.collection("Products");

            Products.find({
              isHot: true,
              crawlFrom: "http://www.kosmebox.com/"
            })
              .limit(5)
              .toArray(function(err, docs) {
                db.close();
                if (err) {
                  res.json({
                    success: false,
                    error: "Cannot connect to database"
                  });
                } else {
                  callback(null, docs);
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

            Products.find({
              isHot: true,
              crawlFrom: "https://nutycosmetics.vn/"
            })
              .limit(5)
              .toArray(function(err, docs) {
                db.close();
                if (err) {
                  res.json({
                    success: false,
                    error: "Cannot connect to database"
                  });
                } else {
                  callback(null, docs);
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

            Products.find({
              isHot: true,
              crawlFrom: "https://thefaceshop.com.vn/"
            })
              .limit(5)
              .toArray(function(err, docs) {
                db.close();
                if (err) {
                  res.json({
                    success: false,
                    error: "Cannot connect to database"
                  });
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
        let hotProducts = [...results[0], ...results[1], ...results[2]];
        res.json({
          success: true,
          data: hotProducts
        });
      }
    }
  );
};
