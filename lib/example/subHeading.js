"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../index"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  margin: 1rem 0 0.5rem 0;\n  font-size: 2rem;\n  \n  :first-of-type {\n    margin-top: 0;\n  }\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var SubHeading = _index.default.h2(_templateObject());
var _default = SubHeading;
exports.default = _default;
