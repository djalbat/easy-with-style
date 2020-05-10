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
    renderStyle = _withStyle.stylesUtilities.renderStyle,
    renderStyles = _withStyle.stylesUtilities.renderStyles,
    generateStyle = _withStyle.stylesUtilities.generateStyle,
    retrieveStyle = _withStyle.stylesUtilities.retrieveStyle;

function withStyle(ClassOrFunction) {
  return function () {
    var args = Array.prototype.slice.call(arguments); ///

    var _ClassOrFunction = ClassOrFunction,
        _ClassOrFunction$clas = _ClassOrFunction.className,
        className = _ClassOrFunction$clas === void 0 ? null : _ClassOrFunction$clas;
    var superStyle = retrieveStyle(className);
    className = generateClassName();
    generateStyle(args, className, superStyle);
    var ClassOrFunctionClass = (0, _class.isClass)(ClassOrFunction);
    Object.assign(ClassOrFunction, {
      className: className
    });

    if (ClassOrFunctionClass) {
      var Class = ClassOrFunction; ///

      ClassOrFunction = /*#__PURE__*/function (_Class2) {
        _inherits(ClassOrFunction, _Class2);

        var _super = _createSuper(ClassOrFunction);

        function ClassOrFunction() {
          _classCallCheck(this, ClassOrFunction);

          return _super.apply(this, arguments);
        }

        _createClass(ClassOrFunction, null, [{
          key: "fromClass",
          value: function fromClass(_Class, properties) {
            properties = appendClassNameToProperties(className, properties);

            for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              remainingArguments[_key - 2] = arguments[_key];
            }

            return Class.fromClass.apply(Class, [_Class, properties].concat(remainingArguments));
          }
        }]);

        return ClassOrFunction;
      }(Class);
    } else {
      var _Function = ClassOrFunction; ///

      ClassOrFunction = function ClassOrFunction(properties) {
        properties = appendClassNameToProperties(className, properties);
        return _Function(properties);
      };
    }

    return ClassOrFunction;
  };
}

Object.assign(withStyle, {
  renderStyle: renderStyle,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhTdHlsZS5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNsYXNzTmFtZSIsImNsYXNzTmFtZVV0aWxpdGllcyIsInJlbmRlclN0eWxlIiwic3R5bGVzVXRpbGl0aWVzIiwicmVuZGVyU3R5bGVzIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJ3aXRoU3R5bGUiLCJDbGFzc09yRnVuY3Rpb24iLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xhc3NOYW1lIiwic3VwZXJTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbkNsYXNzIiwiT2JqZWN0IiwiYXNzaWduIiwiQ2xhc3MiLCJfQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZnJvbUNsYXNzIiwiRnVuY3Rpb24iLCJ0YWdOYW1lcyIsImZvckVhY2giLCJ0YWdOYW1lIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBRUEsaUJBQUYsR0FBd0JDLDZCQUF4QixDQUFFRCxpQkFBRjtBQUFBLElBQ0VFLFdBREYsR0FDOERDLDBCQUQ5RCxDQUNFRCxXQURGO0FBQUEsSUFDZUUsWUFEZixHQUM4REQsMEJBRDlELENBQ2VDLFlBRGY7QUFBQSxJQUM2QkMsYUFEN0IsR0FDOERGLDBCQUQ5RCxDQUM2QkUsYUFEN0I7QUFBQSxJQUM0Q0MsYUFENUMsR0FDOERILDBCQUQ5RCxDQUM0Q0csYUFENUM7O0FBR04sU0FBU0MsU0FBVCxDQUFtQkMsZUFBbkIsRUFBb0M7QUFDbEMsU0FBTyxZQUFXO0FBQ2hCLFFBQU1DLElBQUksOEJBQU9DLFNBQVAsQ0FBVixDQURnQixDQUNjOztBQURkLDJCQUdXRixlQUhYO0FBQUEsaURBR1ZHLFNBSFU7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QVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyB0YWdOYW1lcywgc3R5bGVzVXRpbGl0aWVzLCBjbGFzc05hbWVVdGlsaXRpZXMgfSBmcm9tIFwid2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBpc0NsYXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NsYXNzXCI7XG5cbmNvbnN0IHsgZ2VuZXJhdGVDbGFzc05hbWUgfSA9IGNsYXNzTmFtZVV0aWxpdGllcyxcbiAgICAgIHsgcmVuZGVyU3R5bGUsIHJlbmRlclN0eWxlcywgZ2VuZXJhdGVTdHlsZSwgcmV0cmlldmVTdHlsZSB9ID0gc3R5bGVzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGUoQ2xhc3NPckZ1bmN0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c107ICAvLy9cblxuICAgIGxldCB7IGNsYXNzTmFtZSA9IG51bGwgfSA9IENsYXNzT3JGdW5jdGlvbjtcblxuICAgIGNvbnN0IHN1cGVyU3R5bGUgPSByZXRyaWV2ZVN0eWxlKGNsYXNzTmFtZSk7XG5cbiAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUsIHN1cGVyU3R5bGUpO1xuXG4gICAgY29uc3QgQ2xhc3NPckZ1bmN0aW9uQ2xhc3MgPSBpc0NsYXNzKENsYXNzT3JGdW5jdGlvbik7XG5cbiAgICBPYmplY3QuYXNzaWduKENsYXNzT3JGdW5jdGlvbiwge1xuICAgICAgY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICBpZiAoQ2xhc3NPckZ1bmN0aW9uQ2xhc3MpIHtcbiAgICAgIGNvbnN0IENsYXNzID0gQ2xhc3NPckZ1bmN0aW9uOyAgLy8vXG5cbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IGNsYXNzIGV4dGVuZHMgQ2xhc3Mge1xuICAgICAgICBzdGF0aWMgZnJvbUNsYXNzKF9DbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgICAgICAgcHJvcGVydGllcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyhjbGFzc05hbWUsIHByb3BlcnRpZXMpO1xuXG4gICAgICAgICAgcmV0dXJuIENsYXNzLmZyb21DbGFzcyhfQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgRnVuY3Rpb24gPSBDbGFzc09yRnVuY3Rpb247IC8vL1xuXG4gICAgICBDbGFzc09yRnVuY3Rpb24gPSAocHJvcGVydGllcykgPT4ge1xuICAgICAgICBwcm9wZXJ0aWVzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wZXJ0aWVzKGNsYXNzTmFtZSwgcHJvcGVydGllcyk7XG5cbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gQ2xhc3NPckZ1bmN0aW9uO1xuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKHdpdGhTdHlsZSwge1xuICByZW5kZXJTdHlsZSxcbiAgcmVuZGVyU3R5bGVzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlO1xuXG50YWdOYW1lcy5mb3JFYWNoKCh0YWdOYW1lKSA9PiB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aXRoU3R5bGUsIHRhZ05hbWUsIHtcbiAgICBnZXQ6ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdLCAgLy8vXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gKHByb3BlcnRpZXMpID0+IHtcbiAgICAgICAgcHJvcGVydGllcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyhjbGFzc05hbWUsIHByb3BlcnRpZXMpO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIHByb3BlcnRpZXMpO1xuICAgICAgfTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihGdW5jdGlvbiwge1xuICAgICAgICBjbGFzc05hbWVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gRnVuY3Rpb247XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMoY2xhc3NOYW1lLCBwcm9wZXJ0aWVzKSB7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpID8gcHJvcGVydGllcyA6IHsuLi5wcm9wZXJ0aWVzLCBjbGFzc05hbWV9OyAvLy9cblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cbiJdfQ==