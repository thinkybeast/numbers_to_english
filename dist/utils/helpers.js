"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isZero = exports.allZeros = exports.validNumber = exports.stripCommas = exports.parseNegative = exports.isOutOfBounds = exports.isString = exports.isResult = exports.invalidType = void 0;

const invalidType = input => typeof input !== "string" && typeof input !== "number";

exports.invalidType = invalidType;

const isResult = object => typeof object === "object";

exports.isResult = isResult;

const isString = input => typeof input === "string";

exports.isString = isString;

const isOutOfBounds = num => num > Number.MAX_SAFE_INTEGER;

exports.isOutOfBounds = isOutOfBounds;

const parseNegative = num => num < 0 ? "negative" : "";

exports.parseNegative = parseNegative;

const stripCommas = numStr => numStr.replace(/,/g, "");

exports.stripCommas = stripCommas;

const validNumber = numStr => {
  const validNum = /^-{0,1}\d+$/;
  return validNum.test(numStr);
};

exports.validNumber = validNumber;

const allZeros = numStr => {
  const zeros = /^-{0,1}[0]+$/;
  return zeros.test(numStr);
};

exports.allZeros = allZeros;

const isZero = number => number === 0;

exports.isZero = isZero;
var _default = {
  allZeros,
  invalidType,
  isOutOfBounds,
  isResult,
  isString,
  isZero,
  parseNegative,
  stripCommas,
  validNumber
};
exports.default = _default;