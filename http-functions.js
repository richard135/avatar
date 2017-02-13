module.exports = function getHTML (options, callback) {
  var https = require('https');
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
};





