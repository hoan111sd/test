const adminRoutes = require("../../controlers/admin/");

const middleware = require("../../middleware/authentication");

const jwt = require("jsonwebtoken");

const secret = require("../../../config").secret;

module.exports = function(app, passport) {
  app.get("/", isLoggedIn, adminRoutes.login);

  app.get("/users", isLogged, adminRoutes.users);

  app.get("/orders", isLogged, adminRoutes.orders);

  app.get("/products", isLogged, adminRoutes.products);

  app.get("/editUser", isLogged, adminRoutes.editUser);

  app.get("/addProducts", isLogged, adminRoutes.addProducts);

  app.get("/addSlides", isLogged, adminRoutes.addSlides);

  app.get("/product/:id", isLogged, adminRoutes.editProduct);

  app.get("/comments", isLogged, adminRoutes.commentSettings);

  app.get("/comments/:id", isLogged, adminRoutes.comments);

  app.get("/editComment/:id", isLogged, adminRoutes.editComment);

  app.post("/login", function(req, res, next) {
    passport.authenticate("admin-local-login", function(err, user, info) {
      if (err) {
        res.json({
          success: false,
          errorCode: err.message,
          error: err.message
        });
      } else if (info) {
        res.json({
          success: false,
          errorCode: info.message,
          error: info.message
        });
      } else {
        req.logIn(user, function(error) {
          res.json({
            success: true,
            data: [
              {
                _id: user._id,
                profile: user.profile,
                token: user.token,
                ssID: user.ssID
              }
            ]
          });
        });
      }
    })(req, res, next);
  });
};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    if (req.user.role === "admin") {
      res.redirect("/admin/users");
    } else {
      res.redirect("/admin/");
    }
  } else {
    return next();
  }
}

function isLogged(req, res, next) {
  if (req.isAuthenticated()) {
    if (req.user.role === "admin") {
      req.headers["x-access-token"] = req.user.token;
      return next();
    } else {
      res.redirect("/");
    }
  } else {
    res.redirect("/admin");
  }
}
