module.exports = function(req, res) {
  res.render("admin/editProduct", {
    action: "products"
  });
};
