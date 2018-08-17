const getConnection = require("../config/database");

const async = require("async");

const initCfItemBased = require("../machine/initCfItemBased");

module.exports = function(req, res) {
  let productID = req.body.productID || "";
  let userId = req.body.userID || "";
  let username = req.body.username || "";
  let content = req.body.content || "";
  let rating = req.body.rating || "";
  if (!req.body || !productID || !userId || !content || !rating) {
    res.json({ success: false, error: "Something went wrong!" });
  }

  getConnection(function(err, db) {
    if (err) {
      throw err;
    } else {
      var Comment = db.collection("Comments");
      var Rating = db.collection("Rating");

      async.parallel(
        [
          function(callback) {
            Comment.insertOne(
              {
                productID,
                userId,
                username,
                content,
                rating,
                createdAt: new Date()
              },
              function(err, res) {
                if (err) {
                  callback(err);
                } else {
                  callback(null, "Success");
                }
              }
            );
          },
          function(callback) {
            // Comment.insertOne(
            //   {
            //     productID,
            //     userId,
            //     username,
            //     content,
            //     rating,
            //     createdAt: new Date()
            //   },
            //   function(err, res) {
            //     if (err) {
            //       callback(err);
            //     } else {
            //       callback(null, "Success");
            //     }
            //   }
            // );
            Rating.update(
              { productID, userId },
              {
                productID,
                userId,
                username,
                content,
                rating,
                createdAt: new Date()
              },
              {
                upsert: true
              },
              function(err, res) {
                if (err) {
                  callback(err);
                } else {
                  callback(null, "Success");
                }
              }
            );
            // Rating.insertOne(
            //   { productID, userID, rating, createdAt: new Date() },
            //   function(err, res) {
            //     if (err) {
            //       callback(err);
            //     } else {
            //       callback(null, "Success");
            //     }
            //   }
            // );
          }
        ],
        function(err, results) {
          if (err) {
            res.json({
              success: false,
              errorCode: "error",
              error: "Something went wrong!"
            });
          } else {
            initCfItemBased(userId).then(recommenderProducts => {
              res.json({ success: true, data: recommenderProducts });
            });
          }
        }
      );
    }
  });
};
