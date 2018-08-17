var getConnection = require("../config/database");
var cheerio = require("cheerio");
var _ = require("lodash");

var Crawler = require("crawler");

var saveTheProduct = require("./saveTheProduct");

let CATEGORIES = [];

let PRODUCT_LIST = [];

function init() {
  crawlCategories();
}

function crawlCategories() {
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
            let collection = {};
            if (index === 5) {
              collection = {
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
              collection = {
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
              collection = {
                name: removeAllTabs(text),
                urlSuffix: getCollection(
                  $(this)
                    .find("a")
                    .attr("href")
                ),
                title: formatTitle(text)
              };
            }
            CATEGORIES.push(collection);
          }
        });

        done();
        crawlProductsByCategory(CATEGORIES);
      }
    }
  });
  c.queue("https://thefaceshop.com.vn/collections/all");
}

function crawlProductsByCategory(categories) {
  let categoriesPromises = categories.map(category => {
    return crawlProductsByPage(category).then(function(res) {
      return res;
    });
  });
  Promise.all(categoriesPromises).then(function() {
    let productPromises = PRODUCT_LIST.map((product, index) => {
      crawlProduct(product, index).then(function() {});
    });

    Promise.all(productPromises).then(function() {
      // console.log("Done!");
    });
  });
}

function crawlProduct(product, index) {
  let mainProduct = {};
  return new Promise(resolve => {
    var c = new Crawler({
      maxConnections: 1,
      // This will be called for each crawled page
      callback: function(error, res, done) {
        if (error) {
          //
        } else {
          var $ = res.$;
          var slides = [];
          $("#product #product-img .slides").each(function() {
            let image = $(this)
              .find("a > img")
              .attr("src");

            image = `https:${image}`;
            if (image) {
              slides.push(image);
            }
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

          if (brand) {
            brand = brand.replace(/[\n\r]+/g, "");
            brand = _.trimEnd(_.trimStart(brand));
          }

          let category = product.category;

          let infoArray = [];
          $("#product-detail .des p").each(function(index) {
            infoArray.push($(this).text());
          });

          let overview = "";
          let des = $(".des");

          let info = getInfo($(".des").html());
          // let info = des.html();

          let tes = $(".des p").each(function() {
            overview += $(this).text() + " ";
          });

          overview = formatText(overview);

          if (!overview) {
            overview = des.text();
          }

          let keywords = [
            {
              id: 1,
              name: "mun"
            },
            {
              id: 2,
              name: "duong da"
            },
            {
              id: 3,
              name: "min da"
            },
            {
              id: 4,
              name: "sang da"
            },
            {
              id: 5,
              name: "duong"
            },
            {
              id: 6,
              name: "toc"
            },
            {
              id: 7,
              name: "muot toc"
            },
            {
              id: 8,
              name: "cham soc da"
            },
            {
              id: 9,
              name: "cham soc toc"
            }
          ];
          if (!brand || brand === "" || brand === null) {
            brand = "Unknow";
          }

          if (brand) {
            getConnection(function(err, db) {
              const Brands = db.collection("Brands");

              Brands.findOneAndUpdate(
                { name: brand },
                {
                  $set: {
                    name: brand,
                    id: formatBrand(brand.toLowerCase()),
                    text: formatTitle(brand),
                    createAt: new Date()
                  }
                },
                { upsert: true },
                function(err, result) {
                  let mainProduct = {
                    name: productName,
                    title: formatName(productName),
                    nameLowerCase: formatName(productName.toLowerCase()),
                    sale,
                    price: Number(priceOld.replace(/,|₫/g, "")),
                    mainImage: slides[0],
                    slides,
                    category,
                    brand: result.value,
                    rating: randomRating(),
                    ratingCount: randomRatingCount(),
                    isHot: true,
                    overview: overview,
                    info: info,
                    keywords,
                    crawlFrom: "https://thefaceshop.com.vn/",
                    url: `https://thefaceshop.com.vn${product.url}`
                  };
                  if (mainProduct.mainImage && mainProduct.overview) {
                    saveTheProduct(mainProduct);
                  }
                }
              );
              db.close();
            });
          }
        }
        done();
      }
    });
    c.queue(`https://thefaceshop.com.vn${product.url}`);
  });
}

function crawlProductsByPage(category) {
  return new Promise(resolve => {
    let categoryUrl = `https://thefaceshop.com.vn/collections/${
      category.urlSuffix
    }`;
    getConnection(function(err, db) {
      const Categories = db.collection("Categories");

      Categories.findOneAndUpdate(
        { name: category.name },
        {
          $set: {
            name: category.name,
            id: category.urlSuffix,
            text: formatTitle(category.name),
            createAt: new Date()
          }
        },
        { upsert: true },
        function(err, result) {
          getPages(categoryUrl, result.value).then(function(pages) {
            let pagePromises = pages.map(page => {
              return crawlProductUrls(page, result.value).then(function(res) {
                return res;
              });
            });
            Promise.all(pagePromises).then(function() {
              resolve(result.value);
            });
          });
        }
      );
      db.close();
    });
  });
}

function crawlProductUrls(page, category) {
  let products = [];
  return new Promise(resolve => {
    var c = new Crawler({
      maxConnections: 1,
      // This will be called for each crawled page
      callback: function(error, res, done) {
        if (error) {
          console.log(error);
        } else {
          var $ = res.$;

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
        resolve(products);
      }
    });
    c.queue(page);
  });
}

function getPages(url, category) {
  return new Promise(resolve => {
    let pages = [];

    var c = new Crawler({
      maxConnections: 1,
      // This will be called for each crawled page
      callback: function(error, res, done) {
        let PAGES = [];
        if (error) {
          console.log(error);
        } else {
          var $ = res.$;

          let paging = $("#pagination > ul > li").length;

          paging = paging - 2;
          if (category) {
            for (let i = 1; i <= paging; i++) {
              pages.push(
                `https://thefaceshop.com.vn/collections/${
                  category.id
                }?page=${i}`
              );
            }
          }
        }
        done();
        resolve(pages);
      }
    });
    c.queue(url);
  });
}

function getInfo(info) {
  if (!info) {
    return;
  } else {
    let $ = cheerio.load(info);

    $("img").each(function() {
      $(this).attr("style", "max-width:100%;max-height:100%;");
    });
    return $.html();
  }
}

function randomRating() {
  let rating = Math.random() * (5 - 3.5) + 3.5;

  return Math.round(rating * 10) / 10;
}

function randomRatingCount() {
  return Math.floor(Math.random() * (1000 - 50 + 1) + 50);
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
    .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
    .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
    .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
    .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ.+/g, "e")
    .replace(/ì|í|ị|ỉ|ĩ/g, "i")
    .replace(/[^a-zA-Z0-9\ ]/g, "");

  return newText;
}

function calSale(oldPrice, newPrice) {
  let a = Number(oldPrice.replace(/,|₫/g, ""));
  let b = Number(newPrice.replace(/,|₫/g, ""));

  let sale = Math.round(100 - b / a * 100);
  sale = (parseInt(sale / 10, 10) + 1) * 10;
  return sale;
}

function formatText(text) {
  let newText = text
    .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
    .replace(/đ/g, "d")
    .replace(/đ/g, "d")
    .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
    .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
    .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
    .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ.+/g, "e")
    .replace(/ì|í|ị|ỉ|ĩ/g, "i")
    .replace(/\n|\t/g, "");

  return newText;
}

function formatName(text) {
  let newText = text
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

function formatBrand(text) {
  let newText = text
    .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
    .replace(/đ/g, "d")
    .replace(/\ /g, "-")
    .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
    .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
    .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
    .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ.+/g, "e")
    .replace(/ì|í|ị|ỉ|ĩ/g, "i")
    .replace(/\n|\t/g, "");

  return newText;
}

module.exports = init;
