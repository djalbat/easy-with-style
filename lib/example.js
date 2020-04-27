"use strict";

var _index = _interopRequireDefault(require("./index"));

var _easy = require("easy");

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\n  color: red;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  background-color: green;\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var renderStyles = _index["default"].renderStyles;
Object.assign(window, {
  React: _easy.React
});
var body = new _easy.Body();
var Paragraph = (0, _index["default"])((_temp = _class = /*#__PURE__*/function (_Element) {
  _inherits(_class, _Element);

  var _super = _createSuper(_class);

  function _class() {
    _classCallCheck(this, _class);

    return _super.apply(this, arguments);
  }

  _createClass(_class, null, [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return _easy.Element.fromProperties(Paragraph, properties);
    }
  }]);

  return _class;
}(_easy.Element), _defineProperty(_class, "tagName", "p"), _temp))(_templateObject());
var StyledParagraph = (0, _index["default"])(Paragraph)(_templateObject2());
renderStyles();
body.prepend( /*#__PURE__*/_easy.React.createElement("article", null, /*#__PURE__*/_easy.React.createElement("h1", null, "Easy with Style example"), /*#__PURE__*/_easy.React.createElement(StyledParagraph, null, "First styles...")));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuanMiXSwibmFtZXMiOlsicmVuZGVyU3R5bGVzIiwid2l0aFN0eWxlIiwiT2JqZWN0IiwiYXNzaWduIiwid2luZG93IiwiUmVhY3QiLCJib2R5IiwiQm9keSIsIlBhcmFncmFwaCIsInByb3BlcnRpZXMiLCJFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJTdHlsZWRQYXJhZ3JhcGgiLCJwcmVwZW5kIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVRQSxZLEdBQWlCQyxpQixDQUFqQkQsWTtBQUVSRSxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsTUFBZCxFQUFzQjtBQUNwQkMsRUFBQUEsS0FBSyxFQUFMQTtBQURvQixDQUF0QjtBQUlBLElBQU1DLElBQUksR0FBRyxJQUFJQyxVQUFKLEVBQWI7QUFFQSxJQUFNQyxTQUFTLEdBQUc7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLG1DQUdNQyxVQUhOLEVBR2tCO0FBQUUsYUFBT0MsY0FBUUMsY0FBUixDQUF1QkgsU0FBdkIsRUFBa0NDLFVBQWxDLENBQVA7QUFBdUQ7QUFIM0U7O0FBQUE7QUFBQSxFQUF3QkMsYUFBeEIsc0NBQ0MsR0FERCxVQUFILG1CQUFmO0FBVUEsSUFBTUUsZUFBZSxHQUFHLHVCQUFVSixTQUFWLENBQUgsb0JBQXJCO0FBTUFSLFlBQVk7QUFFWk0sSUFBSSxDQUFDTyxPQUFMLGVBRUUsd0RBQ0UsZ0VBREYsZUFJRSwwQkFBQyxlQUFELDBCQUpGLENBRkYiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi9pbmRleFwiO1xuXG5pbXBvcnQgeyBCb2R5LCBFbGVtZW50LCBSZWFjdCB9IGZyb20gXCJlYXN5XCI7XG5cbmNvbnN0IHsgcmVuZGVyU3R5bGVzIH0gPSB3aXRoU3R5bGU7XG5cbk9iamVjdC5hc3NpZ24od2luZG93LCB7XG4gIFJlYWN0XG59KTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbmNvbnN0IFBhcmFncmFwaCA9IHdpdGhTdHlsZShjbGFzcyBleHRlbmRzIEVsZW1lbnQge1xuICBzdGF0aWMgdGFnTmFtZSA9IFwicFwiO1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFBhcmFncmFwaCwgcHJvcGVydGllcyk7IH1cbn0pYFxuXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBcbmA7XG5cbmNvbnN0IFN0eWxlZFBhcmFncmFwaCA9IHdpdGhTdHlsZShQYXJhZ3JhcGgpYFxuXG4gIGNvbG9yOiByZWQ7XG5cbmA7XG5cbnJlbmRlclN0eWxlcygpO1xuXG5ib2R5LnByZXBlbmQoXG5cbiAgPGFydGljbGU+XG4gICAgPGgxPlxuICAgICAgRWFzeSB3aXRoIFN0eWxlIGV4YW1wbGVcbiAgICA8L2gxPlxuICAgIDxTdHlsZWRQYXJhZ3JhcGg+XG4gICAgICBGaXJzdCBzdHlsZXMuLi5cbiAgICA8L1N0eWxlZFBhcmFncmFwaD5cbiAgPC9hcnRpY2xlPlxuXG4pO1xuIl19