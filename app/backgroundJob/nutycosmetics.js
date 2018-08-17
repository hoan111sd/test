var getConnection = require("../config/database");
var cheerio = require("cheerio");
var _ = require("lodash");

var Crawler = require("crawler");

var saveTheProduct = require("./saveTheProduct");

var check = require("./checkIfProductExist");

const crawlTheFaceShop = function() {
  var productArr = [];

  var c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function(error, res, done) {
      if (error) {
        console.log(error);
      } else {
        var $ = res.$;

        let saleProducts = [];
        let newProducts = [];

        $(".suntory-sale-products .basel-products-element .products div").each(
          function() {
            let a = $(this)
              .find(".product-title a")
              .attr("href");

            if (a) {
              saleProducts.push(a);
            }
          }
        );

        $(
          ".suntory-recent-products .basel-products-element .products div"
        ).each(function() {
          let a = $(this)
            .find(".product-title a")
            .attr("href");
          if (a) {
            newProducts.push(a);
          }
        });

        crawlerProducts(saleProducts);
        crawlerProducts(newProducts, true);
      }
      crawlSaleProducts();
      done();
    }
  });
  c.queue("https://nutycosmetics.vn/");
};

function crawlSaleProducts() {
  var c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function(error, res, done) {
      if (error) {
        console.log(error);
      } else {
        var $ = res.$;

        let saleProducts = [];

        $(".site-content .products div").each(function() {
          let a = $(this)
            .find(".product-title a")
            .attr("href");
          if (a) {
            saleProducts.push(a);
          }
        });

        crawlerProducts(saleProducts);
      }
      done();
    }
  });
  c.queue("https://nutycosmetics.vn/san-pham-khuyen-mai");
}

function crawlerProducts(urls) {
  urls.map((url, index) => {
    crawlerDetail(url);
  });
}

function crawlerDetail(url, isNew = false) {
  var c = new Crawler({
    maxConnections: 10,
    callback: function(error, res, done) {
      if (error) {
        console.log(error);
      } else {
        var $ = res.$;

        let brand = $("#primary .summary-inner .brand_product a").text();

        if (brand) {
          brand = brand.replace(/[\n\r]+/g, "");
          brand = _.trimEnd(_.trimStart(brand));
        }

        let name = $("#primary .summary-inner h1").text();
        let image = $("#primary .product-images > div > div > figure a").attr(
          "href"
        );
        let price1 = "",
          price2 = "";
        let price = "";
        let sale1 = $("#primary .product-images span.onsale").text();

        $("#primary .summary-inner .price span.amount").each(function(index) {
          if (index === 0) {
            price1 = formatPrice($(this).text());
          }
        });
        price2 = formatPrice(
          $("#primary .summary-inner .price del > span.amount").text()
        );

        price = price1 || price2;

        let sale = formatSale(sale1);

        let info = getInfo(
          $("#primary .product-tabs-wrapper .entry-content").html()
        );

        let category = "Khác";

        $(".container .woocommerce-breadcrumb a").each(function(index) {
          if (index === 1) {
            category = getCategory($(this).text());
            return;
          }
        });

        let product = {
          name,
          nameLowerCase: name.toLowerCase(),
          price,
          sale,
          brand,
          mainImage: image,
          slides: [image],
          info,
          category,
          isNew,
          isHot: true,
          crawlFrom: "https://nutycosmetics.vn/",
          url
        };
        if (!check(product)) {
          if (product.price) {
            saveTheProduct(product);
          }
        }
      }
      done();
    }
  });
  c.queue(`${url}`);
}

function getCategory(category) {
  category = formatName(category);

  if (_.includes(category, "trang-diem")) {
    return "Trang điểm";
  }

  if (_.includes(category, "duong-da")) {
    return "Dưỡng da";
  }

  if (_.includes(category, "duong-toc")) {
    return "Dưỡng tóc";
  }

  if (_.includes(category, "nuoc-hoa")) {
    return "Nước hoa";
  }

  if (_.includes(category, "cham-soc-co-the")) {
    return "Dưỡng da";
  }

  if (_.includes(category, "mat")) {
    return "Mặt";
  }

  return "Khác";
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

function formatPrice(text) {
  let newText = text.replace(/[^0-9]/g, "");

  return newText;
}

function getInfo(info) {
  let $ = cheerio.load(info);

  $("img").each(function() {
    let src = $(this).attr("src");

    let dataLazySrc = $(this).attr("data-lazy-src");

    $(this).attr("src", dataLazySrc);
    $(this).attr("style", "max-width:100%;max-height:100%;");
  });
  return $.html();
}

function formatSale(text) {
  let price = text.replace(/[^0-9]/g, "");

  price = (parseInt(Number(price) / 10, 10) + 1) * 10;

  return price;
}

module.exports = crawlTheFaceShop;
