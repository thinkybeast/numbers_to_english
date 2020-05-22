"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _services = _interopRequireDefault(require("../services"));

var _results = _interopRequireDefault(require("../utils/results"));

var _constants = _interopRequireDefault(require("../utils/constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const numToEnglish = (req, res) => {
  const {
    number
  } = req.body;
  const result = (0, _services.default)(number);

  if (!result || result.statusCode === undefined) {
    res.status(500);
    res.json(new _results.default(_constants.default.INTERNAL_ERROR, 500));
  } else {
    res.status(result.statusCode);
    res.json(result);
  }
};

var _default = numToEnglish;
exports.default = _default;