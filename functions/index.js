"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrapp = void 0;

var functions = _interopRequireWildcard(require("firebase-functions"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _app = _interopRequireDefault(require("./src/app"));

var _facts = _interopRequireDefault(require("./src/facts"));

var _fs = _interopRequireDefault(require("fs"));

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var index = _fs["default"].readFileSync(__dirname + '/index.html', 'utf8');

var app = (0, _express["default"])();
app.get('**', function (req, res) {
  (0, _facts["default"])().then(function (facts) {
    var compString = (0, _server.renderToString)(_react["default"].createElement(_app["default"], {
      facts: facts
    }));
    var html = index.replace('<!-- APP HTML -->', compString);
    res.send(html);
  })["catch"](function (err) {
    return console.log('error', err);
  });
});
var ssrapp = functions.https.onRequest(app);
exports.ssrapp = ssrapp;