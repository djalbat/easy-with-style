"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _withStyle = require("with-style");

var _class = require("./utilities/class");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var generateClassName = _withStyle.classNameUtilities.generateClassName,
    renderStyles = _withStyle.stylesUtilities.renderStyles,
    generateStyle = _withStyle.stylesUtilities.generateStyle,
    retrieveStyle = _withStyle.stylesUtilities.retrieveStyle;

function withStyle(_ClassOrFunction2) {
  return function () {
    var args = Array.prototype.slice.call(arguments); ///

    var _ClassOrFunction = _ClassOrFunction2,
        _ClassOrFunction$clas = _ClassOrFunction.className,
        className = _ClassOrFunction$clas === void 0 ? null : _ClassOrFunction$clas;
    var superStyle = retrieveStyle(className);
    className = generateClassName();
    generateStyle(args, className, superStyle);
    var ClassOrFunctionClass = (0, _class.isClass)(_ClassOrFunction2);

    if (ClassOrFunctionClass) {
      var Class = _ClassOrFunction2; ///

      _ClassOrFunction2 = /*#__PURE__*/function (_Class2) {
        _inherits(ClassOrFunction, _Class2);

        var _super = _createSuper(ClassOrFunction);

        function ClassOrFunction() {
          _classCallCheck(this, ClassOrFunction);

          return _super.apply(this, arguments);
        }

        _createClass(ClassOrFunction, null, [{
          key: "fromProperties",
          value: function fromProperties(_Class, properties) {
            if (properties === undefined) {
              properties = _Class; ///

              _Class = _ClassOrFunction2;
            }

            properties = appendClassNameToProperties(className, properties);
            return Class.fromProperties(_Class, properties);
          }
        }]);

        return ClassOrFunction;
      }(Class);
    } else {
      var _Function = _ClassOrFunction2; ///

      _ClassOrFunction2 = function _ClassOrFunction2(properties) {
        properties = appendClassNameToProperties(className, properties);
        return _Function(properties);
      };
    }

    Object.assign(_ClassOrFunction2, {
      className: className
    });
    return _ClassOrFunction2;
  };
}

Object.assign(withStyle, {
  renderStyles: renderStyles
});
var _default = withStyle;
exports["default"] = _default;

_withStyle.tagNames.forEach(function (tagName) {
  Object.defineProperty(withStyle, tagName, {
    get: function get() {
      return function () {
        var args = Array.prototype.slice.call(arguments),
            ///
        className = generateClassName();
        generateStyle(args, className);

        var Function = function Function(properties) {
          properties = appendClassNameToProperties(className, properties);
          return _easy.React.createElement(tagName, properties);
        };

        Object.assign(Function, {
          className: className
        });
        return Function;
      };
    }
  });
});

function appendClassNameToProperties(className, properties) {
  properties = properties.hasOwnProperty("className") ? properties : _objectSpread({}, properties, {
    className: className
  }); ///

  return properties;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhTdHlsZS5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNsYXNzTmFtZSIsImNsYXNzTmFtZVV0aWxpdGllcyIsInJlbmRlclN0eWxlcyIsInN0eWxlc1V0aWxpdGllcyIsImdlbmVyYXRlU3R5bGUiLCJyZXRyaWV2ZVN0eWxlIiwid2l0aFN0eWxlIiwiQ2xhc3NPckZ1bmN0aW9uIiwiYXJncyIsImFyZ3VtZW50cyIsImNsYXNzTmFtZSIsInN1cGVyU3R5bGUiLCJDbGFzc09yRnVuY3Rpb25DbGFzcyIsIkNsYXNzIiwiX0NsYXNzIiwicHJvcGVydGllcyIsInVuZGVmaW5lZCIsImFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiRnVuY3Rpb24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lcyIsImZvckVhY2giLCJ0YWdOYW1lIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBRUEsaUJBQUYsR0FBd0JDLDZCQUF4QixDQUFFRCxpQkFBRjtBQUFBLElBQ0VFLFlBREYsR0FDaURDLDBCQURqRCxDQUNFRCxZQURGO0FBQUEsSUFDZ0JFLGFBRGhCLEdBQ2lERCwwQkFEakQsQ0FDZ0JDLGFBRGhCO0FBQUEsSUFDK0JDLGFBRC9CLEdBQ2lERiwwQkFEakQsQ0FDK0JFLGFBRC9COztBQUdOLFNBQVNDLFNBQVQsQ0FBbUJDLGlCQUFuQixFQUFvQztBQUNsQyxTQUFPLFlBQVc7QUFDaEIsUUFBTUMsSUFBSSw4QkFBT0MsU0FBUCxDQUFWLENBRGdCLENBQ2M7O0FBRGQsMkJBR1dGLGlCQUhYO0FBQUEsaURBR1ZHLFNBSFU7QUFBQSxRQUdWQSxTQUhVLHNDQUdFLElBSEY7QUFLaEIsUUFBTUMsVUFBVSxHQUFHTixhQUFhLENB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cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyB0YWdOYW1lcywgc3R5bGVzVXRpbGl0aWVzLCBjbGFzc05hbWVVdGlsaXRpZXMgfSBmcm9tIFwid2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBpc0NsYXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NsYXNzXCI7XG5cbmNvbnN0IHsgZ2VuZXJhdGVDbGFzc05hbWUgfSA9IGNsYXNzTmFtZVV0aWxpdGllcyxcbiAgICAgIHsgcmVuZGVyU3R5bGVzLCBnZW5lcmF0ZVN0eWxlLCByZXRyaWV2ZVN0eWxlIH0gPSBzdHlsZXNVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHdpdGhTdHlsZShDbGFzc09yRnVuY3Rpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXTsgIC8vL1xuXG4gICAgbGV0IHsgY2xhc3NOYW1lID0gbnVsbCB9ID0gQ2xhc3NPckZ1bmN0aW9uO1xuXG4gICAgY29uc3Qgc3VwZXJTdHlsZSA9IHJldHJpZXZlU3R5bGUoY2xhc3NOYW1lKTtcblxuICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSwgc3VwZXJTdHlsZSk7XG5cbiAgICBjb25zdCBDbGFzc09yRnVuY3Rpb25DbGFzcyA9IGlzQ2xhc3MoQ2xhc3NPckZ1bmN0aW9uKTtcblxuICAgIGlmIChDbGFzc09yRnVuY3Rpb25DbGFzcykge1xuICAgICAgY29uc3QgQ2xhc3MgPSBDbGFzc09yRnVuY3Rpb247ICAvLy9cblxuICAgICAgQ2xhc3NPckZ1bmN0aW9uID0gY2xhc3MgZXh0ZW5kcyBDbGFzcyB7XG4gICAgICAgIHN0YXRpYyBmcm9tUHJvcGVydGllcyhfQ2xhc3MsIHByb3BlcnRpZXMpIHtcbiAgICAgICAgICBpZiAocHJvcGVydGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gX0NsYXNzOyAvLy9cblxuICAgICAgICAgICAgX0NsYXNzID0gQ2xhc3NPckZ1bmN0aW9uO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHByb3BlcnRpZXMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMoY2xhc3NOYW1lLCBwcm9wZXJ0aWVzKTtcblxuICAgICAgICAgIHJldHVybiBDbGFzcy5mcm9tUHJvcGVydGllcyhfQ2xhc3MsIHByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gQ2xhc3NPckZ1bmN0aW9uOyAvLy9cblxuICAgICAgQ2xhc3NPckZ1bmN0aW9uID0gKHByb3BlcnRpZXMpID0+IHtcbiAgICAgICAgcHJvcGVydGllcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyhjbGFzc05hbWUsIHByb3BlcnRpZXMpO1xuXG4gICAgICAgIHJldHVybiBGdW5jdGlvbihwcm9wZXJ0aWVzKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihDbGFzc09yRnVuY3Rpb24sIHtcbiAgICAgIGNsYXNzTmFtZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIENsYXNzT3JGdW5jdGlvbjtcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbih3aXRoU3R5bGUsIHtcbiAgcmVuZGVyU3R5bGVzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlO1xuXG50YWdOYW1lcy5mb3JFYWNoKCh0YWdOYW1lKSA9PiB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aXRoU3R5bGUsIHRhZ05hbWUsIHtcbiAgICBnZXQ6ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdLCAgLy8vXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gKHByb3BlcnRpZXMpID0+IHtcbiAgICAgICAgcHJvcGVydGllcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyhjbGFzc05hbWUsIHByb3BlcnRpZXMpO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIHByb3BlcnRpZXMpO1xuICAgICAgfTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihGdW5jdGlvbiwge1xuICAgICAgICBjbGFzc05hbWVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gRnVuY3Rpb247XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMoY2xhc3NOYW1lLCBwcm9wZXJ0aWVzKSB7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpID8gcHJvcGVydGllcyA6IHsuLi5wcm9wZXJ0aWVzLCBjbGFzc05hbWV9OyAvLy9cblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cbiJdfQ==