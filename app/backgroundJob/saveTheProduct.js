var getConnection = require("../config/database");

var async = require("async");

var _ = require("lodash");

function saveProduct(product) {
  if (!product) {
    return;
  }
  if (!product.rating) {
    product.rating = "0";
  }
  product.createAt = new Date();

  let category = product.category;
  async.parallel([
    function(callback) {
      getConnection(function(err, db) {
        const Categories = db.collection("Categories");

        Categories.update(
          { name: category.name },
          {
            $set: {
              name: category.name,
              id: category.id,
              text: category.text,
              createAt: new Date()
            }
          },
          { upsert: true },
          function(err, result) {
            if (err) {
              throw err;
            } else {
            }
          }
        );
        db.close();
      });
    },
    function(callback) {
      getConnection(function(err, db) {
        const Brands = db.collection("Brands");
        let t = product.brand;
        if (t) {
          Brands.update(
            { name: t.name },
            { name: t.name, id: t.id, text: t.text, updateAt: new Date() },
            { upsert: true },
            function(err, result) {
              if (err) {
                throw err;
              } else {
                callback(null);
              }
            }
          );
        }

        db.close();
      });
    },
    function(callback) {
      getConnection(function(err, db) {
        const Products = db.collection("Products");

        Products.update(
          { name: product.name },
          product,
          { upsert: true },
          function(err, result) {
            if (err) {
              throw err;
            } else {
            }
          }
        );
        db.close();
      });
    }
  ]);
}

function getCategory(category) {
  category = formatName(category.toLowerCase());

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

module.exports = saveProduct;
