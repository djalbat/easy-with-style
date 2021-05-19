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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zaXplYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5jb25zdCBTaXplYWJsZURpdiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBzaXplYWJsZWB9PlxuICAgICAge2NoaWxkRWxlbWVudHN9XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTaXplYWJsZURpdilgXG4gIFxuICB3aWR0aDogNDhyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogMjRyZW07XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuYDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVVLE1BQWE7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQWNHLDBJQVN0Qzs7Ozs7OztJQXJCTSxXQUFXLFlBQUksVUFBVTtRQUNyQixTQUFTLEdBQW9CLFVBQVUsQ0FBdkMsU0FBUyxFQUFFLGFBQWEsR0FBSyxVQUFVLENBQTVCLGFBQWE7OENBSTdCLEdBQUc7UUFBQyxTQUFTLEtBQWUsTUFBUyxDQUFuQixTQUFTLEdBQUMsU0FBUztPQUNuQyxhQUFhOzttQkFSRSxNQUFhLFVBY1YsV0FBVyJ9