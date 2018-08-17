var MongodDb = require("mongodb").MongoClient;

var MongoDB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/Comestics";

const getConnection = function(callback) {
  MongodDb.connect(MongoDB_URI, function(err, db) {
    callback(err, db);
  });
};

module.exports = getConnection;
