var https = require('https');
function getAndPrintHTML (options, callback) {
  var str = ''
  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      str = str + data;
    });


    response.on('end', function() {
      callback(str)
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function printHTML(html) {
  console.log(html);
};

//test
getAndPrintHTML(requestOptions, printHTML);
