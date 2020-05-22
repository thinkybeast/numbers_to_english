"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MESSAGES = exports.POWERS = exports.ONES = exports.TENS = void 0;
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
exports.TENS = TENS;
const ONES = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
exports.ONES = ONES;
const POWERS = ["", "thousand", "million", "billion", "trillion", "quadrillion"];
exports.POWERS = POWERS;
const MESSAGES = {
  INVALID_INPUT: "Please provide a valid integer in decimal format.",
  OUT_OF_BOUNDS: `Please provide an integer between -${Number.MAX_SAFE_INTEGER} and ${Number.MAX_SAFE_INTEGER}`,
  INTERNAL_ERROR: "Unable to complete this request."
};
exports.MESSAGES = MESSAGES;
var _default = {
  TENS,
  ONES,
  POWERS,
  MESSAGES
};
exports.default = _default;