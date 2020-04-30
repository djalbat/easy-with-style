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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpdGhTdHlsZS5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNsYXNzTmFtZSIsImNsYXNzTmFtZVV0aWxpdGllcyIsInJlbmRlclN0eWxlcyIsInN0eWxlc1V0aWxpdGllcyIsImdlbmVyYXRlU3R5bGUiLCJyZXRyaWV2ZVN0eWxlIiwid2l0aFN0eWxlIiwiQ2xhc3NPckZ1bmN0aW9uIiwiYXJncyIsImFyZ3VtZW50cyIsImNsYXNzTmFtZSIsInN1cGVyU3R5bGUiLCJDbGFzc09yRnVuY3Rpb25DbGFzcyIsIkNsYXNzIiwiX0NsYXNzIiwicHJvcGVydGllcyIsImFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImZyb21DbGFzcyIsIkZ1bmN0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZXMiLCJmb3JFYWNoIiwidGFnTmFtZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUVBLGlCQUFGLEdBQXdCQyw2QkFBeEIsQ0FBRUQsaUJBQUY7QUFBQSxJQUNFRSxZQURGLEdBQ2lEQywwQkFEakQsQ0FDRUQsWUFERjtBQUFBLElBQ2dCRSxhQURoQixHQUNpREQsMEJBRGpELENBQ2dCQyxhQURoQjtBQUFBLElBQytCQyxhQUQvQixHQUNpREYsMEJBRGpELENBQytCRSxhQUQvQjs7QUFHTixTQUFTQyxTQUFULENBQW1CQyxlQUFuQixFQUFvQztBQUNsQyxTQUFPLFlBQVc7QUFDaEIsUUFBTUMsSUFBSSw4QkFBT0MsU0FBUCxDQUFWLENBRGdCLENBQ2M7O0FBRGQsMkJBR1dGLGVBSFg7QUFBQSxpREFHVkcsU0FIVTtBQUFBLFFBR1ZBLFNBSFUsc0NBR0UsSUFIRjtBQUtoQixRQUFNQyxVQUFVLEdBQUdOLGFBQWEsQ0FBQ0ssU0FBRCxDQUFoQztBQUVBQSxJQUFBQSxTQUFTLEdBQUdWLGlCQUFpQixFQUE3QjtBQUVBSSxJQUFBQSxhQUFhLENBQUNJLElBQUQsRUFBT0UsU0FBUCxFQUFrQkMsVUFBbEIsQ0FBYjtBQUVBLFFBQU1DLG9CQUFvQixHQUFHLG9CQUFRTCxlQUFSLENBQTdCOztBQUVBLFFBQUlLLG9CQUFKLEVBQTBCO0FBQ3hCLFVBQU1DLEtBQUssR0FBR04sZUFBZCxDQUR3QixDQUNROztBQUVoQ0EsTUFBQUEsZUFBZTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsb0NBQ0lPLE1BREosRUFDWUMsVUFEWixFQUMrQztBQUMxREEsWUFBQUEsVUFBVSxHQUFHQywyQkFBMkIsQ0FBQ04sU0FBRCxFQUFZSyxVQUFaLENBQXhDOztBQUQwRCw4Q0FBcEJFLGtCQUFvQjtBQUFwQkEsY0FBQUEsa0JBQW9CO0FBQUE7O0FBRzFELG1CQUFPSixLQUFLLENBQUNLLFNBQU4sT0FBQUwsS0FBSyxHQUFXQyxNQUFYLEVBQW1CQyxVQUFuQixTQUFrQ0Usa0JBQWxDLEVBQVo7QUFDRDtBQUxZOztBQUFBO0FBQUEsUUFBaUJKLEtBQWpCLENBQWY7QUFPRCxLQVZELE1BVU87QUFDTCxVQUFNTSxTQUFRLEdBQUdaLGVBQWpCLENBREssQ0FDNkI7O0FBRWxDQSxNQUFBQSxlQUFlLEdBQUcseUJBQUNRLFVBQUQsRUFBZ0I7QUFDaENBLFFBQUFBLFVBQVUsR0FBR0MsMkJBQTJCLENBQUNOLFNBQUQsRUFBWUssVUFBWixDQUF4QztBQUVBLGVBQU9JLFNBQVEsQ0FBQ0osVUFBRCxDQUFmO0FBQ0QsT0FKRDtBQUtEOztBQUVESyxJQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBY2QsZUFBZCxFQUErQjtBQUM3QkcsTUFBQUEsU0FBUyxFQUFUQTtBQUQ2QixLQUEvQjtBQUlBLFdBQU9ILGVBQVA7QUFDRCxHQXRDRDtBQXVDRDs7QUFFRGEsTUFBTSxDQUFDQyxNQUFQLENBQWNmLFNBQWQsRUFBeUI7QUFDdkJKLEVBQUFBLFlBQVksRUFBWkE7QUFEdUIsQ0FBekI7ZUFJZUksUzs7O0FBRWZnQixvQkFBU0MsT0FBVCxDQUFpQixVQUFDQyxPQUFELEVBQWE7QUFDNUJKLEVBQUFBLE1BQU0sQ0FBQ0ssY0FBUCxDQUFzQm5CLFNBQXRCLEVBQWlDa0IsT0FBakMsRUFBMEM7QUFDeENFLElBQUFBLEdBQUcsRUFBRTtBQUFBLGFBQU0sWUFBVztBQUNwQixZQUFNbEIsSUFBSSw4QkFBT0MsU0FBUCxDQUFWO0FBQUEsWUFBOEI7QUFDeEJDLFFBQUFBLFNBQVMsR0FBR1YsaUJBQWlCLEVBRG5DO0FBR0FJLFFBQUFBLGFBQWEsQ0FBQ0ksSUFBRCxFQUFPRSxTQUFQLENBQWI7O0FBRUEsWUFBTVMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0osVUFBRCxFQUFnQjtBQUMvQkEsVUFBQUEsVUFBVSxHQUFHQywyQkFBMkIsQ0FBQ04sU0FBRCxFQUFZSyxVQUFaLENBQXhDO0FBRUEsaUJBQU9ZLFlBQU1DLGFBQU4sQ0FBb0JKLE9BQXBCLEVBQTZCVCxVQUE3QixDQUFQO0FBQ0QsU0FKRDs7QUFNQUssUUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNGLFFBQWQsRUFBd0I7QUFDdEJULFVBQUFBLFNBQVMsRUFBVEE7QUFEc0IsU0FBeEI7QUFJQSxlQUFPUyxRQUFQO0FBQ0QsT0FqQkk7QUFBQTtBQURtQyxHQUExQztBQW9CRCxDQXJCRDs7QUF1QkEsU0FBU0gsMkJBQVQsQ0FBcUNOLFNBQXJDLEVBQWdESyxVQUFoRCxFQUE0RDtBQUMxREEsRUFBQUEsVUFBVSxHQUFHQSxVQUFVLENBQUNjLGNBQVgsQ0FBMEIsV0FBMUIsSUFBeUNkLFVBQXpDLHFCQUEwREEsVUFBMUQ7QUFBc0VMLElBQUFBLFNBQVMsRUFBVEE7QUFBdEUsSUFBYixDQUQwRCxDQUNxQzs7QUFFL0YsU0FBT0ssVUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IHRhZ05hbWVzLCBzdHlsZXNVdGlsaXRpZXMsIGNsYXNzTmFtZVV0aWxpdGllcyB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IGlzQ2xhc3MgfSBmcm9tIFwiLi91dGlsaXRpZXMvY2xhc3NcIjtcblxuY29uc3QgeyBnZW5lcmF0ZUNsYXNzTmFtZSB9ID0gY2xhc3NOYW1lVXRpbGl0aWVzLFxuICAgICAgeyByZW5kZXJTdHlsZXMsIGdlbmVyYXRlU3R5bGUsIHJldHJpZXZlU3R5bGUgfSA9IHN0eWxlc1V0aWxpdGllcztcblxuZnVuY3Rpb24gd2l0aFN0eWxlKENsYXNzT3JGdW5jdGlvbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdOyAgLy8vXG5cbiAgICBsZXQgeyBjbGFzc05hbWUgPSBudWxsIH0gPSBDbGFzc09yRnVuY3Rpb247XG5cbiAgICBjb25zdCBzdXBlclN0eWxlID0gcmV0cmlldmVTdHlsZShjbGFzc05hbWUpO1xuXG4gICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lLCBzdXBlclN0eWxlKTtcblxuICAgIGNvbnN0IENsYXNzT3JGdW5jdGlvbkNsYXNzID0gaXNDbGFzcyhDbGFzc09yRnVuY3Rpb24pO1xuXG4gICAgaWYgKENsYXNzT3JGdW5jdGlvbkNsYXNzKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IENsYXNzT3JGdW5jdGlvbjsgIC8vL1xuXG4gICAgICBDbGFzc09yRnVuY3Rpb24gPSBjbGFzcyBleHRlbmRzIENsYXNzIHtcbiAgICAgICAgc3RhdGljIGZyb21DbGFzcyhfQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgICAgICAgIHByb3BlcnRpZXMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMoY2xhc3NOYW1lLCBwcm9wZXJ0aWVzKTtcblxuICAgICAgICAgIHJldHVybiBDbGFzcy5mcm9tQ2xhc3MoX0NsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gQ2xhc3NPckZ1bmN0aW9uOyAvLy9cblxuICAgICAgQ2xhc3NPckZ1bmN0aW9uID0gKHByb3BlcnRpZXMpID0+IHtcbiAgICAgICAgcHJvcGVydGllcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyhjbGFzc05hbWUsIHByb3BlcnRpZXMpO1xuXG4gICAgICAgIHJldHVybiBGdW5jdGlvbihwcm9wZXJ0aWVzKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihDbGFzc09yRnVuY3Rpb24sIHtcbiAgICAgIGNsYXNzTmFtZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIENsYXNzT3JGdW5jdGlvbjtcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbih3aXRoU3R5bGUsIHtcbiAgcmVuZGVyU3R5bGVzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlO1xuXG50YWdOYW1lcy5mb3JFYWNoKCh0YWdOYW1lKSA9PiB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aXRoU3R5bGUsIHRhZ05hbWUsIHtcbiAgICBnZXQ6ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdLCAgLy8vXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gKHByb3BlcnRpZXMpID0+IHtcbiAgICAgICAgcHJvcGVydGllcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyhjbGFzc05hbWUsIHByb3BlcnRpZXMpO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIHByb3BlcnRpZXMpO1xuICAgICAgfTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihGdW5jdGlvbiwge1xuICAgICAgICBjbGFzc05hbWVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gRnVuY3Rpb247XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMoY2xhc3NOYW1lLCBwcm9wZXJ0aWVzKSB7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpID8gcHJvcGVydGllcyA6IHsuLi5wcm9wZXJ0aWVzLCBjbGFzc05hbWV9OyAvLy9cblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cbiJdfQ==