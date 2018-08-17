module.exports = function(req, res) {
  res.render("admin/editUser", {
    action: "users"
  });
};
