"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _textarea = _interopRequireDefault(require("../textarea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var BNFTextarea = /*#__PURE__*/function (_Textarea) {
  _inherits(BNFTextarea, _Textarea);

  var _super = _createSuper(BNFTextarea);

  function BNFTextarea() {
    _classCallCheck(this, BNFTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(BNFTextarea, [{
    key: "getBNF",
    value: function getBNF() {
      var value = this.getValue(),
          bnf = value; ///

      return bnf;
    }
  }, {
    key: "setBNF",
    value: function setBNF(bnf) {
      var value = bnf; ///

      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getBNF = this.getBNF.bind(this),
          setBNF = this.setBNF.bind(this);
      return {
        getBNF: getBNF,
        setBNF: setBNF
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      if (properties === undefined) {
        properties = Class; ///

        Class = BNFTextarea;
      }

      return _textarea["default"].fromProperties(Class, properties);
    }
  }]);

  return BNFTextarea;
}(_textarea["default"]);

_defineProperty(BNFTextarea, "defaultProperties", {
  className: "bnf"
});

var _default = BNFTextarea;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJuZi5qcyJdLCJuYW1lcyI6WyJCTkZUZXh0YXJlYSIsInZhbHVlIiwiZ2V0VmFsdWUiLCJibmYiLCJzZXRWYWx1ZSIsImdldEJORiIsImJpbmQiLCJzZXRCTkYiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJ1bmRlZmluZWQiLCJUZXh0YXJlYSIsImZyb21Qcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFc7Ozs7Ozs7Ozs7Ozs7NkJBQ0s7QUFDUCxVQUFNQyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsR0FBRyxHQUFHRixLQURaLENBRE8sQ0FFYTs7QUFFcEIsYUFBT0UsR0FBUDtBQUNEOzs7MkJBRU1BLEcsRUFBSztBQUNWLFVBQU1GLEtBQUssR0FBR0UsR0FBZCxDQURVLENBQ1U7O0FBRXBCLFdBQUtDLFFBQUwsQ0FBY0gsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZCxVQUFNSSxNQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZQyxJQUFaLENBQWlCLElBQWpCLENBQWY7QUFBQSxVQUNNQyxNQUFNLEdBQUcsS0FBS0EsTUFBTCxDQUFZRCxJQUFaLENBQWlCLElBQWpCLENBRGY7QUFHQSxhQUFRO0FBQ05ELFFBQUFBLE1BQU0sRUFBTkEsTUFETTtBQUVORSxRQUFBQSxNQUFNLEVBQU5BO0FBRk0sT0FBUjtBQUlEOzs7bUNBTXFCQyxLLEVBQU9DLFUsRUFBWTtBQUN2QyxVQUFJQSxVQUFVLEtBQUtDLFNBQW5CLEVBQThCO0FBQzVCRCxRQUFBQSxVQUFVLEdBQUdELEtBQWIsQ0FENEIsQ0FDUjs7QUFFcEJBLFFBQUFBLEtBQUssR0FBR1IsV0FBUjtBQUNEOztBQUVELGFBQU9XLHFCQUFTQyxjQUFULENBQXdCSixLQUF4QixFQUErQkMsVUFBL0IsQ0FBUDtBQUNEOzs7O0VBcEN1QkUsb0I7O2dCQUFwQlgsVyx1QkF3QnVCO0FBQ3pCYSxFQUFBQSxTQUFTLEVBQUU7QUFEYyxDOztlQWVkYixXIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuY2xhc3MgQk5GVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldEJORigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBibmYgPSB2YWx1ZTsgIC8vL1xuXG4gICAgcmV0dXJuIGJuZjtcbiAgfVxuXG4gIHNldEJORihibmYpIHtcbiAgICBjb25zdCB2YWx1ZSA9IGJuZjsgIC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEJORiA9IHRoaXMuZ2V0Qk5GLmJpbmQodGhpcyksXG4gICAgICAgICAgc2V0Qk5GID0gdGhpcy5zZXRCTkYuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0Qk5GLFxuICAgICAgc2V0Qk5GXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImJuZlwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKHByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJvcGVydGllcyA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBCTkZUZXh0YXJlYTtcbiAgICB9XG5cbiAgICByZXR1cm4gVGV4dGFyZWEuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJORlRleHRhcmVhO1xuIl19