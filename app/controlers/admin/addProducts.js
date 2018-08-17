module.exports = function(req, res) {
  res.render("admin/addProducts", {
    action: "products"
  });
};
