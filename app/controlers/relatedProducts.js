const getConnection = require("../config/database");

const _ = require("lodash");

const async = require("async");

const ObjectId = require("mongodb").ObjectID;

const initContentBased = require("../machine/initContentBased");

module.exports = function(req, res) {
  let productId = req.params.id;

  if (productId) {
    getConnection(function(err, db) {
      if (err) {
        res.json({ success: false });
      } else {
        let Products = db.collection("Products");

        Products.findOne({ _id: ObjectId(productId) }, function(err, doc) {
          if (doc) {
            console.log("Init 1");
            initContentBased(doc.title).then(relatedProducts => {
              res.json({ success: true, data: relatedProducts });
            });
          } else {
            res.json({ success: false });
          }
        });
      }
    });
  } else {
    res.json({ success: false });
  }
};
