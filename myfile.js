const removed = require("stopwords").english;

function segmen(str) {
  str = str.replace("?", ".");
  var a = str.split(".");
  a.pop();
  return a;
  console.log(a)
}

function wordsegm(str) {
  str = str.replace("?", "");
  str = str.replace(".", "");
  var b = str.split(" ");
  return b;
}

function removestp(str) {
  str = str.replace("?", "");
  str = str.replace(".", "");
  const oldstr = str.split(" ");
  var r = "";
  oldstr.forEach(funku);
  function funku(item, index, arr) {
    if (removed.includes(item)) {
    } else {
      r += item + " ";
    }
  }
  return r;
}
function uniquestr(str) {
  str = str.toLowerCase();
  str = str.replace("?", "");
  str = str.replace(".", "");
  var arr = str.split(" ");
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  const setis = removeDuplicates(arr);
  var b = "";
  setis.forEach(function (el) {
    b += el + " ";
  });
  return b;
}
uniquestr("Hello World. What is the weather today.");
function reversestring(str) {
  str = str.replace("?", "");
  str = str.replace(".", "");
  const arr = str.split(" ");
  var y = "";
  arr.forEach((el) => {
    y += el.split("").reverse().join("") + " ";
  });
  return y;
}

function extractnum(str) {
  var f = str.match(/\d/g);
  f = f.join("");
  return f;
}

module.exports = {
  segmen,
  wordsegm,
  removestp,
  uniquestr,
  reversestring,
  extractnum,
};
