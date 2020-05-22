import { TENS, ONES, POWERS, MESSAGES } from "../utils/constants";
import { SuccessResult, ErrorResult } from "../utils/results";
import {
  allZeros,
  isOutOfBounds,
  isResult,
  isString,
  isZero,
  parseNegative,
  stripCommas,
  validNumber,
} from "../utils/helpers";

/*
Helper functions
*/
const parseStringNumber = (input) => {
  input = stripCommas(input);
  if (!validNumber(input)) {
    return new ErrorResult(MESSAGES.INVALID_INPUT);
  } else if (allZeros(input)) {
    return new SuccessResult("zero");
  }

  return input;
};

const parseHundreds = (num) => {
  let resultStr = "";
  let hundreds = Math.floor(num / 100);
  let remainder = num % 100;
  if (hundreds > 0) {
    resultStr += `${ONES[hundreds]} hundred `;
  }

  if (remainder >= 20) {
    let ten = Math.floor(remainder / 10);
    let one = remainder % 10;
    resultStr += `${TENS[ten]} ${ONES[one]}`;
  } else {
    resultStr += ONES[remainder];
  }

  return resultStr.trim();
};

const groupNumbers = (num) => {
  const numGroups = [];
  while (num >= 1) {
    numGroups.push(num % 1000);
    num = (num - (num % 1000)) / 1000;
  }

  return numGroups;
};

const mapGroupsToWords = (groupings, negative = "") => {
  groupings = groupings.map((group, idx) => {
    let hundreds = parseHundreds(group);
    return hundreds !== "" ? `${parseHundreds(group)} ${POWERS[idx]}` : "";
  });
  groupings.push(negative);
  return groupings;
};

const buildNumWordString = (groupings) =>
  groupings
    .reverse()
    .join(" ")
    .replace(/\s{2,}/g, " ")
    .trim();

/*
Main function
*/
const numberToEnglish = (input) => {
  if (input === undefined) {
    return new ErrorResult(MESSAGES.INVALID_INPUT);
  } else if (isString(input)) {
    input = parseStringNumber(input);
  } else if (isZero(input)) {
    return new SuccessResult("zero");
  }

  if (isResult(input)) {
    return input;
  }

  let num = Number(input);
  let negative = parseNegative(num);
  num = Math.abs(num);

  if (isOutOfBounds(num)) {
    return new ErrorResult(MESSAGES.OUT_OF_BOUNDS);
  }

  let groupings = groupNumbers(num);
  groupings = mapGroupsToWords(groupings, negative);
  const numInEnglish = buildNumWordString(groupings);
  return new SuccessResult(numInEnglish);
};

export default numberToEnglish;
