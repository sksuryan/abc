const express = require("express");
const bodyParser = require("body-parser");

const {
  segmen,
  wordsegm,
  removestp,
  uniquestr,
  reversestring,
  extractnum,
} = require("./myfile");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var str1 = string(req.body.str);
  var result1 =
    "<b>Input Sring is:</b>" +
    str1 +
    "<br>" +
    "<b>Sentence Segmentation:</b>" +
    segmen(str1) +
    "<br>" +
    "<b>Word Segmentation:</b>" +
    wordsegm(str1) +
    "<br>" +
    "<b>Remove Stop Words:</b>" +
    removestp(str1) +
    "<br>" +
    "<b>String Without Repeated Words:</b>" +
    uniquestr(str1) +
    "<br>" +
    "<b>Reverse Each Word:</b>" +
    reversestring(str1) +
    "<br>" +
    "<b>Extract Number:</b>" +
    extractnum(str1) +
    "<br>";
  res.send(result1);
});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
