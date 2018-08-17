const { getUsers, getUser, deleteUser, editUser } = require("./users");

const editProduct = require("./editProduct");

const { getComments, getComment, editComment } = require("./comments");

const { deleteProduct } = require("./products");

const { getOrders, updateOrder, deleteOrder } = require("./orders");

module.exports = {
  getUsers,
  getUser,
  editProduct,
  deleteUser,
  editUser,
  getComments,
  getComment,
  editComment,
  deleteProduct,
  getOrders,
  updateOrder,
  deleteOrder
};
