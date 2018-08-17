var getConnection = require("../config/database");
var cheerio = require("cheerio");
var _ = require("lodash");

var Crawler = require("crawler");

var saveTheProduct = require("./saveTheProduct");

let PRODUCT_LIST = [];
let COLLECTIONS_LIST = [];
let COLLECTION_NAME_LIST = [];

let CRAWLER_PAGES = [];

const crawlTheFaceShop = function() {
  let collections = [];
  var c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function(error, res, done) {
      if (error) {
        console.log(error);
      } else {
        var $ = res.$;

        $(".tree-menu > li").each(function(index, item) {
          if (index > 1) {
            let parentsCollection = {};
            if (index === 5) {
              parentsCollection = {
                name: "Custion",
                urlSuffix: getCollection(
                  $(this)
                    .find("a")
                    .attr("href")
                ),
                title: formatTitle("Custion")
              };
            } else if (index === 9) {
              let text = $(this)
                .find("a")
                .text();
              parentsCollection = {
                name: removeAllTabs(text),
                urlSuffix: getCollection(
                  $(this)
                    .find("a")
                    .attr("href")
                ),
                title: formatTitle(text)
              };
            } else {
              let text = $(this)
                .find("a > span")
                .text();
              parentsCollection = {
                name: removeAllTabs(text),
                urlSuffix: getCollection(
                  $(this)
                    .find("a")
                    .attr("href")
                ),
                title: formatTitle(text)
              };
            }
            CRAWLER_PAGES.push(
              `https://thefaceshop.com.vn/collections/${
                parentsCollection.urlSuffix
              }`
            );
            COLLECTIONS_LIST.push(parentsCollection);
          }
        });

        done();
        getNumberOfItems(COLLECTIONS_LIST, CRAWLER_PAGES);
      }
    }
  });
  c.queue("https://thefaceshop.com.vn/collections/all");
};

crawlTheFaceShop();

function getNumberOfItems(collections, crawlPages) {
  crawlPages.map((url, index) => {
    var c = new Crawler({
      maxConnections: 1,
      // This will be called for each crawled page
      callback: function(error, res, done) {
        let PAGES = [];
        let productsByCategory = {};
        if (error) {
          console.log(error);
        } else {
          var $ = res.$;

          productsByCategory["category"] = collections[index];
          let paging = $("#pagination > ul > li").length;

          paging = paging - 2;
          // console.log(url);
          for (let i = 1; i <= paging; i++) {
            PAGES.push(
              `https://thefaceshop.com.vn/collections/${
                collections[index].urlSuffix
              }?page=${i}`
            );
          }
        }

        done();
        productsDetailUrls(PAGES, productsByCategory);
      }
    });
    c.queue(url);
  });
}

function productsDetailUrls(pages, category) {
  let promises = pages.map((item, index) => {
    return b(item, category.category.urlSuffix).then(function(arr) {
      // console.log(arr);
      return arr;
    });
  });

  Promise.all(promises).then(function(results) {
    console.log();
    getConnection(function(err, db) {
      const Test = db.collection("Test");

      Test.insertOne({ products: PRODUCT_LIST }, function(err, doc) {
        console.log("Success!");
      });
      db.close();
    });
  });
}

function b(item, category) {
  let products = [];
  return new Promise((resolve, reject) => {
    var c = new Crawler({
      maxConnections: 1,
      // This will be called for each crawled page
      callback: function(error, res, done) {
        if (error) {
          console.log(error);
        } else {
          var $ = res.$;
          //   console.log(item.url);

          $(".product-list > li").each(function(index, item) {
            $(this)
              .find(".right-block .product-name")
              .each(function() {
                let detailUrl = $(this)
                  .find("a")
                  .attr("href");

                let product = {
                  category: category,
                  url: detailUrl
                };
                products.push(detailUrl);
                PRODUCT_LIST.push(product);
              });
          });
        }
        done();
        resolve({ category: category, products });
      }
    });
    c.queue(item);
  });
}

function a(url) {
  let products = [];
  return new Promise((resolve, reject) => {});
}

function removeAllTabs(str) {
  let newText = str.replace(/\t/g, "");
  newText = newText.trim();
  return newText;
}

function getCollection(str) {
  let a = str.split("/");
  return a && a[2];
}

function formatTitle(str) {
  let newText = str
    .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
    .replace(/đ/g, "d")
    .replace(/đ/g, "d")
    .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
    .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
    .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
    .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ.+/g, "e")
    .replace(/ì|í|ị|ỉ|ĩ/g, "i")
    .replace(/[^a-zA-Z0-9\ ]/g, "");

  return newText;
}
