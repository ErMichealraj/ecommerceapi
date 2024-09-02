const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "Ae6sIDwpsu-d1_yLy906X9BlyoUfYf3QEm55Ea9eAbCtzotjXluBFgNmmjsx8QQdhrTtbua5KFDuBSLT",
  client_secret: "EIS1rPzQosnoo733ZBIkcib9mb633m5x00fxG6WblkudDnIF34gPZCG9T4qTTHx3EkwTUvUxMdzoBWeA",
});

module.exports = paypal;