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
        "\n\n  display: flex;\n  flex-grow: 1;\n  flex-direction: column;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var RowsDiv = function(properties) {
    var className = properties.className, childElements = properties.childElements;
    return /*#__PURE__*/ React.createElement("div", {
        className: "".concat(className, " rows")
    }, childElements);
};
var _default = (0, _index).default(RowsDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9yb3dzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IFJvd3NEaXYgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gcm93c2B9PlxuICAgICAge2NoaWxkRWxlbWVudHN9XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShSb3dzRGl2KWBcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbmA7XG4iXSwibmFtZXMiOlsiUm93c0RpdiIsInByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJjaGlsZEVsZW1lbnRzIiwiZGl2Iiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0VBQWI7d0JBQUE7QUFFc0IsR0FBYSxDQUFiLE1BQWE7Ozs7Ozs7OzhCQUZuQzs7Ozs7Ozs7OztRQWdCa0MsQ0FNbEM7Ozs7S0F0QkE7OztBQUlBLEdBQUssQ0FBQ0EsT0FBTyxHQUFHLFFBQVEsQ0FBUEMsVUFBVSxFQUFLLENBQUM7SUFDL0IsR0FBSyxDQUFHQyxTQUFTLEdBQW9CRCxVQUFVLENBQXZDQyxTQUFTLEVBQUVDLGFBQWEsR0FBS0YsVUFBVSxDQUE1QkUsYUFBYTtJQUVoQyxNQUFNLG1DQUVIQyxDQUFHO1FBQUNGLFNBQVMsRUFBRyxDQUFBLEVBQVksTUFBSyxDQUFmQSxTQUFTLEVBQUMsQ0FBSztPQUMvQkMsYUFBYTtBQUlwQixDQUFDO21CQUVjRSxNQUFTLFVBQUNMLE9BQU87MEJBaEJoQyJ9