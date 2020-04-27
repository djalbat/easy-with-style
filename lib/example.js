"use strict";

var _index = _interopRequireDefault(require("./index"));

var _easy = require("easy");

var _view = _interopRequireDefault(require("./example/view"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Object.assign(window, {
  React: _easy.React
});
var renderStyles = _index["default"].renderStyles;
var body = new _easy.Body();
renderStyles();
body.prepend( /*#__PURE__*/_easy.React.createElement(_view["default"], null));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiYXNzaWduIiwid2luZG93IiwiUmVhY3QiLCJyZW5kZXJTdHlsZXMiLCJ3aXRoU3R5bGUiLCJib2R5IiwiQm9keSIsInByZXBlbmQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBOztBQUVBOzs7O0FBRUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxNQUFkLEVBQXNCO0FBQ3BCQyxFQUFBQSxLQUFLLEVBQUxBO0FBRG9CLENBQXRCO0lBSVFDLFksR0FBaUJDLGlCLENBQWpCRCxZO0FBRVIsSUFBTUUsSUFBSSxHQUFHLElBQUlDLFVBQUosRUFBYjtBQUVBSCxZQUFZO0FBRVpFLElBQUksQ0FBQ0UsT0FBTCxlQUVFLDBCQUFDLGdCQUFELE9BRkYiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi9pbmRleFwiO1xuXG5pbXBvcnQgeyBCb2R5LCBSZWFjdCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL2V4YW1wbGUvdmlld1wiO1xuXG5PYmplY3QuYXNzaWduKHdpbmRvdywge1xuICBSZWFjdFxufSk7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbmNvbnN0IGJvZHkgPSBuZXcgQm9keSgpO1xuXG5yZW5kZXJTdHlsZXMoKTtcblxuYm9keS5wcmVwZW5kKFxuXG4gIDxWaWV3IC8+XG5cbik7XG4iXX0=