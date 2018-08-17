module.exports = function(req, res) {
  console.log("user", req.sessionID);
  res.render("admin/orders", {
    action: "orders"
  });
};
