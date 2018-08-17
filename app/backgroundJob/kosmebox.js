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
        let categories = [];

        let urlDetails = [];
        $(".carousel-13.carousel-product .htabs.box-heading a").each(
          function() {
            categories.push($(this).text());
          }
        );

        $(".tab-content.box-content .swiper-wrapper div").each(function(index) {
          let urlDetail = $(this)
            .find(".product-wrapper .product-details .caption .name a")
            .attr("href");
          if (urlDetail) {
            urlDetails.push(urlDetail);
          }
        });
        crawlerProducts(urlDetails);
      }
      done();
    }
  });
  c.queue("http://www.kosmebox.com/");
};

function crawlerProducts(urls) {
  urls.map((url, index) => {
    crawlerDetail(url);
  });
}

function crawlerDetail(url) {
  var c = new Crawler({
    maxConnections: 10,
    callback: function(error, res, done) {
      if (error) {
        console.log(error);
      } else {
        var $ = res.$;

        let name = $("#content h1.heading-title").text();
        let category = getCategory(formatName(name).toLowerCase());

        let brand = "";
        let slides = [];
        let price = "";
        let sale = "";
        let isNew = false;
        let newProduct = "";
        let mainImage = $("#content .row.product-info .left .image a").attr(
          "href"
        );
        let images = $(
          "#content .row.product-info .left #product-gallery .swiper-wrapper a"
        ).length;
        $(
          "#content .row.product-info .left #product-gallery .swiper-wrapper a"
        ).each(function(index) {
          if (index < 3) {
            slides.push($(this).attr("href"));
          }
        });

        if (slides.length === 0) {
          slides.push(mainImage);
        }

        brand = getBrandName(
          $(
            "#content .row.product-info .right #product .description .p-brand a"
          ).text()
        );
        if (brand) {
          brand = brand.replace(/[\n\r]+/g, "");
          brand = _.trimEnd(_.trimStart(brand));
        }
        let info = $(
          "#content .product-tabs .tabs-content #tab-description"
        ).html();

        price = formatPrice(
          $(
            "#content .row.product-info .right #product .list-unstyled.price .price-old"
          ).text()
        );

        if (!price) {
          price = formatPrice(
            $(
              "#content .row.product-info .right #product .list-unstyled.price .product-price"
            ).text()
          );
        }

        sale = formatSale(
          $("#content .row.product-info .left .image .label-sale").text()
        );

        newProduct = $(
          "#content .row.product-info .left .image .label-latest"
        ).text();
        if (formatName(newProduct.toLowerCase()) === "moi") {
          isNew = true;
        }

        let product = {
          name: name,
          nameLowerCase: name.toLowerCase(),
          sale,
          price,
          mainImage,
          slides,
          category,
          brand,
          isNew,
          isHot: true,
          crawlFrom: "http://www.kosmebox.com/",
          url: url,
          info
        };
        if (!check(product)) {
          saveTheProduct(product);
        }
      }
      done();
    }
  });
  c.queue(`${url}`);
}

function infoAnalyst(arr) {}

function getCategory(name) {
  let categories = {
    "nuoc-hoa": "Nước hoa",
    "my-pham": "Mỹ phẩm",
    "mat-na": "Mặt",
    "duong-da": "Dưỡng da",
    "duong-am": "Dưỡng da",
    "duong-m": "Dưỡng da",
    "chong-lao-hoa": "Dưỡng da",
    "ngan-ngua-mun": "Dưỡng da",
    "duong-trang": "Dưỡng da",
    "duong-trang-da": "Dưỡng da",
    "duong-sang": "Dưỡng da",
    "bao-ve-da": "Dưỡng da",
    "ke-mat": "Trang điểm",
    "trang-diem": "Trang điểm",
    "tri-gau": "Dưỡng tóc",
    "duong-toc": "Dưỡng tóc",
    "u-toc": "Dưỡng tóc",
    "nhuom-toc": "Dưỡng tóc",
    "sua-rua-mat": "Dưỡng da",
    "rua-mat": "Dưỡng da",
    mun: "Dưỡng da",
    son: "Trang điểm",
    ke: "Trang điểm",
    mat: "Mặt",
    face: "Mặt",
    duong: "Dưỡng da"
  };

  var keyNames = Object.keys(categories);

  let cate = "";

  _.each(keyNames, function(value) {
    if (name.includes(value)) {
      cate = categories[value];
      return false;
    } else {
      cate = "Khác";
    }
  });
  return cate;
}

function getBrandName(brand) {
  let text = formatName(brand);
  text = text.toLowerCase();
  if (text.indexOf("my-pham") !== -1) {
    return brand.substring(8);
  }
  return brand;
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

function formatSale(text) {
  let price = text.replace(/[^0-9]/g, "");

  price = (parseInt(Number(price) / 10, 10) + 1) * 10;

  return price;
}

function formatPrice(text) {
  let price = text.replace(/[^0-9]/g, "");
  return price;
}

function compare(strA, strB) {
  for (var result = 0, i = strA.length; i--; ) {
    if (typeof strB[i] == "undefined" || strA[i] == strB[i]);
    else if (strA[i].toLowerCase() == strB[i].toLowerCase()) result++;
    else result += 4;
  }
  return (
    1 -
    (result + 4 * Math.abs(strA.length - strB.length)) /
      (2 * (strA.length + strB.length))
  );
}

module.exports = crawlTheFaceShop;
