var getHTML = require("../http-functions.js");
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  function reverse(s){
    return s.split("").reverse().join("");
  }
  console.log(reverse(html));
};

getHTML(requestOptions, printReverse);
