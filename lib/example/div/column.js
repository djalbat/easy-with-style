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
        "\n\n  display: flex;\n  flex-grow: 1;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ColumnDiv = function(properties) {
    var className = properties.className, childElements = properties.childElements;
    return /*#__PURE__*/ React.createElement("div", {
        className: "".concat(className, " column")
    }, childElements);
};
var _default = (0, _index.default)(ColumnDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9jb2x1bW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcIi4uLy4uL2luZGV4XCI7ICAvLy9cblxuY29uc3QgQ29sdW1uRGl2ID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkRWxlbWVudHMgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9IGNvbHVtbmB9PlxuICAgICAge2NoaWxkRWxlbWVudHN9XG4gICAgPC9kaXY+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShDb2x1bW5EaXYpYFxuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcblxuYDtcbiJdLCJuYW1lcyI6WyJDb2x1bW5EaXYiLCJwcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiY2hpbGRFbGVtZW50cyIsImRpdiIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0JBOzs7ZUFBQTs7OzREQWRzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QixJQUFNQSxZQUFZLFNBQUNDLFlBQWU7SUFDaEMsSUFBUUMsWUFBNkJELFdBQTdCQyxXQUFXQyxnQkFBa0JGLFdBQWxCRTtJQUVuQixxQkFFRSxvQkFBQ0M7UUFBSUYsV0FBVyxBQUFDLEdBQVksT0FBVkEsV0FBVTtPQUMxQkM7QUFJUDtJQUVBLFdBQWVFLElBQUFBLGNBQVMsRUFBQ0wifQ==