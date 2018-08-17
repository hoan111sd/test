var getConnection = require("../config/database");
var cheerio = require("cheerio");
var _ = require("lodash");

var Crawler = require("crawler");

var categories = {
  "1": "Dưỡng Da",
  "2": "Dưỡng Da",
  "3": "Làm Sạch",
  "4": "Làm Sạch"
};

const defaultRoute = function(req, res) {
  var productArr = [];

  var c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function(error, res, done) {
      if (error) {
        console.log(error);
      } else {
        var $ = res.$;

        $(".category-featured").each(function() {
          let category = $(this)
            .find(".container .navbar-brand a")
            .text();

          let productName = [];

          $(this)
            .find(
              ".product-featured .product-featured-tab-content .tab-container .product-list"
            )
            .each(function() {
              $(this)
                .find(".right-block .product-name")
                .each(function() {
                  let detailUrl = $(this)
                    .find("a")
                    .attr("href");
                  console.log(detailUrl);
                  productName.push(detailUrl);
                });
            });

          crawlerCategory(category, productName);

          console.log("=====================>");
        });
      }
      done();
    }
  });
  c.queue("https://thefaceshop.com.vn/");
};

function crawlerProductDetail(arr) {}

function crawlerCategory(category, productName) {
  console.log("-------------------" + category + "-----------------");
  if (!productName) {
    return;
  }

  productName.map((name, index) => {
    let productName = name.toString().toLowerCase();
    productName = productName.replace(/\s+/g, "-");
    crawlerDetail(productName, category);
  });
}

function crawlerDetail(name, categoryName) {
  var c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function(error, res, done) {
      if (error) {
        console.log(error);
      } else {
        var $ = res.$;
        var slides = [];
        $("#product #product-img .slides").each(function() {
          let image = $(this)
            .find("a > img")
            .attr("src");
          image = image.substring(2);
          slides.push(image);
        });

        let productName = $("#product .pb-right-column h1").text();

        let priceOld = $(
          "#product .pb-right-column .product-price-group .old-price"
        ).text();
        let priceNew = $(
          "#product .pb-right-column .product-price-group .price"
        ).text();
        let sale = calSale(priceOld, priceNew);

        let rating = 0;

        let brand = $(
          "#product .pb-right-column .product-info .info-item .vendor"
        ).text();

        let category = categoryName;

        let infoArray = [];

        $("#product-detail .des p").each(function(index) {
          infoArray.push($(this).text());
        });
        
        let { description, ingerdients ,instructions } = infoAnalyst(infoArray);

        let product = {
          productName,
          sale,
          price: Number(priceOld.replace(/,|₫/g, "")),
          mainImage: slides[0],
          slides,
          category,
          brand,
          description,
          ingerdients,
          instructions
        }

        saveProduct(product);

      }
      done();
    }
  });
  c.queue(`https://thefaceshop.com.vn${name}`);
}


function saveProduct(product) {
  if(!product) {
    return;
  }

  product.createAt = new Date();
  getConnection(function(err, db) {
    const Products = db.collection("Products");

    Products.insertOne(product, function(err, result) {
      if (err) {
        throw err;
      } else {
        console.log("Success!");
      }
    });
  });
}


function infoAnalyst(arr) {
  let description1 = "";
  let ingerdients1 = "";
  let instructions1 = "";
  let des = false, ing = false, ins = false;

  _.each(arr, function(text, index) {
    if(text === "Công dụng") {
      des = true;
      return;
    }

    if(text === "Thành phần") {
      ing = true;
      des = false;
      return;
    } 
    if(text === "Hướng dẫn sử dụng") {
      ins = true;
      ing = false;
      return;
    }
    if(des === true) {
      description1 += text + "\n";
    }

    if(ing === true) {
      ingerdients1 += text + "\n";
    }

    if(ins === true) {
      instructions1 += text + "\n";
    }
    
  });
  return {
    description: description1,
    ingerdients : ingerdients1,
    instructions: instructions1
  }
}


function formatName(text) {
  let newText = text
    .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
    .replace(/\ /g, "-")
    .replace(/đ/g, "d")
    .replace(/đ/g, "d")
    .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
    .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
    .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
    .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ.+/g, "e")
    .replace(/ì|í|ị|ỉ|ĩ/g, "i")
    .replace(/[^a-zA-Z0-9\-]/g, "");

  return newText;
}

function calSale(oldPrice, newPrice) {
  let a = Number(oldPrice.replace(/,|₫/g, ""));
  let b = Number(newPrice.replace(/,|₫/g, ""));

  let sale = Math.round(100 - b / a * 100);
  sale = (parseInt(sale / 10, 10) + 1) * 10;
  return sale;
}

module.exports = defaultRoute;
