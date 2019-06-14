"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _app = _interopRequireDefault(require("./app"));

var _facts = _interopRequireDefault(require("./facts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _facts["default"])().then(function (facts) {
  (0, _reactDom.render)(_react["default"].createElement(_app["default"], {
    facts: facts
  }), document.querySelector('#root'));
});