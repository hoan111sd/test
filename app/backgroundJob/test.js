var Crawler = require("crawler");

var c = new Crawler({
  maxConnections: 1,
  // This will be called for each crawled page
  callback: function(error, res, done) {
    if (error) {
      console.log(error);
    } else {
      var $ = res.$;

      let brand = $(
        "#product .pb-right-column .product-info .info-item .vendor"
      ).text();

      console.log("BRand", brand);
    }
    done();
  }
});
c.queue(
  "https://thefaceshop.com.vn/products/mat-na-giup-da-san-chac-the-solution-firming-face-mask-set-5pcs"
);
