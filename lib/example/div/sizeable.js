"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../index"));
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
        "\n  \n  width: 48rem;\n  display: flex;\n  min-width: 24rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  flex-direction: column;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var SizeableDiv = function(properties) {
    var className = properties.className, childElements = properties.childElements;
    return(/*#__PURE__*/ React.createElement("div", {
        className: "".concat(className, " sizeable")
    }, childElements));
};
var _default = (0, _index).default(SizeableDiv)(_templateObject());
exports.default = _default;
