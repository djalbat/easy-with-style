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
    addStyle = _withStyle.stylesUtilities.addStyle,
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

      Object.assign(Class, {
        className: className
      });
    } else {
      var _Function = ClassOrFunction; ///

      ClassOrFunction = function ClassOrFunction(properties) {
        properties = appendClassNameToProperties(className, properties);
        return _Function(properties);
      };

      Object.assign(_Function, {
        className: className
      });
    }

    return ClassOrFunction;
  };
}

Object.assign(withStyle, {
  addStyle: addStyle,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhTdHlsZS5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNsYXNzTmFtZSIsImNsYXNzTmFtZVV0aWxpdGllcyIsImFkZFN0eWxlIiwic3R5bGVzVXRpbGl0aWVzIiwicmVuZGVyU3R5bGVzIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJ3aXRoU3R5bGUiLCJDbGFzc09yRnVuY3Rpb24iLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xhc3NOYW1lIiwic3VwZXJTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbkNsYXNzIiwiQ2xhc3MiLCJfQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiZnJvbUNsYXNzIiwiT2JqZWN0IiwiYXNzaWduIiwiRnVuY3Rpb24iLCJ0YWdOYW1lcyIsImZvckVhY2giLCJ0YWdOYW1lIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBRUEsaUJBQUYsR0FBd0JDLDZCQUF4QixDQUFFRCxpQkFBRjtBQUFBLElBQ0VFLFFBREYsR0FDMkRDLDBCQUQzRCxDQUNFRCxRQURGO0FBQUEsSUFDWUUsWUFEWixHQUMyREQsMEJBRDNELENBQ1lDLFlBRFo7QUFBQSxJQUMwQkMsYUFEMUIsR0FDMkRGLDBCQUQzRCxDQUMwQkUsYUFEMUI7QUFBQSxJQUN5Q0MsYUFEekMsR0FDMkRILDBCQUQzRCxDQUN5Q0csYUFEekM7O0FBR04sU0FBU0MsU0FBVCxDQUFtQkMsZUFBbkIsRUFBb0M7QUFDbEMsU0FBTyxZQUFXO0FBQ2hCLFFBQU1DLElBQUksOEJBQU9DLFNBQVAsQ0FBVixDQURnQixDQUNjOztBQURkLDJCQUdXRixlQUhYO0FBQUEsaURBR1ZHLFNBSFU7QUFB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QXpDLHFCQUEwREEsVUFBMUQ7QUFBc0VMLElBQUFBLFNBQVMsRUFBVEE7QUFBdEUsSUFBYixDQUQwRCxDQUNxQzs7QUFFL0YsU0FBT0ssVUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IHRhZ05hbWVzLCBzdHlsZXNVdGlsaXRpZXMsIGNsYXNzTmFtZVV0aWxpdGllcyB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IGlzQ2xhc3MgfSBmcm9tIFwiLi91dGlsaXRpZXMvY2xhc3NcIjtcblxuY29uc3QgeyBnZW5lcmF0ZUNsYXNzTmFtZSB9ID0gY2xhc3NOYW1lVXRpbGl0aWVzLFxuICAgICAgeyBhZGRTdHlsZSwgcmVuZGVyU3R5bGVzLCBnZW5lcmF0ZVN0eWxlLCByZXRyaWV2ZVN0eWxlIH0gPSBzdHlsZXNVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHdpdGhTdHlsZShDbGFzc09yRnVuY3Rpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXTsgIC8vL1xuXG4gICAgbGV0IHsgY2xhc3NOYW1lID0gbnVsbCB9ID0gQ2xhc3NPckZ1bmN0aW9uO1xuXG4gICAgY29uc3Qgc3VwZXJTdHlsZSA9IHJldHJpZXZlU3R5bGUoY2xhc3NOYW1lKTtcblxuICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSwgc3VwZXJTdHlsZSk7XG5cbiAgICBjb25zdCBDbGFzc09yRnVuY3Rpb25DbGFzcyA9IGlzQ2xhc3MoQ2xhc3NPckZ1bmN0aW9uKTtcblxuICAgIGlmIChDbGFzc09yRnVuY3Rpb25DbGFzcykge1xuICAgICAgY29uc3QgQ2xhc3MgPSBDbGFzc09yRnVuY3Rpb247ICAvLy9cblxuICAgICAgQ2xhc3NPckZ1bmN0aW9uID0gY2xhc3MgZXh0ZW5kcyBDbGFzcyB7XG4gICAgICAgIHN0YXRpYyBmcm9tQ2xhc3MoX0NsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wZXJ0aWVzKGNsYXNzTmFtZSwgcHJvcGVydGllcyk7XG5cbiAgICAgICAgICByZXR1cm4gQ2xhc3MuZnJvbUNsYXNzKF9DbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihDbGFzcywge1xuICAgICAgICBjbGFzc05hbWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBGdW5jdGlvbiA9IENsYXNzT3JGdW5jdGlvbjsgLy8vXG5cbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gICAgICAgIHByb3BlcnRpZXMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMoY2xhc3NOYW1lLCBwcm9wZXJ0aWVzKTtcblxuICAgICAgICByZXR1cm4gRnVuY3Rpb24ocHJvcGVydGllcyk7XG4gICAgICB9O1xuXG4gICAgICBPYmplY3QuYXNzaWduKEZ1bmN0aW9uLCB7XG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIENsYXNzT3JGdW5jdGlvbjtcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbih3aXRoU3R5bGUsIHtcbiAgYWRkU3R5bGUsXG4gIHJlbmRlclN0eWxlc1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZTtcblxudGFnTmFtZXMuZm9yRWFjaCgodGFnTmFtZSkgPT4ge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2l0aFN0eWxlLCB0YWdOYW1lLCB7XG4gICAgZ2V0OiAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXSwgIC8vL1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUpO1xuXG4gICAgICBjb25zdCBGdW5jdGlvbiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gICAgICAgIHByb3BlcnRpZXMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMoY2xhc3NOYW1lLCBwcm9wZXJ0aWVzKTtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBwcm9wZXJ0aWVzKTtcbiAgICAgIH07XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oRnVuY3Rpb24sIHtcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIEZ1bmN0aW9uO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wZXJ0aWVzKGNsYXNzTmFtZSwgcHJvcGVydGllcykge1xuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShcImNsYXNzTmFtZVwiKSA/IHByb3BlcnRpZXMgOiB7Li4ucHJvcGVydGllcywgY2xhc3NOYW1lfTsgLy8vXG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG4iXX0=