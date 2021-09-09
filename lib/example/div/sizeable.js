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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zaXplYWJsZS5qcyJdLCJuYW1lcyI6WyJ3aXRoU3R5bGUiLCJTaXplYWJsZURpdiIsInByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJjaGlsZEVsZW1lbnRzIiwiZGl2Il0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVVLEdBQWEsQ0FBYixNQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FjRywwSUFTdEM7Ozs7Ozs7QUFyQkEsR0FBSyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQVAsVUFBVSxFQUFLLENBQUM7SUFDbkMsR0FBSyxDQUFHLFNBQVMsR0FBb0IsVUFBVSxDQUF2QyxTQUFTLEVBQUUsYUFBYSxHQUFLLFVBQVUsQ0FBNUIsYUFBYTtJQUVoQyxNQUFNLG9DQUVILEdBQUc7UUFBQyxTQUFTLEtBQWUsTUFBUyxDQUFuQixTQUFTLEdBQUMsU0FBUztPQUNuQyxhQUFhO0FBSXBCLENBQUM7bUJBWnFCLE1BQWEsVUFjVixXQUFXIn0=