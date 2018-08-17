const getConnection = require("../config/database");

const ObjectId = require("mongodb").ObjectID;

const prepareProducts = require("./prepareProducts");
const prepareRatings = require("./prepareRatings");
const predictWithContentBased = require("./contentBased");
const {
  predictWithCfItemBased,
  predictWithCfUserBased
} = require("./cfItemsBased");

let PRODUCTS_LIST = {};
let KEYWORDS_LIST = {};
let RAW_PRODUCTS_BY_ID = {};
let RATINGS = {};
let USER_RATINGS = {};
let ME_USER_ID = "";

let productsMetaDataPromise = new Promise((resolve, reject) => {
  getProductList().then(list => {
    PRODUCTS_LIST = list;
    resolve(PRODUCTS_LIST);
  });
});

let ratingsPromise = new Promise((resolve, reject) => {
  getRatings().then(list => {
    RATINGS = list;
    resolve(RATINGS);
  });
});

let userRatingsPromise = new Promise((resolve, reject) => {
  getUserRatings(ME_USER_ID).then(list => {
    USER_RATINGS = list;
    resolve(USER_RATINGS);
  });
});

function init(userId) {
  ME_USER_ID = userId;
  return new Promise((resolve, reject) => {
    Promise.all([
      productsMetaDataPromise,
      ratingsPromise,
      userRatingsPromise
    ]).then(([productsMetaData, ratings, userRatings]) => {
      RAW_PRODUCTS_BY_ID = productsMetaData;
      const { PRODUCTS_BY_ID, PRODUCTS_IN_LIST, X } = prepareProducts(
        productsMetaData
      );
      const { ratingsGroupedByUser, ratingsGroupedByItem } = prepareRatings(
        ratings
      );
      const { cfItemBasedRecommendation } = predictWithCfItemBased(
        ratingsGroupedByUser,
        ratingsGroupedByItem,
        ME_USER_ID
      );

      // console.log(cfItemBasedRecommendation);

      let a = sliceAndDice(
        cfItemBasedRecommendation,
        ratingsGroupedByUser,
        ME_USER_ID,
        RAW_PRODUCTS_BY_ID,
        10,
        true
      );
      resolve(a);
    });
  });
}

function sliceAndDice(
  recommendations,
  ratingsGroupedByUser,
  ME_USER_ID,
  PRODUCTS_BY_ID,
  count
) {
  let myRatings = ratingsGroupedByUser[ME_USER_ID];

  // console.log(myRatings);
  // console.log("aa", recommendations);

  recommendations = recommendations.filter(recommendation => {
    if (myRatings[recommendation.itemId]) {
      return;
    }

    return PRODUCTS_BY_ID[recommendation.itemId];
  });
  // console.log(recommendations);
  recommendations = recommendations.map(mr => ({
    ...PRODUCTS_BY_ID[mr.itemId],
    score: mr.score
  }));

  return recommendations.slice(0, count);
}

function getUserRatings(id) {
  return new Promise(function(resolve, reject) {
    getConnection(function(err, db) {
      if (err) {
        console.log("Database error: ", err.message);
      } else {
        let Comments = db.collection("Comments");

        Comments.find({ userID: id }).toArray(function(error, docs) {
          if (error) {
            console.log("Database error: ", error.message);
          } else {
            resolve(docs);
          }
        });
      }
    });
  });
}

function getRatings() {
  return new Promise(function(resolve, reject) {
    getConnection(function(err, db) {
      if (err) {
        console.log("Database error: ", err.message);
      } else {
        let Comments = db.collection("Comments");

        Comments.find({}).toArray(function(error, docs) {
          if (error) {
            console.log("Database error: ", error.message);
          } else {
            resolve(docs);
          }
        });
      }
    });
  });
}

function getProductList() {
  return new Promise(function(resolve, reject) {
    getConnection(function(err, db) {
      if (err) {
        console.log("Database error: ", err.message);
      } else {
        let Products = db.collection("Products");

        Products.find({}).toArray(function(error, docs) {
          if (error) {
            console.log("Database error: ", error.message);
          } else {
            let list = {};
            docs.map(doc => {
              list[doc._id] = doc;
            });
            resolve(list);
          }
        });
      }
    });
  });
}

module.exports = init;
