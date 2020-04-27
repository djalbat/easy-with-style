"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../../index"));

var _textarea = _interopRequireDefault(require("../textarea"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  margin-bottom: 1rem;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var ParseTreeTextarea = /*#__PURE__*/function (_Textarea) {
  _inherits(ParseTreeTextarea, _Textarea);

  var _super = _createSuper(ParseTreeTextarea);

  function ParseTreeTextarea() {
    _classCallCheck(this, ParseTreeTextarea);

    return _super.apply(this, arguments);
  }

  _createClass(ParseTreeTextarea, [{
    key: "setParseTree",
    value: function setParseTree(parseTree) {
      if (parseTree !== null) {
        parseTree.shiftLine(); //

        var parseTreeString = parseTree.asString(),
            value = parseTreeString; ///

        this.setValue(value);
      } else {
        this.clearParseTree();
      }
    }
  }, {
    key: "clearParseTree",
    value: function clearParseTree() {
      var value = "";
      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var setParseTree = this.setParseTree.bind(this),
          clearParseTree = this.clearParseTree.bind(this);
      return {
        setParseTree: setParseTree,
        clearParseTree: clearParseTree
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      if (properties === undefined) {
        properties = Class; ///

        Class = ParseTreeTextarea;
      }

      return _textarea["default"].fromProperties(Class, properties);
    }
  }]);

  return ParseTreeTextarea;
}(_textarea["default"]);

_defineProperty(ParseTreeTextarea, "defaultProperties", {
  className: "parse-tree"
});

var _default = (0, _index["default"])(ParseTreeTextarea)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlVHJlZS5qcyJdLCJuYW1lcyI6WyJQYXJzZVRyZWVUZXh0YXJlYSIsInBhcnNlVHJlZSIsInNoaWZ0TGluZSIsInBhcnNlVHJlZVN0cmluZyIsImFzU3RyaW5nIiwidmFsdWUiLCJzZXRWYWx1ZSIsImNsZWFyUGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiYmluZCIsIkNsYXNzIiwicHJvcGVydGllcyIsInVuZGVmaW5lZCIsIlRleHRhcmVhIiwiZnJvbVByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsaUI7Ozs7Ozs7Ozs7Ozs7aUNBQ1NDLFMsRUFBVztBQUN0QixVQUFJQSxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDdEJBLFFBQUFBLFNBQVMsQ0FBQ0MsU0FBVixHQURzQixDQUNFOztBQUV4QixZQUFNQyxlQUFlLEdBQUdGLFNBQVMsQ0FBQ0csUUFBVixFQUF4QjtBQUFBLFlBQ01DLEtBQUssR0FBR0YsZUFEZCxDQUhzQixDQUlVOztBQUVoQyxhQUFLRyxRQUFMLENBQWNELEtBQWQ7QUFDRCxPQVBELE1BT087QUFDTCxhQUFLRSxjQUFMO0FBQ0Q7QUFDRjs7O3FDQUVnQjtBQUNmLFVBQU1GLEtBQUssR0FBRyxFQUFkO0FBRUEsV0FBS0MsUUFBTCxDQUFjRCxLQUFkO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1HLFlBQVksR0FBRyxLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFyQjtBQUFBLFVBQ01GLGNBQWMsR0FBRyxLQUFLQSxjQUFMLENBQW9CRSxJQUFwQixDQUF5QixJQUF6QixDQUR2QjtBQUdBLGFBQVE7QUFDTkQsUUFBQUEsWUFBWSxFQUFaQSxZQURNO0FBRU5ELFFBQUFBLGNBQWMsRUFBZEE7QUFGTSxPQUFSO0FBSUQ7OzttQ0FNcUJHLEssRUFBT0MsVSxFQUFZO0FBQ3ZDLFVBQUlBLFVBQVUsS0FBS0MsU0FBbkIsRUFBOEI7QUFDNUJELFFBQUFBLFVBQVUsR0FBR0QsS0FBYixDQUQ0QixDQUNSOztBQUVwQkEsUUFBQUEsS0FBSyxHQUFHVixpQkFBUjtBQUNEOztBQUVELGFBQU9hLHFCQUFTQyxjQUFULENBQXdCSixLQUF4QixFQUErQkMsVUFBL0IsQ0FBUDtBQUNEOzs7O0VBMUM2QkUsb0I7O2dCQUExQmIsaUIsdUJBOEJ1QjtBQUN6QmUsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFlZCx1QkFBVWYsaUJBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuY2xhc3MgUGFyc2VUcmVlVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIHNldFBhcnNlVHJlZShwYXJzZVRyZWUpIHtcbiAgICBpZiAocGFyc2VUcmVlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUuYXNTdHJpbmcoKSxcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VUcmVlU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJQYXJzZVRyZWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBcIlwiO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IHNldFBhcnNlVHJlZSA9IHRoaXMuc2V0UGFyc2VUcmVlLmJpbmQodGhpcyksXG4gICAgICAgICAgY2xlYXJQYXJzZVRyZWUgPSB0aGlzLmNsZWFyUGFyc2VUcmVlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNldFBhcnNlVHJlZSxcbiAgICAgIGNsZWFyUGFyc2VUcmVlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInBhcnNlLXRyZWVcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGlmIChwcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gUGFyc2VUcmVlVGV4dGFyZWE7XG4gICAgfVxuXG4gICAgcmV0dXJuIFRleHRhcmVhLmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUGFyc2VUcmVlVGV4dGFyZWEpYFxuXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbmA7XG4iXX0=