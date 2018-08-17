module.exports = function(req, res) {
  res.render("admin/editComment", {
    action: "comment"
  });
};
