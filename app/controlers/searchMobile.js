const getConnection = require("../config/database");

const { convertCharStr2Hex } = require("../functions");

module.exports = function(req, res) {
  const searchText = req.body.searchText || "";
  var regex = new RegExp(searchText, "i");
  let search = formatName(searchText);

  let reg = "";
  for (var i = 0; i < search.length; i++) {
    let char = search.charAt(i);
    if(char === "u") {
      reg = reg + "(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|u)";
    }
    else if(char === "o") {
      reg = reg + "(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|o)";
    } 
    else if(char === "a") {
      reg = reg + "(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|a)";
    } 
    else if(char === "d") {
      reg = reg + "(đ|d)";
    }
    else if(char === "e") {
      reg = reg + "(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|e)";
    }
    else if(char === "y") {
      reg = reg + "(ỳ|ý|ỵ|ỷ|ỹ|y)";
    }
    else if(char === "i") {
      reg = reg + "(ì|í|ị|ỉ|ĩ|i)";
    }
    else {
      reg = reg + char;
    }
  }

  let newRegEx = new RegExp(reg, "i");
  
  var regexInfo = new RegExp(convertCharStr2Hex(reg), "i");

  getConnection(function(err, db) {
    var Products = db.collection("Products");

    Products.find({
      $or: [
        {
          name: newRegEx
        },
        {
          description: newRegEx
        },
        {
          brand: newRegEx
        },
        {
          info: regexInfo
        },
        {
          instructions: newRegEx
        },
        {
          ingerdients: newRegEx
        }
      ]
    }).toArray(function(err, docs) {
      if (err) {
        throw err;
        res.json({
          success: false,
          errorCode: "unknow",
          error: "Something went wrong!"
        });
      } else {
        res.json({
          success: true,
          data: docs,
          message: ""
        });
      }
    });
  });
};
function formatName(text) {
  let newText = text
    .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
    .replace(/đ/g, "d")
    .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
    .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
    .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
    .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ.+/g, "e")
    .replace(/ì|í|ị|ỉ|ĩ/g, "i");

  return newText;
}