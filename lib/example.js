"use strict";
require("./example/preamble");
var _index = _interopRequireDefault(require("./index"));
var _easy = require("easy");
var _view = _interopRequireDefault(require("./example/view"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyles = _index.default.renderStyles;
var body = new _easy.Body();
renderStyles();
body.mount(/*#__PURE__*/ React.createElement(_view.default, null));
