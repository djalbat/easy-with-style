"use strict";

var _index = _interopRequireDefault(require("./index"));

var _easy = require("easy");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  text-decoration: none;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// import View from "./example/view";
var Link = _index["default"].a(_templateObject());

Object.assign(window, {
  React: _easy.React
});
var renderStyles = _index["default"].renderStyles;
var body = new _easy.Body();
renderStyles();
body.prepend( /*#__PURE__*/_easy.React.createElement(Link, {
  href: "http://google.com"
}, "blah"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsiTGluayIsIndpdGhTdHlsZSIsImEiLCJPYmplY3QiLCJhc3NpZ24iLCJ3aW5kb3ciLCJSZWFjdCIsInJlbmRlclN0eWxlcyIsImJvZHkiLCJCb2R5IiwicHJlcGVuZCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBLElBQU1BLElBQUksR0FBR0Msa0JBQVVDLENBQWIsbUJBQVY7O0FBTUFDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxNQUFkLEVBQXNCO0FBQ3BCQyxFQUFBQSxLQUFLLEVBQUxBO0FBRG9CLENBQXRCO0lBSVFDLFksR0FBaUJOLGlCLENBQWpCTSxZO0FBRVIsSUFBTUMsSUFBSSxHQUFHLElBQUlDLFVBQUosRUFBYjtBQUVBRixZQUFZO0FBRVpDLElBQUksQ0FBQ0UsT0FBTCxlQUVFLDBCQUFDLElBQUQ7QUFBTSxFQUFBLElBQUksRUFBQztBQUFYLFVBRkYiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi9pbmRleFwiO1xuXG5pbXBvcnQgeyBCb2R5LCBSZWFjdCB9IGZyb20gXCJlYXN5XCI7XG5cbi8vIGltcG9ydCBWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlld1wiO1xuXG5jb25zdCBMaW5rID0gd2l0aFN0eWxlLmFgXG5cbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG5gO1xuXG5PYmplY3QuYXNzaWduKHdpbmRvdywge1xuICBSZWFjdFxufSk7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpO1xuXG5yZW5kZXJTdHlsZXMoKTtcblxuYm9keS5wcmVwZW5kKFxuXG4gIDxMaW5rIGhyZWY9XCJodHRwOi8vZ29vZ2xlLmNvbVwiPmJsYWg8L0xpbms+XG5cbik7XG4iXX0=