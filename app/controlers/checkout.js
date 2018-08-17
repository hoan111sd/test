var async = require("async");
const paypal = require("paypal-rest-sdk");

const axios = require("axios");

const server = require("../../config").server;

const getConnection = require("../config/database");

const ObjectId = require("mongodb").ObjectID;

const { paypal_client_id, paypal_secret } = require("../../config");

paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id:
    "AVFZuYkf0FI7YmHb7sAbpwTeLiMczusc-CqiW710D3guACvOU4Y46149MVSpjjv2-9jzCSYh8XwZmKNJ",
  client_secret:
    "ENjUIwppq6G9Rm7e2zm6rCmE13D6X1TJ1rfTZ4znYJI9nu6nTwnJLxXAy2S_T9dgWXug3SFa7gPnMw8N"
});

let totalPrice = 0;

let itemsG = [];

let totalVND = 0;
let totalUSD = 0;
let paymentMethod = "";
const checkout = function(req, res) {
  let userID = req.body.userID;
  let bill = req.body.bill;
  let items = req.body.items;
  paymentMethod = bill.paymentMethod;
  let clientTotal = req.body.total;
  let total = 0;

  let productsID = items.map(function(item) {
    return ObjectId(item._id);
  });
  let itemsData = {};
  items.map(item => {
    itemsData[item._id] = item;
  });

  currencyConverter(100000).then(rate => {
    if (paymentMethod === "paypal") {
      async.waterfall(
        [
          function(callback) {
            console.log("aaa1");
            getConnection(function(err, db) {
              if (err) {
                throw err;
              } else {
                let Products = db.collection("Products");
                Products.find({ _id: { $in: productsID } }).toArray(function(
                  err,
                  docs
                ) {
                  if (err) {
                    res.json({
                      success: false,
                      error: "Something went wrong!"
                    });
                  } else if (docs.length === 0) {
                    res.json({
                      success: false,
                      error: "Something went wrong!"
                    });
                  } else {
                    console.log("Docs", docs.length);

                    let items = [];
                    docs.map(doc => {
                      let quantity = itemsData[doc._id].quantity;
                      let priceVND =
                        Number(doc.price) *
                        (100 - Number(doc.sale)) /
                        100 *
                        quantity;

                      let priceToUSD = formatCurrency(priceVND / rate);
                      items.push({
                        name: doc.name,
                        price: priceToUSD,
                        currency: "USD",
                        quantity: quantity
                      });
                      itemsG.push({
                        name: doc.name,
                        _id: doc._id,
                        quantity: quantity
                      });
                      priceToUSD = Number(priceToUSD.replace(/\,/g, ""));
                      totalVND += priceVND;
                      totalUSD += priceToUSD;
                    });
                    if (totalVND !== 0 && totalUSD !== 0) {
                      callback(null, totalVND, totalUSD, items);
                    }
                  }
                });
              }
            });
          },

          function(totalVND, totalUSD, items, callback) {
            const create_payment_json = {
              intent: "sale",
              payer: {
                payment_method: "paypal"
              },
              redirect_urls: {
                return_url: `${server}/checkout?success=true`,
                cancel_url: `${server}/checkout`
              },
              transactions: [
                {
                  item_list: {
                    items: items
                  },
                  amount: {
                    currency: "USD",
                    total: `${formatCurrency(totalUSD)}`
                  },
                  description: "This is the payment description."
                }
              ]
            };

            paypal.payment.create(create_payment_json, function(
              error,
              payment
            ) {
              if (error) {
                console.log(error.response);
              } else {
                payment.links.map((link, index) => {
                  if (link.rel === "approval_url") {
                    callback(link.href);
                  }
                });
              }
            });
          }
        ],
        function(href, callback) {
          res.json({ success: true, href });
        }
      );
    } else if (paymentMethod === "cod") {
      async.waterfall(
        [
          function(callback) {
            getConnection(function(err, db) {
              if (err) {
                throw err;
              } else {
                let Products = db.collection("Products");
                Products.find({ _id: { $in: productsID } }).toArray(function(
                  err,
                  docs
                ) {
                  if (err) {
                    res.json({
                      success: false,
                      error: "Something went wrong!"
                    });
                  } else if (docs.length === 0) {
                    res.json({
                      success: false,
                      error: "Something went wrong!"
                    });
                  } else {
                    console.log("Docs", docs.length);

                    let items = [];
                    docs.map(doc => {
                      let quantity = itemsData[doc._id].quantity;
                      let priceVND =
                        Number(doc.price) *
                        (100 - Number(doc.sale)) /
                        100 *
                        quantity;
                      totalVND += priceVND;
                      let priceToUSD = formatCurrency(priceVND / rate);

                      priceToUSD = Number(priceToUSD.replace(/\,/g, ""));

                      totalUSD += priceToUSD;

                      items.push({
                        name: doc.name,
                        _id: doc._id,
                        priceVND: totalVND,
                        priceUSD: totalUSD,
                        quantity: quantity
                      });
                    });
                    if (totalUSD !== 0 && totalVND !== 0) {
                      callback(null, totalVND, totalUSD, items);
                    }
                  }
                });
              }
            });
          },
          function(totalVND, totalUSD, items, callback) {
            getConnection(function(err, db) {
              let Orders = db.collection("Orders");

              Orders.insertOne(
                {
                  userID,
                  paid: false,
                  paymentMethod: "cod",
                  shipping: "processing",
                  amountVND: totalVND,
                  amountUSD: totalUSD,
                  items: items
                },
                function(err, res) {
                  if (err) {
                    res.json({
                      success: false,
                      error: "Something went wrong!"
                    });
                  } else {
                    callback(null, "success");
                  }
                }
              );
            });
          }
        ],
        function(err, result) {
          if (!err) {
            res.json({
              success: true,
              href: `${server}/checkout?success=true`
            });
          }
        }
      );
    } else {
      res.json({ success: false, error: "Somthing went wrong!" });
    }
  });
};

const checkoutSucess = function(req, res) {
  const payerId = req.body.PayerID;
  const paymentId = req.body.paymentId;
  const userID = req.body.userID;
  if (paymentMethod === "paypal") {
    const execute_payment_json = {
      payer_id: payerId,
      transactions: [
        {
          amount: {
            currency: "USD",
            total: `${formatCurrency(totalUSD)}`
          }
        }
      ]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function(
      error,
      payment
    ) {
      if (error) {
        console.log("Error: ", error.response);
      } else {
        async.waterfall(
          [
            function(callback) {
              getConnection(function(err, db) {
                if (err) {
                  console.log(err);
                } else {
                  let PaypalPayment = db.collection("PaypalPayment");

                  PaypalPayment.insertOne(payment, function(err, res) {
                    if (err) {
                      res.json({
                        success: false,
                        error: "Something went wrong!"
                      });
                    } else {
                      callback(null, res.ops[0]._id);
                    }
                  });
                }
              });
            },
            function(paypalPaymentID, callback) {
              getConnection(function(err, db) {
                let Orders = db.collection("Orders");

                Orders.insertOne(
                  {
                    userID,
                    paid: true,
                    paymentMethod: "paypal",
                    payerId,
                    paypalPaymentID: paypalPaymentID,
                    paymentId,
                    shipping: "processing",
                    amountUSD: totalUSD,
                    amountVND: totalVND,
                    items: itemsG
                  },
                  function(err, res) {
                    if (err) {
                      res.json({
                        success: false,
                        error: "Something went wrong!"
                      });
                    } else {
                      callback(null, "success");
                    }
                  }
                );
              });
            }
          ],
          function(err, result) {
            res.json({ success: true, message: "Success" });
          }
        );
      }
    });
  } else {
    res.json({ success: true, message: "Success!" });
  }
};

function formatCurrency(currency) {
  return currency.toFixed(2).replace(/./g, function(c, i, a) {
    return i && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
  });
}

function currencyConverter(price) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        "http://data.fixer.io/api/latest?access_key=7a919bcbcbe1e1f22ccda1b02e1f55dd"
      )
      .then(function(response) {
        let data = response.data;
        let EURToVNDRate = data.rates["VND"];

        let EURToUSDRate = data.rates["USD"];

        let VNDToEUR = price / EURToVNDRate;

        let VNDToUSD = VNDToEUR * EURToUSDRate;

        let VNDToUSDRate = price / VNDToUSD;
        resolve(VNDToUSDRate);
      })
      .catch(function(error) {
        console.log(error);
      });
  });
}

module.exports = {
  checkout,
  checkoutSucess
};
