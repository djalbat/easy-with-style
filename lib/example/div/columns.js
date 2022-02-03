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
        "\n\n  display: flex;\n  flex-grow: 1;\n  flex-direction: row;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ColumnsDiv = function(properties) {
    var className = properties.className, childElements = properties.childElements;
    return(/*#__PURE__*/ React.createElement("div", {
        className: "".concat(className, " columns")
    }, childElements));
};
var _default = (0, _index).default(ColumnsDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9jb2x1bW5zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IENvbHVtbnNEaXYgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gY29sdW1uc2B9PlxuICAgICAge2NoaWxkRWxlbWVudHN9XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShDb2x1bW5zRGl2KWBcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbmA7XG4iXSwibmFtZXMiOlsiQ29sdW1uc0RpdiIsInByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJjaGlsZEVsZW1lbnRzIiwiZGl2Iiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWEsQ0FBYixNQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFjRSxDQU1yQzs7Ozs7OztBQWxCQSxHQUFLLENBQUNBLFVBQVUsR0FBRyxRQUFRLENBQVBDLFVBQVUsRUFBSyxDQUFDO0lBQ2xDLEdBQUssQ0FBR0MsU0FBUyxHQUFvQkQsVUFBVSxDQUF2Q0MsU0FBUyxFQUFFQyxhQUFhLEdBQUtGLFVBQVUsQ0FBNUJFLGFBQWE7SUFFaEMsTUFBTSxtQ0FFSEMsQ0FBRztRQUFDRixTQUFTLEVBQUcsQ0FBQSxFQUFZLE1BQVEsQ0FBbEJBLFNBQVMsRUFBQyxDQUFRO09BQ2xDQyxhQUFhO0FBSXBCLENBQUM7bUJBRWNFLE1BQVMsVUFBQ0wsVUFBVSJ9