const defaultRoute = require("./default");

const products = require("./products");

const login = require("./login");

const register = require("./register");

const categories = require("./categories").categories;

const category = require("./categories").category;

const rating = require("./rating");

const { userInfo, userCheckOut, userHistory } = require("./users");

const submitProduct = require("./submitProduct");

const productDetail = require("./productDetail");

const comments = require("./comments");

const searchMobile = require("./searchMobile");

const addToWishList = require("./addToWishList");

const getCart = require("./getCart");

const submitComment = require("./submitComment");

const deleteProductFromWishList = require("./deleteProductFromWishList");

const skinCare = require("./skincare");

const hotProducts = require("./hotProducts");

const relatedProducts = require("./relatedProducts");

const recommenderProducts = require("./recommenderProducts");

const newProducts = require("./newProducts");

const { getBrands, getproductsOfBrand } = require("./brands");

const { changePassword, changeInfo } = require("./profileSettings");

const { checkout, checkoutSucess } = require("./checkout");

module.exports = {
  defaultRoute,
  products,
  login,
  register,
  categories,
  category,
  rating,
  userInfo,
  submitProduct,
  productDetail,
  comments,
  searchMobile,
  addToWishList,
  getCart,
  submitComment,
  deleteProductFromWishList,
  skinCare,
  hotProducts,
  relatedProducts,
  recommenderProducts,
  newProducts,
  getBrands,
  getproductsOfBrand,
  changePassword,
  changeInfo,
  checkout,
  checkoutSucess
};
