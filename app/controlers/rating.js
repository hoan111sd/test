const getConnection = require("../config/database");

const middleware = require("../middleware/authentication");

module.exports = function(req, res) {
  const decoded = req.decoded;
  const ratingPoint = req.body.ratingPoint || "0";
  const productId = req.body.productId || "";

  const insertDoc = {
    userId: decoded._id,
    productId: productId,
    rate: ratingPoint
  };

  getConnection(function(err, db) {
    var Rating = db.collection("rating");

    Rating.insertOne(insertDoc, function(err, result) {
      db.close();
      if (err) {
        res.json({ message: err.message });
      } else {
        res.json({ message: result });
      }
    });
  });
};
