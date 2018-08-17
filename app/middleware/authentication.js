const jwt = require("jsonwebtoken");

const secret = require("../../config").secret;

const middleware = function(req, res, next) {
  var token = req.headers["x-access-token"];
  if (token) {
    console.log(token);
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.json({ message: err });
      } else {
        console.log(decoded);
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(403).send({ message: "No token provided." });
  }
};

module.exports = middleware;
