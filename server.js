var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var path = require("path");
var session = require("express-session");
var app = express();

var passport = require("passport");

var api = new express.Router();

var admin = new express.Router();

var crawlTheFaceShop = require("./app/backgroundJob/thefaceshop");

var crawlKosmebox = require("./app/backgroundJob/kosmebox");

var crawlNutyCosmestics = require("./app/backgroundJob/nutycosmetics");

var a = require("./app/backgroundJob");

require("./app/config/admin/passport")(passport);
require("./app/config/passport")(passport);

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/app/views"));

app.use(express.static(path.join(__dirname, "/app/public")));

app.use(express.static(path.join(__dirname, "/dist/")));

app.use(morgan("dev"));

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(
  session({
    secret: "vidyapathaisalwaysrunning",
    resave: true,
    saveUninitialized: true,
    cookie: {
      _expires: 1000 * 60 * 60 * 24 * 7
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", api);
app.use("/admin", admin);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
});

require("./app/config/admin/routes")(admin, passport);
require("./app/config/routes")(api, passport);
http: app.listen(process.env.PORT || 3001, function() {
  console.log("Server is running at http://localhost:3001/");
  function crawl() {
    crawlTheFaceShop();
    // crawlKosmebox();
    // crawlNutyCosmestics();
    setTimeout(crawl, 1000 * 60 * 60 * 24);
  }
  // crawl();
});
