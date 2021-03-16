"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _withStyle = require("with-style");
var _class = require("./utilities/class");
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var _Class;
var generateClassName = _withStyle.classNameUtilities.generateClassName, renderStyle = _withStyle.stylesUtilities.renderStyle, renderStyles = _withStyle.stylesUtilities.renderStyles, generateStyle = _withStyle.stylesUtilities.generateStyle, retrieveStyle = _withStyle.stylesUtilities.retrieveStyle;
function withStyle(ClassOrFunction) {
    return function() {
        var args = Array.prototype.slice.call(arguments); ///
        var _className = ClassOrFunction.className, className = _className === void 0 ? null : _className;
        var superStyle = retrieveStyle(className);
        className = generateClassName();
        generateStyle(args, className, superStyle);
        var ClassOrFunctionClass = _class.isClass(ClassOrFunction);
        if (ClassOrFunctionClass) {
            var Class = ClassOrFunction; ///
            ClassOrFunction = (function() {
                var _class1 = function(Class) {
                    _inherits(_class1, Class);
                    function _class1() {
                        _classCallCheck(this, _class1);
                        return _possibleConstructorReturn(this, _getPrototypeOf(_class1).apply(this, arguments));
                    }
                    _createClass(_class1, null, [
                        {
                            key: "fromClass",
                            value: function fromClass(_Class1, properties) {
                                for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                                    remainingArguments[_key - 2] = arguments[_key];
                                }
                                properties = appendClassNameToProperties(className, properties);
                                return (_Class = Class).fromClass.apply(_Class, [
                                    _Class1,
                                    properties
                                ].concat(_toConsumableArray(remainingArguments)));
                            }
                        }
                    ]);
                    return _class1;
                }(Class);
                return _class1;
            })();
        } else {
            var Function1 = ClassOrFunction; ///
            ClassOrFunction = function(properties) {
                properties = appendClassNameToProperties(className, properties);
                return Function1(properties);
            };
        }
        Object.assign(ClassOrFunction, {
            className: className
        });
        return ClassOrFunction;
    };
}
Object.assign(withStyle, {
    renderStyle: renderStyle,
    renderStyles: renderStyles
});
var _default = withStyle;
exports.default = _default;
_withStyle.tagNames.forEach(function(tagName) {
    Object.defineProperty(withStyle, tagName, {
        get: function() {
            return function() {
                var args = Array.prototype.slice.call(arguments), className = generateClassName();
                generateStyle(args, className);
                var Function2 = function(properties) {
                    properties = appendClassNameToProperties(className, properties);
                    return _easy.React.createElement(tagName, properties);
                };
                Object.assign(Function2, {
                    className: className
                });
                return Function2;
            };
        }
    });
});
function appendClassNameToProperties(className, properties) {
    properties = properties.hasOwnProperty("className") ? properties : _objectSpread({
    }, properties, {
        className: className
    }); ///
    return properties;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoU3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IHRhZ05hbWVzLCBzdHlsZXNVdGlsaXRpZXMsIGNsYXNzTmFtZVV0aWxpdGllcyB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IGlzQ2xhc3MgfSBmcm9tIFwiLi91dGlsaXRpZXMvY2xhc3NcIjtcblxuY29uc3QgeyBnZW5lcmF0ZUNsYXNzTmFtZSB9ID0gY2xhc3NOYW1lVXRpbGl0aWVzLFxuICAgICAgeyByZW5kZXJTdHlsZSwgcmVuZGVyU3R5bGVzLCBnZW5lcmF0ZVN0eWxlLCByZXRyaWV2ZVN0eWxlIH0gPSBzdHlsZXNVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHdpdGhTdHlsZShDbGFzc09yRnVuY3Rpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXTsgIC8vL1xuXG4gICAgbGV0IHsgY2xhc3NOYW1lID0gbnVsbCB9ID0gQ2xhc3NPckZ1bmN0aW9uO1xuXG4gICAgY29uc3Qgc3VwZXJTdHlsZSA9IHJldHJpZXZlU3R5bGUoY2xhc3NOYW1lKTtcblxuICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSwgc3VwZXJTdHlsZSk7XG5cbiAgICBjb25zdCBDbGFzc09yRnVuY3Rpb25DbGFzcyA9IGlzQ2xhc3MoQ2xhc3NPckZ1bmN0aW9uKTtcblxuICAgIGlmIChDbGFzc09yRnVuY3Rpb25DbGFzcykge1xuICAgICAgY29uc3QgQ2xhc3MgPSBDbGFzc09yRnVuY3Rpb247ICAvLy9cblxuICAgICAgQ2xhc3NPckZ1bmN0aW9uID0gY2xhc3MgZXh0ZW5kcyBDbGFzcyB7XG4gICAgICAgIHN0YXRpYyBmcm9tQ2xhc3MoX0NsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wZXJ0aWVzKGNsYXNzTmFtZSwgcHJvcGVydGllcyk7XG5cbiAgICAgICAgICByZXR1cm4gQ2xhc3MuZnJvbUNsYXNzKF9DbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBGdW5jdGlvbiA9IENsYXNzT3JGdW5jdGlvbjsgLy8vXG5cbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gICAgICAgIHByb3BlcnRpZXMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMoY2xhc3NOYW1lLCBwcm9wZXJ0aWVzKTtcblxuICAgICAgICByZXR1cm4gRnVuY3Rpb24ocHJvcGVydGllcyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oQ2xhc3NPckZ1bmN0aW9uLCB7XG4gICAgICBjbGFzc05hbWVcbiAgICB9KTtcblxuICAgIHJldHVybiBDbGFzc09yRnVuY3Rpb247XG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24od2l0aFN0eWxlLCB7XG4gIHJlbmRlclN0eWxlLFxuICByZW5kZXJTdHlsZXNcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGU7XG5cbnRhZ05hbWVzLmZvckVhY2goKHRhZ05hbWUpID0+IHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpdGhTdHlsZSwgdGFnTmFtZSwge1xuICAgIGdldDogKCkgPT4gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c10sICAvLy9cbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lKTtcblxuICAgICAgY29uc3QgRnVuY3Rpb24gPSAocHJvcGVydGllcykgPT4ge1xuICAgICAgICBwcm9wZXJ0aWVzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wZXJ0aWVzKGNsYXNzTmFtZSwgcHJvcGVydGllcyk7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgcHJvcGVydGllcyk7XG4gICAgICB9O1xuXG4gICAgICBPYmplY3QuYXNzaWduKEZ1bmN0aW9uLCB7XG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBGdW5jdGlvbjtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyhjbGFzc05hbWUsIHByb3BlcnRpZXMpIHtcbiAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoXCJjbGFzc05hbWVcIikgPyBwcm9wZXJ0aWVzIDogey4uLnByb3BlcnRpZXMsIGNsYXNzTmFtZX07IC8vL1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsS0FBQTtJQUNBLFVBQUE7SUFFQSxNQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTBCQSxNQUFBO0lBeEJBLGlCQUFBLEdBSkEsVUFBQSxvQkFJQSxpQkFBQSxFQUNBLFdBQUEsR0FMQSxVQUFBLGlCQUtBLFdBQUEsRUFBQSxZQUFBLEdBTEEsVUFBQSxpQkFLQSxZQUFBLEVBQUEsYUFBQSxHQUxBLFVBQUEsaUJBS0EsYUFBQSxFQUFBLGFBQUEsR0FMQSxVQUFBLGlCQUtBLGFBQUE7U0FFQSxTQUFBLENBQUEsZUFBQTs7WUFFQSxJQUFBLDhCQUFBLFNBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQTt5QkFFQSxlQUFBLENBQUEsU0FBQSxFQUFBLFNBQUEsMkJBQUEsSUFBQTtZQUVBLFVBQUEsR0FBQSxhQUFBLENBQUEsU0FBQTtBQUVBLGlCQUFBLEdBQUEsaUJBQUE7QUFFQSxxQkFBQSxDQUFBLElBQUEsRUFBQSxTQUFBLEVBQUEsVUFBQTtZQUVBLG9CQUFBLEdBakJBLE1BQUEsU0FpQkEsZUFBQTtZQUVBLG9CQUFBO2dCQUNBLEtBQUEsR0FBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFFQSwyQkFBQTt1Q0FBQSxLQUFBO3VDQUFBLEtBQUE7Ozs7Ozs7QUFDQSwrQkFBQSxHQUFBLFNBQUE7NENBQUEsU0FBQSxDQUFBLE9BQUEsRUFBQSxVQUFBO3dDQUFBLElBQUEsR0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLGtCQUFBLGFBQUEsSUFBQSxHQUFBLENBQUEsR0FBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxJQUFBLEdBQUEsQ0FBQSxFQUFBLElBQUEsR0FBQSxJQUFBLEVBQUEsSUFBQTtBQUFBLHNEQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsSUFBQSxTQUFBLENBQUEsSUFBQTs7QUFDQSwwQ0FBQSxHQUFBLDJCQUFBLENBQUEsU0FBQSxFQUFBLFVBQUE7d0NBRUEsTUFBQSxHQUFBLEtBQUEsRUFBQSxTQUFBLENBQUEsS0FBQSxDQUFBLE1BQUE7QUFBQSwyQ0FBQTtBQUFBLDhDQUFBO2tDQUFBLE1BQUEsb0JBQUEsa0JBQUE7Ozs7O2tCQUpBLEtBQUE7Ozs7Z0JBU0EsU0FBQSxHQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUVBLDJCQUFBLFlBQUEsVUFBQTtBQUNBLDBCQUFBLEdBQUEsMkJBQUEsQ0FBQSxTQUFBLEVBQUEsVUFBQTt1QkFFQSxTQUFBLENBQUEsVUFBQTs7O0FBSUEsY0FBQSxDQUFBLE1BQUEsQ0FBQSxlQUFBO0FBQ0EscUJBQUEsRUFBQSxTQUFBOztlQUdBLGVBQUE7OztBQUlBLE1BQUEsQ0FBQSxNQUFBLENBQUEsU0FBQTtBQUNBLGVBQUEsRUFBQSxXQUFBO0FBQ0EsZ0JBQUEsRUFBQSxZQUFBOztlQUdBLFNBQUE7O0FBdkRBLFVBQUEsVUF5REEsT0FBQSxVQUFBLE9BQUE7QUFDQSxVQUFBLENBQUEsY0FBQSxDQUFBLFNBQUEsRUFBQSxPQUFBO0FBQ0EsV0FBQTs7b0JBQ0EsSUFBQSw4QkFBQSxTQUFBLEdBQ0EsU0FBQSxHQUFBLGlCQUFBO0FBRUEsNkJBQUEsQ0FBQSxJQUFBLEVBQUEsU0FBQTtvQkFFQSxTQUFBLFlBQUEsVUFBQTtBQUNBLDhCQUFBLEdBQUEsMkJBQUEsQ0FBQSxTQUFBLEVBQUEsVUFBQTsyQkFuRUEsS0FBQSxPQXFFQSxhQUFBLENBQUEsT0FBQSxFQUFBLFVBQUE7O0FBR0Esc0JBQUEsQ0FBQSxNQUFBLENBQUEsU0FBQTtBQUNBLDZCQUFBLEVBQUEsU0FBQTs7dUJBR0EsU0FBQTs7Ozs7U0FLQSwyQkFBQSxDQUFBLFNBQUEsRUFBQSxVQUFBO0FBQ0EsY0FBQSxHQUFBLFVBQUEsQ0FBQSxjQUFBLEVBQUEsU0FBQSxLQUFBLFVBQUE7T0FBQSxVQUFBO0FBQUEsaUJBQUEsRUFBQSxTQUFBO09BQUEsQ0FBQSxFQUFBLENBQUE7V0FFQSxVQUFBIn0=