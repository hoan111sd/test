const getConnection = require("../config/database");

module.exports = function (req, res) {
    var userID = req.body.userID;
    getConnection(function (err, db) {
        if (err) {
            throw err;
        } else {
            db
                .collection("Cart")
                .findOne({
                    userID: userID
                }, 
                function (err, docs) {
                    console.log(err, docs)
                    if (err) {
                        throw err;
                    } else {
                        console.log(docs)
                        res.json(docs);
                    }
                });
        }
    });
};