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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zaXplYWJsZS5qcyJdLCJuYW1lcyI6WyJ3aXRoU3R5bGUiLCJTaXplYWJsZURpdiIsInByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJjaGlsZEVsZW1lbnRzIiwiZGl2Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWEsQ0FBYixNQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFjRyxDQVN0Qzs7Ozs7OztBQXJCQSxHQUFLLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBUCxVQUFVLEVBQUssQ0FBQztJQUNuQyxHQUFLLENBQUcsU0FBUyxHQUFvQixVQUFVLENBQXZDLFNBQVMsRUFBRSxhQUFhLEdBQUssVUFBVSxDQUE1QixhQUFhO0lBRWhDLE1BQU0sbUNBRUgsQ0FBRztRQUFDLFNBQVMsRUFBRyxDQUFBLEVBQVksTUFBUyxDQUFuQixTQUFTLEVBQUMsQ0FBUztPQUNuQyxhQUFhO0FBSXBCLENBQUM7bUJBWnFCLE1BQWEsVUFjVixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuY29uc3QgU2l6ZWFibGVEaXYgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcztcblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gc2l6ZWFibGVgfT5cbiAgICAgIHtjaGlsZEVsZW1lbnRzfVxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoU2l6ZWFibGVEaXYpYFxuICBcbiAgd2lkdGg6IDQ4cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4td2lkdGg6IDI0cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbmA7XG4iXX0=