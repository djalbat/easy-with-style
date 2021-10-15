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
        var ClassOrFunctionClass = (0, _class).isClass(ClassOrFunction);
        if (ClassOrFunctionClass) {
            var Class1 = ClassOrFunction; ///
            ClassOrFunction = /*#__PURE__*/ (function(Class) {
                _inherits(_class, Class);
                function _class() {
                    _classCallCheck(this, _class);
                    return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
                }
                _createClass(_class, null, [
                    {
                        key: "fromClass",
                        value: function fromClass(_Class1, properties) {
                            for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                                remainingArguments[_key - 2] = arguments[_key];
                            }
                            properties = appendClassNameToProperties(className, properties);
                            return (_Class = Class1).fromClass.apply(_Class, [
                                _Class1,
                                properties
                            ].concat(_toConsumableArray(remainingArguments)));
                        }
                    }
                ]);
                return _class;
            })(Class1);
        } else {
            var Function = ClassOrFunction; ///
            ClassOrFunction = function(properties) {
                properties = appendClassNameToProperties(className, properties);
                return Function(properties);
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
                var Function = function(properties) {
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
    properties = properties.hasOwnProperty("className") ? properties : _objectSpread({
    }, properties, {
        className: className
    }); ///
    return properties;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoU3R5bGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJ0YWdOYW1lcyIsInN0eWxlc1V0aWxpdGllcyIsImNsYXNzTmFtZVV0aWxpdGllcyIsImlzQ2xhc3MiLCJnZW5lcmF0ZUNsYXNzTmFtZSIsInJlbmRlclN0eWxlIiwicmVuZGVyU3R5bGVzIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJ3aXRoU3R5bGUiLCJDbGFzc09yRnVuY3Rpb24iLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xhc3NOYW1lIiwic3VwZXJTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbkNsYXNzIiwiQ2xhc3MiLCJmcm9tQ2xhc3MiLCJfQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wZXJ0aWVzIiwiRnVuY3Rpb24iLCJPYmplY3QiLCJhc3NpZ24iLCJmb3JFYWNoIiwidGFnTmFtZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiY3JlYXRlRWxlbWVudCIsImhhc093blByb3BlcnR5Il0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQU0sQ0FBTixLQUFNO0FBQ2tDLEdBQVksQ0FBWixVQUFZO0FBRWxELEdBQW1CLENBQW5CLE1BQW1COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTBCMUIsTUFBSztBQXhCdEIsR0FBSyxDQUFHLGlCQUFpQixHQUpxQyxVQUFZLG9CQUlsRSxpQkFBaUIsRUFDakIsV0FBVyxHQUwyQyxVQUFZLGlCQUtsRSxXQUFXLEVBQUUsWUFBWSxHQUw2QixVQUFZLGlCQUtyRCxZQUFZLEVBQUUsYUFBYSxHQUxjLFVBQVksaUJBS3ZDLGFBQWEsRUFBRSxhQUFhLEdBTEQsVUFBWSxpQkFLeEIsYUFBYTtTQUV0RCxTQUFT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QUFNLE9BcUVQLGFBQWEsQ0FBQyxPQUFPLEVBQUUsVUFBVTtnQkFDaEQsQ0FBQztnQkFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN2QixTQUFTLEVBQVQsU0FBUztnQkFDWCxDQUFDO2dCQUVELE1BQU0sQ0FBQyxRQUFRO1lBQ2pCLENBQUM7O0lBQ0gsQ0FBQztBQUNILENBQUM7U0FFUSwyQkFBMkIsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLENBQUM7SUFDM0QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBVyxjQUFJLFVBQVU7T0FBTyxVQUFVO1FBQUUsU0FBUyxFQUFULFNBQVM7T0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7SUFFbEcsTUFBTSxDQUFDLFVBQVU7QUFDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyB0YWdOYW1lcywgc3R5bGVzVXRpbGl0aWVzLCBjbGFzc05hbWVVdGlsaXRpZXMgfSBmcm9tIFwid2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBpc0NsYXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NsYXNzXCI7XG5cbmNvbnN0IHsgZ2VuZXJhdGVDbGFzc05hbWUgfSA9IGNsYXNzTmFtZVV0aWxpdGllcyxcbiAgICAgIHsgcmVuZGVyU3R5bGUsIHJlbmRlclN0eWxlcywgZ2VuZXJhdGVTdHlsZSwgcmV0cmlldmVTdHlsZSB9ID0gc3R5bGVzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGUoQ2xhc3NPckZ1bmN0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c107ICAvLy9cblxuICAgIGxldCB7IGNsYXNzTmFtZSA9IG51bGwgfSA9IENsYXNzT3JGdW5jdGlvbjtcblxuICAgIGNvbnN0IHN1cGVyU3R5bGUgPSByZXRyaWV2ZVN0eWxlKGNsYXNzTmFtZSk7XG5cbiAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUsIHN1cGVyU3R5bGUpO1xuXG4gICAgY29uc3QgQ2xhc3NPckZ1bmN0aW9uQ2xhc3MgPSBpc0NsYXNzKENsYXNzT3JGdW5jdGlvbik7XG5cbiAgICBpZiAoQ2xhc3NPckZ1bmN0aW9uQ2xhc3MpIHtcbiAgICAgIGNvbnN0IENsYXNzID0gQ2xhc3NPckZ1bmN0aW9uOyAgLy8vXG5cbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IGNsYXNzIGV4dGVuZHMgQ2xhc3Mge1xuICAgICAgICBzdGF0aWMgZnJvbUNsYXNzKF9DbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgICAgICAgcHJvcGVydGllcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyhjbGFzc05hbWUsIHByb3BlcnRpZXMpO1xuXG4gICAgICAgICAgcmV0dXJuIENsYXNzLmZyb21DbGFzcyhfQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgRnVuY3Rpb24gPSBDbGFzc09yRnVuY3Rpb247IC8vL1xuXG4gICAgICBDbGFzc09yRnVuY3Rpb24gPSAocHJvcGVydGllcykgPT4ge1xuICAgICAgICBwcm9wZXJ0aWVzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wZXJ0aWVzKGNsYXNzTmFtZSwgcHJvcGVydGllcyk7XG5cbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKENsYXNzT3JGdW5jdGlvbiwge1xuICAgICAgY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQ2xhc3NPckZ1bmN0aW9uO1xuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKHdpdGhTdHlsZSwge1xuICByZW5kZXJTdHlsZSxcbiAgcmVuZGVyU3R5bGVzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlO1xuXG50YWdOYW1lcy5mb3JFYWNoKCh0YWdOYW1lKSA9PiB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aXRoU3R5bGUsIHRhZ05hbWUsIHtcbiAgICBnZXQ6ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdLCAgLy8vXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gKHByb3BlcnRpZXMpID0+IHtcbiAgICAgICAgcHJvcGVydGllcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyhjbGFzc05hbWUsIHByb3BlcnRpZXMpO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIHByb3BlcnRpZXMpO1xuICAgICAgfTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihGdW5jdGlvbiwge1xuICAgICAgICBjbGFzc05hbWVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gRnVuY3Rpb247XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMoY2xhc3NOYW1lLCBwcm9wZXJ0aWVzKSB7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpID8gcHJvcGVydGllcyA6IHsuLi5wcm9wZXJ0aWVzLCBjbGFzc05hbWV9OyAvLy9cblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cbiJdfQ==