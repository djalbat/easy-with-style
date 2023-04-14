"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _index = /*#__PURE__*/ _interop_require_default(require("../../index"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _tagged_template_literal(strings, raw) {
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
    var data = _tagged_template_literal([
        "\n  \n  width: 48rem;\n  display: flex;\n  min-width: 24rem;\n  flex-direction: column;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var SizeableDiv = function(properties) {
    var className = properties.className, childElements = properties.childElements;
    return /*#__PURE__*/ React.createElement("div", {
        className: "".concat(className, " sizeable")
    }, childElements);
};
var _default = (0, _index.default)(SizeableDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zaXplYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5jb25zdCBTaXplYWJsZURpdiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBzaXplYWJsZWB9PlxuICAgICAge2NoaWxkRWxlbWVudHN9XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShTaXplYWJsZURpdilgXG4gIFxuICB3aWR0aDogNDhyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogMjRyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbmA7XG4iXSwibmFtZXMiOlsiU2l6ZWFibGVEaXYiLCJwcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiY2hpbGRFbGVtZW50cyIsImRpdiIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0JBOzs7ZUFBQTs7OzREQWRzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFNQSxjQUFjLFNBQUNDLFlBQWU7SUFDbEMsSUFBUUMsWUFBNkJELFdBQTdCQyxXQUFXQyxnQkFBa0JGLFdBQWxCRTtJQUVuQixxQkFFRSxvQkFBQ0M7UUFBSUYsV0FBVyxBQUFDLEdBQVksT0FBVkEsV0FBVTtPQUMxQkM7QUFJUDtJQUVBLFdBQWVFLElBQUFBLGNBQVMsRUFBQ0wifQ==