const validateEmail = function(email) {
  var pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$/;

  return pattern.test(email);
};

var s = "Ch&#x1ED1;ng";
function convertHexNCR2Char(str) {
  str = str.replace(/&#x([A-Fa-f0-9]{1,6});/g, function(matchstr, parens) {
    return hex2char(parens);
  });
  return str;
}

function hex2char(hex) {
  var result = "";
  var n = parseInt(hex, 16);
  if (n <= 0xffff) {
    result += String.fromCharCode(n);
  } else if (n <= 0x10ffff) {
    n -= 0x10000;
    result +=
      String.fromCharCode(0xd800 | (n >> 10)) +
      String.fromCharCode(0xdc00 | (n & 0x3ff));
  } else {
    result += "hex2Char error: Code point out of range: " + dec2hex(n);
  }
  return result;
}

function convertCharStr2SelectiveCPs(
  str,
  parameters,
  pad,
  before,
  after,
  base
) {
  var haut = 0;
  var n = 0;
  var cp;
  var CPstring = "";
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i);
    if (b < 0 || b > 0xffff) {
      CPstring +=
        "Error in convertCharStr2SelectiveCPs: byte out of range " +
        dec2hex(b) +
        "!";
    }
    if (haut != 0) {
      if (0xdc00 <= b && b <= 0xdfff) {
        if (base == "hex") {
          CPstring +=
            before +
            dec2hex(0x10000 + ((haut - 0xd800) << 10) + (b - 0xdc00)) +
            after;
        } else {
          cp = 0x10000 + ((haut - 0xd800) << 10) + (b - 0xdc00);
          CPstring += before + cp + after;
        }
        haut = 0;
        continue;
      } else {
        CPstring +=
          "Error in convertCharStr2SelectiveCPs: surrogate out of range " +
          dec2hex(haut) +
          "!";
        haut = 0;
      }
    }
    if (0xd800 <= b && b <= 0xdbff) {
      haut = b;
    } else {
      if (parameters.match(/ascii/) && b <= 127) {
        //  && b != 0x3E && b != 0x3C &&  b != 0x26) {
        CPstring += str.charAt(i);
      } else if (b <= 255 && parameters.match(/latin1/)) {
        // && b != 0x3E && b != 0x3C &&  b != 0x26) {
        CPstring += str.charAt(i);
      } else {
        if (base == "hex") {
          cp = dec2hex(b);
          if (pad) {
            while (cp.length < 4) {
              cp = "0" + cp;
            }
          }
        } else {
          cp = b;
        }
        CPstring += before + cp + after;
      }
    }
  }
  return CPstring;
}

function dec2hex(textString) {
  return (textString + 0).toString(16).toUpperCase();
}

function convertCharStr2Hex(str) {
  return convertCharStr2SelectiveCPs(str, "ascii", true, "&#x", ";", "hex");
}

module.exports = { validateEmail, convertHexNCR2Char, convertCharStr2Hex };
