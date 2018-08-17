const getConnection = require("../config/database");

const ObjectId = require("mongodb").ObjectID;

const prepareProducts = require("./prepareProducts");

const predictWithContentBased = require("./contentBased");

let PRODUCTS_LIST = {};
let RAW_PRODUCTS_BY_ID = {};
//   getProductList().then(function(list) {
//     PRODUCTS_LIST = list;

//     console.log(PRODUCTS_LIST);
//   });

let productsMetaDataPromise = new Promise((resolve, reject) => {
  getProductList().then(list => {
    PRODUCTS_LIST = list;
    resolve(PRODUCTS_LIST);
  });
});

function init(title) {
  return new Promise(resolve => {
    Promise.all([productsMetaDataPromise]).then(([productsMetaData]) => {
      RAW_PRODUCTS_BY_ID = productsMetaData;

      const { PRODUCTS_BY_ID, PRODUCTS_IN_LIST, X } = prepareProducts(
        productsMetaData
      );

      // console.log("After prepare products");
      const contentBasedRecommendation = predictWithContentBased(
        X,
        PRODUCTS_IN_LIST,
        title
      );
      //lay ra 10 sp có score cao nhat
      let a = sliceAndDice(contentBasedRecommendation, RAW_PRODUCTS_BY_ID, 10);

      resolve(a);
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

function getKeywordsList() {
  return new Promise(function(resolve, reject) {
    getConnection(function(err, db) {
      if (err) {
        console.log("Database error: ", err.message);
      } else {
        let Keywords = db.collection("Keywords");

        Keywords.find({}).toArray(function(error, docs) {
          if (error) {
            console.log("Database error: ", error.message);
          } else {
            let list = {};
            docs.map(doc => {
              list[doc.productId] = doc;
            });
            resolve(list);
          }
        });
      }
    });
  });
}

function sliceAndDice(recommendations, MOVIES_BY_ID, count) {
  recommendations = recommendations.filter(
    recommendation => MOVIES_BY_ID[recommendation.movieId]
  );

  recommendations = recommendations.map((mr, index) => ({
    ...MOVIES_BY_ID[mr.movieId],
    score: mr.score
  }));

  return recommendations.slice(0, count);
}

function softEval(string, escape) {
  if (!string) {
    return escape;
  }

  try {
    return eval(string);
  } catch (e) {
    return escape;
  }
}

module.exports = init;
