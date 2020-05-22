export const invalidType = (input) =>
  typeof input !== "string" && typeof input !== "number";

export const isResult = (object) => typeof object === "object";

export const isString = (input) => typeof input === "string";

export const isOutOfBounds = (num) => num > Number.MAX_SAFE_INTEGER;

export const parseNegative = (num) => (num < 0 ? "negative" : "");

export const stripCommas = (numStr) => numStr.replace(/,/g, "");

export const validNumber = (numStr) => {
  const validNum = /^-{0,1}\d+$/;
  return validNum.test(numStr);
};

export const allZeros = (numStr) => {
  const zeros = /^-{0,1}[0]+$/;
  return zeros.test(numStr);
};

export const isZero = (number) => number === 0;

export default {
  allZeros,
  invalidType,
  isOutOfBounds,
  isResult,
  isString,
  isZero,
  parseNegative,
  stripCommas,
  validNumber,
};
