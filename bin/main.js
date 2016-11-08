#!/usr/bin/env node
'use strict';

var status_codes = require('../src/status_codes');
var format = require('util').format;
var code_arg = process.argv[2];

var display_code = function(data, code) {
  if (code.length === 1) {
    console.log(status_codes[code]);
  }

  else if (code.length === 3) {

  }
};

if (code_arg) {
  if (code_arg.length === 1) {
    if (!status_codes[code_arg]) {
      process.exit(1);
    }

    console.log(status_codes[code_arg]);
  }

  else if (code_arg.length === 3) {
    var type = code_arg.substring(0, 1);
    if (!status_codes[type] || !status_codes[type].codes[code_arg]) {
      process.exit(1);
    }

    console.log(status_codes[type].codes[code_arg]);
  }

  else {
    process.exit(1);
  }
}

else {
  console.log(status_codes);
}
