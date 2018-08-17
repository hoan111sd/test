module.exports = function(req, res) {
    res.render("admin/comments", {
      action: "comment"
    });
  };
  