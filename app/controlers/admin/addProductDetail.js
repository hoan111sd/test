module.exports = function(req, res) {
  res.render("admin/addProductDetail", {
    action: "products"
  });
};
