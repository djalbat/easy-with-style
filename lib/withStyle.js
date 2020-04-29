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
            return Class.fromClass(_Class, properties);
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

    Object.assign(ClassOrFunction, {
      className: className
    });
    return ClassOrFunction;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhTdHlsZS5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNsYXNzTmFtZSIsImNsYXNzTmFtZVV0aWxpdGllcyIsInJlbmRlclN0eWxlcyIsInN0eWxlc1V0aWxpdGllcyIsImdlbmVyYXRlU3R5bGUiLCJyZXRyaWV2ZVN0eWxlIiwid2l0aFN0eWxlIiwiQ2xhc3NPckZ1bmN0aW9uIiwiYXJncyIsImFyZ3VtZW50cyIsImNsYXNzTmFtZSIsInN1cGVyU3R5bGUiLCJDbGFzc09yRnVuY3Rpb25DbGFzcyIsIkNsYXNzIiwiX0NsYXNzIiwicHJvcGVydGllcyIsImFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyIsImZyb21DbGFzcyIsIkZ1bmN0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZXMiLCJmb3JFYWNoIiwidGFnTmFtZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUVBLGlCQUFGLEdBQXdCQyw2QkFBeEIsQ0FBRUQsaUJBQUY7QUFBQSxJQUNFRSxZQURGLEdBQ2lEQywwQkFEakQsQ0FDRUQsWUFERjtBQUFBLElBQ2dCRSxhQURoQixHQUNpREQsMEJBRGpELENBQ2dCQyxhQURoQjtBQUFBLElBQytCQyxhQUQvQixHQUNpREYsMEJBRGpELENBQytCRSxhQUQvQjs7QUFHTixTQUFTQyxTQUFULENBQW1CQyxlQUFuQixFQUFvQztBQUNsQyxTQUFPLFlBQVc7QUFDaEIsUUFBTUMsSUFBSSw4QkFBT0MsU0FBUCxDQUFWLENBRGdCLENBQ2M7O0FBRGQsMkJBR1dGLGVBSFg7QUFBQSxpREFHVkcsU0FIVTtBQUFBLFFBR1ZBLFNBSFUsc0NBR0UsSUFIRjtBQUtoQixRQUFNQyxVQUFVLEdBQUdOLGFBQWEsQ0FBQ0ssU0FBRCxDQUFoQztBQUVBQSxJQUFBQSxTQUFTLEdBQUdWLGlCQUFpQixFQUE3QjtBQUVBSSxJQUFBQSxhQUFhLENBQUNJLElBQUQsRUFBT0UsU0FBUCxFQUFrQkMsVUFBbEIsQ0FBYjtBQUVBLFFBQU1DLG9CQUFvQixHQUFHLG9CQUFRTCxlQUFSLENBQTdCOztBQUVBLFFBQUlLLG9CQUFKLEVBQTBCO0FBQ3hCLFVBQU1DLEtBQUssR0FBR04sZUFBZCxDQUR3QixDQUNROztBQUVoQ0EsTUFBQUEsZUFBZTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsb0NBQ0lPLE1BREosRUFDWUMsVUFEWixFQUN3QjtBQUNuQ0EsWUFBQUEsVUFBVSxHQUFHQywyQkFBMkIsQ0FBQ04sU0FBRCxFQUFZSyxVQUFaLENBQXhDO0FBRUEsbUJBQU9GLEtBQUssQ0FBQ0ksU0FBTixDQUFnQkgsTUFBaEIsRUFBd0JDLFVBQXhCLENBQVA7QUFDRDtBQUxZOztBQUFBO0FBQUEsUUFBaUJGLEtBQWpCLENBQWY7QUFPRCxLQVZELE1BVU87QUFDTCxVQUFNSyxTQUFRLEdBQUdYLGVBQWpCLENBREssQ0FDNkI7O0FBRWxDQSxNQUFBQSxlQUFlLEdBQUcseUJBQUNRLFVBQUQsRUFBZ0I7QUFDaENBLFFBQUFBLFVBQVUsR0FBR0MsMkJBQTJCLENBQUNOLFNBQUQsRUFBWUssVUFBWixDQUF4QztBQUVBLGVBQU9HLFNBQVEsQ0FBQ0gsVUFBRCxDQUFmO0FBQ0QsT0FKRDtBQUtEOztBQUVESSxJQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY2IsZUFBZCxFQUErQjtBQUM3QkcsTUFBQUEsU0FBUyxFQUFUQTtBQUQ2QixLQUEvQjtBQUlBLFdBQU9ILGVBQVA7QUFDRCxHQXRDRDtBQXVDRDs7QUFFRFksTUFBTSxDQUFDQyxNQUFQLENBQWNkLFNBQWQsRUFBeUI7QUFDdkJKLEVBQUFBLFlBQVksRUFBWkE7QUFEdUIsQ0FBekI7ZUFJZUksUzs7O0FBRWZlLG9CQUFTQyxPQUFULENBQWlCLFVBQUNDLE9BQUQsRUFBYTtBQUM1QkosRUFBQUEsTUFBTSxDQUFDSyxjQUFQLENBQXNCbEIsU0FBdEIsRUFBaUNpQixPQUFqQyxFQUEwQztBQUN4Q0UsSUFBQUEsR0FBRyxFQUFFO0FBQUEsYUFBTSxZQUFXO0FBQ3BCLFlBQU1qQixJQUFJLDhCQUFPQyxTQUFQLENBQVY7QUFBQSxZQUE4QjtBQUN4QkMsUUFBQUEsU0FBUyxHQUFHVixpQkFBaUIsRUFEbkM7QUFHQUksUUFBQUEsYUFBYSxDQUFDSSxJQUFELEVBQU9FLFNBQVAsQ0FBYjs7QUFFQSxZQUFNUSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDSCxVQUFELEVBQWdCO0FBQy9CQSxVQUFBQSxVQUFVLEdBQUdDLDJCQUEyQixDQUFDTixTQUFELEVBQVlLLFVBQVosQ0FBeEM7QUFFQSxpQkFBT1csWUFBTUMsYUFBTixDQUFvQkosT0FBcEIsRUFBNkJSLFVBQTdCLENBQVA7QUFDRCxTQUpEOztBQU1BSSxRQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY0YsUUFBZCxFQUF3QjtBQUN0QlIsVUFBQUEsU0FBUyxFQUFUQTtBQURzQixTQUF4QjtBQUlBLGVBQU9RLFFBQVA7QUFDRCxPQWpCSTtBQUFBO0FBRG1DLEdBQTFDO0FBb0JELENBckJEOztBQXVCQSxTQUFTRiwyQkFBVCxDQUFxQ04sU0FBckMsRUFBZ0RLLFVBQWhELEVBQTREO0FBQzFEQSxFQUFBQSxVQUFVLEdBQUdBLFVBQVUsQ0FBQ2EsY0FBWCxDQUEwQixXQUExQixJQUF5Q2IsVUFBekMscUJBQTBEQSxVQUExRDtBQUFzRUwsSUFBQUEsU0FBUyxFQUFUQTtBQUF0RSxJQUFiLENBRDBELENBQ3FDOztBQUUvRixTQUFPSyxVQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgdGFnTmFtZXMsIHN0eWxlc1V0aWxpdGllcywgY2xhc3NOYW1lVXRpbGl0aWVzIH0gZnJvbSBcIndpdGgtc3R5bGVcIjtcblxuaW1wb3J0IHsgaXNDbGFzcyB9IGZyb20gXCIuL3V0aWxpdGllcy9jbGFzc1wiO1xuXG5jb25zdCB7IGdlbmVyYXRlQ2xhc3NOYW1lIH0gPSBjbGFzc05hbWVVdGlsaXRpZXMsXG4gICAgICB7IHJlbmRlclN0eWxlcywgZ2VuZXJhdGVTdHlsZSwgcmV0cmlldmVTdHlsZSB9ID0gc3R5bGVzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGUoQ2xhc3NPckZ1bmN0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c107ICAvLy9cblxuICAgIGxldCB7IGNsYXNzTmFtZSA9IG51bGwgfSA9IENsYXNzT3JGdW5jdGlvbjtcblxuICAgIGNvbnN0IHN1cGVyU3R5bGUgPSByZXRyaWV2ZVN0eWxlKGNsYXNzTmFtZSk7XG5cbiAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUsIHN1cGVyU3R5bGUpO1xuXG4gICAgY29uc3QgQ2xhc3NPckZ1bmN0aW9uQ2xhc3MgPSBpc0NsYXNzKENsYXNzT3JGdW5jdGlvbik7XG5cbiAgICBpZiAoQ2xhc3NPckZ1bmN0aW9uQ2xhc3MpIHtcbiAgICAgIGNvbnN0IENsYXNzID0gQ2xhc3NPckZ1bmN0aW9uOyAgLy8vXG5cbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IGNsYXNzIGV4dGVuZHMgQ2xhc3Mge1xuICAgICAgICBzdGF0aWMgZnJvbUNsYXNzKF9DbGFzcywgcHJvcGVydGllcykge1xuICAgICAgICAgIHByb3BlcnRpZXMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMoY2xhc3NOYW1lLCBwcm9wZXJ0aWVzKTtcblxuICAgICAgICAgIHJldHVybiBDbGFzcy5mcm9tQ2xhc3MoX0NsYXNzLCBwcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBGdW5jdGlvbiA9IENsYXNzT3JGdW5jdGlvbjsgLy8vXG5cbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gICAgICAgIHByb3BlcnRpZXMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMoY2xhc3NOYW1lLCBwcm9wZXJ0aWVzKTtcblxuICAgICAgICByZXR1cm4gRnVuY3Rpb24ocHJvcGVydGllcyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oQ2xhc3NPckZ1bmN0aW9uLCB7XG4gICAgICBjbGFzc05hbWVcbiAgICB9KTtcblxuICAgIHJldHVybiBDbGFzc09yRnVuY3Rpb247XG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24od2l0aFN0eWxlLCB7XG4gIHJlbmRlclN0eWxlc1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZTtcblxudGFnTmFtZXMuZm9yRWFjaCgodGFnTmFtZSkgPT4ge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2l0aFN0eWxlLCB0YWdOYW1lLCB7XG4gICAgZ2V0OiAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXSwgIC8vL1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUpO1xuXG4gICAgICBjb25zdCBGdW5jdGlvbiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gICAgICAgIHByb3BlcnRpZXMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMoY2xhc3NOYW1lLCBwcm9wZXJ0aWVzKTtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBwcm9wZXJ0aWVzKTtcbiAgICAgIH07XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oRnVuY3Rpb24sIHtcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIEZ1bmN0aW9uO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wZXJ0aWVzKGNsYXNzTmFtZSwgcHJvcGVydGllcykge1xuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShcImNsYXNzTmFtZVwiKSA/IHByb3BlcnRpZXMgOiB7Li4ucHJvcGVydGllcywgY2xhc3NOYW1lfTsgLy8vXG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG4iXX0=