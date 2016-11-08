'use strict';

var http_status_codes = require('http').STATUS_CODES;
var format = require('util').format;

var STATUS = {
  1: { type: "Informational" },
  2: { type: "Success" },
  3: { type: "Redirection" },
  4: { type: "Client Error" },
  5: { type: "Server Error" },
};

for (var code in http_status_codes) {
  if (!http_status_codes.hasOwnProperty(code)) { continue; }

  var type = code.substring(0, 1);

  if (!STATUS[type].codes) {
    STATUS[type].codes = {};
  }

  STATUS[type].codes[code] = http_status_codes[code];
}

var code_arg = process.argv[2];

var display_code = function(data, code) {

};

var display_all = function(data) {
  for (var status_type in data) {
    var status_data = data[status_type];
    console.log(format('\n%s', status_data.type.toUpperCase()));

    for (var status_code in status_data.codes) {
      console.log(format('[%s] - %s', status_code, http_status_codes[status_code]))
    }
  }
};

if (code_arg) {
  display_code(STATUS, code_arg);
}

else {
  display_all(STATUS);
}
