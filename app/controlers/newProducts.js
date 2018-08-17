const getConnection = require("../config/database");

const async = require("async");

module.exports = function(req, res) {
  getConnection(function(err, db) {
    if (err) {
      res.json({ success: false, error: "Cannot connect to database" });
      throw err;
    } else {
      let Products = db.collection("Products");

      Products.find({})
        .sort({ createdAt: -1 })
        .limit(10)
        .toArray(function(err, docs) {
          db.close();
          if (err) {
            res.json({
              success: false,
              error: "Cannot connect to database"
            });
          } else {
            res.json({
              success: true,
              data: docs
            });
          }
        });
    }
  });
};
