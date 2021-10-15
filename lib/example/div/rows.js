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
    return(/*#__PURE__*/ React.createElement("div", {
        className: "".concat(className, " rows")
    }, childElements));
};
var _default = (0, _index).default(RowsDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9yb3dzLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIlJvd3NEaXYiLCJwcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiY2hpbGRFbGVtZW50cyIsImRpdiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFhLENBQWIsTUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBY0QsQ0FNbEM7Ozs7Ozs7QUFsQkEsR0FBSyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQVAsVUFBVSxFQUFLLENBQUM7SUFDL0IsR0FBSyxDQUFHLFNBQVMsR0FBb0IsVUFBVSxDQUF2QyxTQUFTLEVBQUUsYUFBYSxHQUFLLFVBQVUsQ0FBNUIsYUFBYTtJQUVoQyxNQUFNLG1DQUVILENBQUc7UUFBQyxTQUFTLEVBQUcsQ0FBQSxFQUFZLE1BQUssQ0FBZixTQUFTLEVBQUMsQ0FBSztPQUMvQixhQUFhO0FBSXBCLENBQUM7bUJBWnFCLE1BQWEsVUFjVixPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuY29uc3QgUm93c0RpdiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSByb3dzYH0+XG4gICAgICB7Y2hpbGRFbGVtZW50c31cbiAgICA8L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFJvd3NEaXYpYFxuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuYDtcbiJdfQ==