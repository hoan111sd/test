var middleware = require("../middleware/authentication");

const apiController = require("../controlers");

const apiAdminController = require("../controlers/adminApi");

module.exports = function(app, passport, recaptcha) {
  app.get("/", apiController.defaultRoute);

  app.get("/products", apiController.products);

  app.get("/products/all", apiController.products);

  app.post("/login", function(req, res, next) {
    passport.authenticate("local-login", function(err, user, info) {
      if (err) {
        res.json({
          success: false,
          errorCode: err.message,
          error: err.message
        });
      } else if (info) {
        console.log(info);
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
                email: user.email,
                phone: user.phone,
                address: user.address,
                token: user.token,
                ssID: user.ssID
              }
            ]
          });
        });
      }
    })(req, res);
  });

  app.post("/loginFB", apiController.login);

  app.post("/register", function(req, res, next) {
    passport.authenticate("local-register", function(err, user, info) {
      if (err) {
        res.json({
          success: false,
          errorCode: "connectionErr",
          error: err.message
        });
      } else if (info) {
        res.json({
          success: false,
          errorCode: info.message,
          error: info.message
        });
      } else {
        res.json({
          success: true,
          message: "successfull register"
        });
      }
    })(req, res);
  });

  app.get("/categories", apiController.categories);

  app.get("/category/:categoryID", apiController.category);

  app.get("/category/:categoryID/:page", apiController.category);

  app.post("/rating", middleware, apiController.rating);

  app.get("/api", middleware, function(req, res) {
    res.json({ success: true });
  });

  app.get("/users", middleware, apiController.userInfo);

  app.post("/submitProduct", apiController.submitProduct);

  app.get("/product/:id", apiController.productDetail);

  app.get("/comments/:id", apiController.comments);

  app.post("/addToWishList", apiController.addToWishList);

  app.post("/getCart", apiController.getCart);

  app.post("/search", apiController.searchMobile);

  app.post("/submitOrders", function(req, res) {
    res.json({ success: true, message: "Dat hang thanh cong" });
  });

  app.post("/submitComment", apiController.submitComment);

  app.put(
    "/deleteProductFromWishList",
    apiController.deleteProductFromWishList
  );

  app.post("/skincare", apiController.skinCare);

  app.get("/hot", apiController.hotProducts);

  app.get("/relatedProducts/:id", apiController.relatedProducts);

  app.get("/recommenderProducts/:userId", apiController.recommenderProducts);

  app.get("/newProducts", apiController.newProducts);

  app.get("/brands", apiController.getBrands);

  app.get("/brand/:id", apiController.getproductsOfBrand);

  app.put("/changePassword", apiController.changePassword);

  app.put("/changeProfile", apiController.changeInfo);

  app.post("/checkout", apiController.checkout);

  app.post("/checkout/success", apiController.checkoutSucess);

  /// Admin API
  app.get("/products/:page", apiController.products);

  app.get("/admin/users", apiAdminController.getUsers);

  app.get("/admin/users/:page", apiAdminController.getUsers);

  app.get("/admin/user/:id", apiAdminController.getUser);

  app.put("/admin/editProduct/:id", apiAdminController.editProduct);

  app.put("/admin/editUser", apiAdminController.editUser);

  app.get("/admin/getComments/:id", apiAdminController.getComments);

  app.get("/admin/getComments/:id/:page", apiAdminController.getComments);

  app.get("/admin/getComment/:id", apiAdminController.getComment);

  app.put("/admin/editComment", apiAdminController.editComment);

  app.get("/admin/orders", apiAdminController.getOrders);

  app.get("/admin/logout", function(req, res) {
    req.logout();
    res.redirect("/admin");
  });

  app.put("/admin/deleteProduct", middleware, apiAdminController.deleteProduct);

  app.put("/admin/deleteUser", middleware, apiAdminController.deleteUser);

  app.put("/admin/updateOrder", apiAdminController.updateOrder);

  app.put("/admin/deleteOrder", apiAdminController.deleteOrder);
};
