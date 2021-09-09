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
        "\n\n  display: flex;\n  flex-grow: 1;\n  padding-left: 1rem;\n  padding-right: 1rem;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ColumnDiv = function(properties) {
    var className = properties.className, childElements = properties.childElements;
    return(/*#__PURE__*/ React.createElement("div", {
        className: "".concat(className, " column")
    }, childElements));
};
var _default = (0, _index).default(ColumnDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9jb2x1bW4uanMiXSwibmFtZXMiOlsid2l0aFN0eWxlIiwiQ29sdW1uRGl2IiwicHJvcGVydGllcyIsImNsYXNzTmFtZSIsImNoaWxkRWxlbWVudHMiLCJkaXYiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVUsR0FBYSxDQUFiLE1BQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQWNDLHdGQU9wQzs7Ozs7OztBQW5CQSxHQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBUCxVQUFVLEVBQUssQ0FBQztJQUNqQyxHQUFLLENBQUcsU0FBUyxHQUFvQixVQUFVLENBQXZDLFNBQVMsRUFBRSxhQUFhLEdBQUssVUFBVSxDQUE1QixhQUFhO0lBRWhDLE1BQU0sb0NBRUgsR0FBRztRQUFDLFNBQVMsS0FBZSxNQUFPLENBQWpCLFNBQVMsR0FBQyxPQUFPO09BQ2pDLGFBQWE7QUFJcEIsQ0FBQzttQkFacUIsTUFBYSxVQWNWLFNBQVMifQ==