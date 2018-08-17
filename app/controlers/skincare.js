const _ = require("lodash");

const getConnection = require("../config/database");

const { convertCharStr2Hex } = require("../functions");

module.exports = function(req, res) {
  var skin = req.body.skin || "";

  console.log(skin);

  console.log(skin);
  var skins = {
    vang: {
      skin: "vang",
      results: [
        /trắng da/,
        /tốt cho da màu/,
        /dưỡng da/,
        /trắng sáng/,
        /dưỡng sáng/,
        /tốt cho mọi loại da/
      ],
      resultsInfo: [
        new RegExp(convertCharStr2Hex("trắng da"), "i"),
        new RegExp(convertCharStr2Hex("tốt cho da màu"), "i"),
        new RegExp(convertCharStr2Hex("dưỡng da"), "i"),
        new RegExp(convertCharStr2Hex("trắng sáng"), "i"),
        new RegExp(convertCharStr2Hex("dưỡng sáng"), "i"),
        new RegExp(convertCharStr2Hex("tốt cho mọi loại da"), "i")
      ]
    },
    trang: {
      skin: "trang",
      results: [
        /trắng hồng/,
        /hồng da/,
        /phù hợp với da trắng/,
        /dưỡng da/,
        /sáng da/,
        /dưỡng sáng/,
        /trắng da/
      ],
      resultsInfo: [
        new RegExp(convertCharStr2Hex("trắng hồng"), "i"),
        new RegExp(convertCharStr2Hex("hồng da"), "i"),
        new RegExp(convertCharStr2Hex("phù hợp với da trắng"), "i"),
        new RegExp(convertCharStr2Hex("dưỡng da"), "i"),
        new RegExp(convertCharStr2Hex("dưỡng sáng"), "i"),
        new RegExp(convertCharStr2Hex("trắng da"), "i")
      ]
    },
    ngam: {
      skin: "ngam",
      results: [
        /trắng sáng/,
        /trắng da/,
        /trắng hồng/,
        /dưỡng trắng/,
        /tốt cho da ngăm/,
        /tốt cho mọi loại da/
      ],
      resultsInfo: [
        new RegExp(convertCharStr2Hex("trắng sáng"), "i"),
        new RegExp(convertCharStr2Hex("trắng da"), "i"),
        new RegExp(convertCharStr2Hex("trắng hồng"), "i"),
        new RegExp(convertCharStr2Hex("dưỡng trắng"), "i"),
        new RegExp(convertCharStr2Hex("tốt cho da ngăm"), "i"),
        new RegExp(convertCharStr2Hex("tốt cho mọi loại da"), "i")
      ]
    },
    den: {
      skin: "den",
      results: [
        /trắng sáng/,
        /trắng da/,
        /trắng hồng/,
        /dưỡng trắng/,
        /tốt cho da ngăm/,
        /tốt cho mọi loại da/
      ],
      resultsInfo: [
        new RegExp(convertCharStr2Hex("trắng sáng"), "i"),
        new RegExp(convertCharStr2Hex("trắng da"), "i"),
        new RegExp(convertCharStr2Hex("trắng hồng"), "i"),
        new RegExp(convertCharStr2Hex("dưỡng trắng"), "i"),
        new RegExp(convertCharStr2Hex("tốt cho da ngăm"), "i"),
        new RegExp(convertCharStr2Hex("tốt cho mọi loại da"), "i")
      ]
    },
    khac: {
      skin: "khac",
      results: [
        /trắng da/,
        /tốt cho da màu/,
        /dưỡng da/,
        /trắng sáng/,
        /dưỡng sáng/,
        /tốt cho mọi loại da/
      ],
      resultsInfo: [
        new RegExp(convertCharStr2Hex("trắng sáng"), "i"),
        new RegExp(convertCharStr2Hex("tốt cho da màu"), "i"),
        new RegExp(convertCharStr2Hex("dưỡng da"), "i"),
        new RegExp(convertCharStr2Hex("dưỡng trắng"), "i"),
        new RegExp(convertCharStr2Hex("trắng sáng"), "i"),
        new RegExp(convertCharStr2Hex("dưỡng sáng"), "i"),
        new RegExp(convertCharStr2Hex("tốt cho mọi loại da"), "i")
      ]
    }
  };

  let skin1 = formatName(_.trimEnd(_.trimStart(skin)));
  let arr = Object.keys(skins);

  let match = null;
  arr.map(skin => {
    if (_.includes(skin1, skin)) {
      match = skins[skin];
      return false;
    }
  });

  if (!match) {
    match = skins["khac"];
  }

  let caseSkin = match.results;
  let infoCase = match.resultsInfo;
  getConnection(function(err, db) {
    const Products = db.collection("Products");

    Products.find({
      $or: [
        {
          description: {
            $in: caseSkin
          }
        },
        {
          mame: {
            $in: caseSkin
          }
        },
        {
          info: {
            $in: caseSkin
          }
        },
        {
          instructions: {
            $in: caseSkin
          }
        },
        {
          info: {
            $in: infoCase
          }
        }
      ]
    }).toArray(function(err, docs) {
      if (err) {
        res.json({ success: false, error: "Something went wrong!" });
      } else {
        res.json({ success: true, data: docs });
      }
    });
  });
};

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
