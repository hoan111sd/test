const getConnection = require("../config/database");
const formidable = require("formidable");

const path = require("path");

const fs = require("fs");

module.exports = function(req, res) {
  var form = new formidable.IncomingForm();

  form.multiples = true;

  form.uploadDir = path.join(__dirname, "../public/images");

  form.on("file", function(field, file) {});

  form.parse(req, function(err, fields, file) {
    if (fields) {
      if (!fields.name) {
        res.json({
          success: false,
          errorCode: "invalidInput",
          error: "Please enter name"
        });
      } else if (!fields.category) {
        res.json({
          success: false,
          errorCode: "invalidInput",
          error: "Please enter category"
        });
      } else if (!fields.image) {
        res.json({
          success: false,
          errorCode: "invalidInput",
          error: "Please enter image"
        });
      } else if (!checkValidImageUrl(fields.image)) {
        res.json({
          success: false,
          errorCode: "invalidInput",
          error: "Please enter a valid image url"
        });
      } else {
        //var uploadFiles = file.file;
        var name = fields.name || "";
        var price = fields.price || "";
        var brand = fields.brand || "";
        var rating = fields.rating || "";
        var sale = fields.sale || "";
        var category = fields.category || "";
        var description = fields.description || "";
        var ingerdients = fields.ingerdients || "";
        var instructions = fields.instructions || "";

        var mainImage = fields.image || "";
        var slides = fields.slides.split(",");

        if (
          !checkValidImageUrl(slides[0]) ||
          !checkValidImageUrl(slides[1]) ||
          !checkValidImageUrl(slides[2])
        ) {
          res.json({
            success: false,
            errorCode: "invalidInput",
            error: "Please enter a valid image url"
          });
        }

        price = price.replace(/[^a-zA-Z0-9\-]/g, "");
        const Product = {
          name: name,
          price: price,
          brand: brand,
          rating: rating,
          sale: sale,
          category: category,
          description: description,
          mainImage: mainImage,
          slides: slides,
          ingerdients: ingerdients,
          instructions: instructions,
          createAt: new Date()
        };

        async.parallel([
          function(callback) {
            getConnection(function(err, db) {
              const Brands = db.collection("Brands");
              if (
                Product.brand != "" &&
                Product.brand != null &&
                Product.brand != undefined
              ) {
                Brands.update(
                  { name: Product.brand },
                  { name: Product.brand, updateAt: new Date() },
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

              Products.insertOne(Product, function(err, result) {
                if (err) {
                  throw err;
                } else {
                  res.json({
                    success: true,
                    message: "Product Added Successfully"
                  });
                }
              });
              db.close();
            });
          }
        ]);
      }
    }
  });
};

getExtention = function(str) {
  var a = str.split(".");
  if (a.length === 1 || (a[0] === "" && a.length === 2)) {
    return "";
  }
  return a.pop();
};

getName = function(str) {
  if (!str) {
    return;
  }
  var a = str.split("/");
  var b = a.pop();
  var c = b.split("_");
  return c.pop();
};

checkValidImageUrl = function(str) {
  var regex = new RegExp(
    /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/,
    "i"
  );
  var res = regex.test(str);
  return res;
};
