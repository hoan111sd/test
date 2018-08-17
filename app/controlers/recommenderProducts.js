const getConnection = require("../config/database");

const _ = require("lodash");

const async = require("async");

const ObjectId = require("mongodb").ObjectID;

const initCfItemBased = require("../machine/initCfItemBased");

module.exports = function(req, res) {
  let userId = req.params.userId;

  if (userId) {
    initCfItemBased(userId).then(recommenderProducts => {
      res.json({ success: true, data: recommenderProducts });
    });
  } else {
    res.json({ success: false });
  }
};
