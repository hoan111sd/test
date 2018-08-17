module.exports = function(req, res) {
  res.render("admin/products", {
    action: "products"
  });
};
