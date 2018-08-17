const getConnection = require("../config/database");

const ObjectId = require("mongodb").ObjectID;

const userInfo = function(req, res) {
  var decoded = req.decoded || "";

  var userId = decoded._id || "";

  getConnection(function(err, db) {
    if (err) {
      res.json({ error: "Cannot connect to database" });
      throw err;
    } else {
      var Users = db.collection("Users");

      Users.findOne(
        { _id: ObjectId(userId) },
        { email: 1, address: 1 },
        function(err, doc) {
          if (err) {
            res.json({ success: false, error: "Somethign went wrong!" });
          } else {
            res.json({ success: true, data: doc });
          }
        }
      );
    }
  });
};

module.exports = userInfo;
