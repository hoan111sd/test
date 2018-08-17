const getConnection = require("../../config/database");

const async = require("async");

const saltRounds = 10;

const ObjectId = require("mongodb").ObjectID;

const getComments = function(req, res) {
  let productID = req.params.id || "";
  let page = req.params.page || "1";
  let perPage = 50;
  console.log("COmeenada");
  if (!productID) {
    res.json({ success: false, error: "Something went wrong!" });
  }
  async.parallel(
    [
      function(callback) {
        getConnection(function(err, db) {
          if (err) {
            res.json({ success: false, error: "Cannot connect to database" });
            throw err;
          } else {
            let Comments = db.collection("Comments");

            Comments.find({ productID }).count(function(err, total) {
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
            let Comments = db.collection("Comments");

            Comments.find({ productID })
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
        let Comments = results[1];
        let totalPages = Math.ceil(total / perPage);
        res.json({
          success: true,
          data: Comments,
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

getComment = function(req, res) {
  let commentID = req.params.id || "";

  getConnection(function(err, db) {
    if (err) {
      res.json({ success: false, error: "Cannot connect to database" });
      throw err;
    } else {
      let Comments = db.collection("Comments");

      Comments.findOne({ _id: ObjectId(commentID) }, function(err, doc) {
        if (err) {
          return;
        } else {
          res.json({ success: true, data: doc, message: "Success!" });
        }
      });
    }
  });
};

editComment = function(req, res) {
  console.log(req.body);
  let commentID = req.body.commentID || "";
  let content = req.body.content || "";
  let rating = req.body.rating || "";
  getConnection(function(err, db) {
    if (err) {
      res.json({ success: false, error: "Cannot connect to database" });
      throw err;
    } else {
      let Comments = db.collection("Comments");

      Comments.update(
        { _id: ObjectId(commentID) },
        {
          $set: {
            content: content,
            rating: rating
          }
        },
        function(err, result) {
          if (err) {
            res.json({ success: false, error: "Something went wrong!" });
          } else {
            res.json({ success: true, message: "Success!" });
          }
        }
      );
    }
  });
};

module.exports = {
  getComments,
  getComment,
  editComment
};
