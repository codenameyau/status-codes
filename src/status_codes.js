'use strict';

var http_status_codes = require('http').STATUS_CODES;

var STATUS = {
  1: { type: "INFORMATIONAL" },
  2: { type: "SUCCESS" },
  3: { type: "REDIRECTION" },
  4: { type: "CLIENT ERROR" },
  5: { type: "SERVER ERROR" },
};

for (var code in http_status_codes) {
  if (!http_status_codes.hasOwnProperty(code)) { continue; }

  var type = code.substring(0, 1);

  if (!STATUS[type].codes) {
    STATUS[type].codes = {};
  }

  STATUS[type].codes[code] = http_status_codes[code];
}

module.exports = STATUS;
