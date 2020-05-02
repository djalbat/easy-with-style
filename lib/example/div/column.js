"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  display: flex;\n  flex-grow: 1;\n\n  padding-left: 1rem;\n  padding-right: 1rem;\n  flex-direction: column;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

///
var ColumnDiv = function ColumnDiv(properties) {
  var className = properties.className,
      childElements = properties.childElements;
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(className, " column")
  }, childElements);
};

var _default = (0, _index["default"])(ColumnDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbHVtbi5qcyJdLCJuYW1lcyI6WyJDb2x1bW5EaXYiLCJwcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiY2hpbGRFbGVtZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxVQUFELEVBQWdCO0FBQUEsTUFDeEJDLFNBRHdCLEdBQ0tELFVBREwsQ0FDeEJDLFNBRHdCO0FBQUEsTUFDYkMsYUFEYSxHQUNLRixVQURMLENBQ2JFLGFBRGE7QUFHaEMsc0JBRUU7QUFBSyxJQUFBLFNBQVMsWUFBS0QsU0FBTDtBQUFkLEtBQ0dDLGFBREgsQ0FGRjtBQU9ELENBVkQ7O2VBWWUsdUJBQVVILFNBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmNvbnN0IENvbHVtbkRpdiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBjb2x1bW5gfT5cbiAgICAgIHtjaGlsZEVsZW1lbnRzfVxuICAgIDwvZGl2PlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoQ29sdW1uRGl2KWBcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG5cbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5gO1xuIl19