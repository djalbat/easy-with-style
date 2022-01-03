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
        "\n  \n  width: 48rem;\n  display: flex;\n  min-width: 24rem;\n  flex-direction: column;\n\n"
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zaXplYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5jb25zdCBTaXplYWJsZURpdiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBzaXplYWJsZWB9PlxuICAgICAge2NoaWxkRWxlbWVudHN9XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTaXplYWJsZURpdilgXG4gIFxuICB3aWR0aDogNDhyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogMjRyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbmA7XG4iXSwibmFtZXMiOlsiU2l6ZWFibGVEaXYiLCJwcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiY2hpbGRFbGVtZW50cyIsImRpdiJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFVSxHQUFhLENBQWIsTUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBY0csQ0FPdEM7Ozs7Ozs7QUFuQkEsR0FBSyxDQUFDQSxXQUFXLEdBQUcsUUFBUSxDQUFQQyxVQUFVLEVBQUssQ0FBQztJQUNuQyxHQUFLLENBQUdDLFNBQVMsR0FBb0JELFVBQVUsQ0FBdkNDLFNBQVMsRUFBRUMsYUFBYSxHQUFLRixVQUFVLENBQTVCRSxhQUFhO0lBRWhDLE1BQU0sbUNBRUhDLENBQUc7UUFBQ0YsU0FBUyxFQUFHLENBQUEsRUFBWSxNQUFTLENBQW5CQSxTQUFTLEVBQUMsQ0FBUztPQUNuQ0MsYUFBYTtBQUlwQixDQUFDO21CQVpxQixNQUFhLFVBY1ZILFdBQVcifQ==