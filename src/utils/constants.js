export const TENS = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

export const ONES = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

export const POWERS = [
  "",
  "thousand",
  "million",
  "billion",
  "trillion",
  "quadrillion",
];

export const MESSAGES = {
  INVALID_INPUT: "Please provide a valid integer in decimal format.",
  OUT_OF_BOUNDS: `Please provide an integer between -${Number.MAX_SAFE_INTEGER} and ${Number.MAX_SAFE_INTEGER}`,
  INTERNAL_ERROR: "Unable to complete this request.",
};

export default {
  TENS,
  ONES,
  POWERS,
  MESSAGES,
};
