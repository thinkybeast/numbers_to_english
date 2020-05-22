"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../utils/constants");

var _results = require("../utils/results");

var _helpers = require("../utils/helpers");

/*
Helper functions
*/
const parseStringNumber = input => {
  input = (0, _helpers.stripCommas)(input);

  if (!(0, _helpers.validNumber)(input)) {
    return new _results.ErrorResult(_constants.MESSAGES.INVALID_INPUT);
  } else if ((0, _helpers.allZeros)(input)) {
    return new _results.SuccessResult("zero");
  }

  return input;
};

const parseHundreds = num => {
  let resultStr = "";
  let hundreds = Math.floor(num / 100);
  let remainder = num % 100;

  if (hundreds > 0) {
    resultStr += `${_constants.ONES[hundreds]} hundred `;
  }

  if (remainder >= 20) {
    let ten = Math.floor(remainder / 10);
    let one = remainder % 10;
    resultStr += `${_constants.TENS[ten]} ${_constants.ONES[one]}`;
  } else {
    resultStr += _constants.ONES[remainder];
  }

  return resultStr.trim();
};

const groupNumbers = num => {
  const numGroups = [];

  while (num >= 1) {
    numGroups.push(num % 1000);
    num = (num - num % 1000) / 1000;
  }

  return numGroups;
};

const mapGroupsToWords = (groupings, negative = "") => {
  groupings = groupings.map((group, idx) => {
    let hundreds = parseHundreds(group);
    return hundreds !== "" ? `${parseHundreds(group)} ${_constants.POWERS[idx]}` : "";
  });
  groupings.push(negative);
  return groupings;
};

const buildNumWordString = groupings => groupings.reverse().join(" ").replace(/\s{2,}/g, " ").trim();
/*
Main function
*/


const numberToEnglish = input => {
  if (input === undefined) {
    return new _results.ErrorResult(_constants.MESSAGES.INVALID_INPUT);
  } else if ((0, _helpers.isString)(input)) {
    input = parseStringNumber(input);
  } else if ((0, _helpers.isZero)(input)) {
    return new _results.SuccessResult("zero");
  }

  if ((0, _helpers.isResult)(input)) {
    return input;
  }

  let num = Number(input);
  let negative = (0, _helpers.parseNegative)(num);
  num = Math.abs(num);

  if ((0, _helpers.isOutOfBounds)(num)) {
    return new _results.ErrorResult(_constants.MESSAGES.OUT_OF_BOUNDS);
  }

  let groupings = groupNumbers(num);
  groupings = mapGroupsToWords(groupings, negative);
  const numInEnglish = buildNumWordString(groupings);
  return new _results.SuccessResult(numInEnglish);
};

var _default = numberToEnglish;
exports.default = _default;