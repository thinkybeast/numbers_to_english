"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ErrorResult = exports.SuccessResult = exports.Result = void 0;

class Result {
  constructor(status, code) {
    this.status = status;
    this.statusCode = code;
  }

}

exports.Result = Result;

class SuccessResult extends Result {
  constructor(num_in_english, code = 200) {
    super("ok", code);
    this.num_in_english = num_in_english;
  }

}

exports.SuccessResult = SuccessResult;

class ErrorResult extends Result {
  constructor(message, code = 400) {
    super("error", code);
    this.message = message;
  }

}

exports.ErrorResult = ErrorResult;
var _default = {
  Result,
  SuccessResult,
  ErrorResult
};
exports.default = _default;