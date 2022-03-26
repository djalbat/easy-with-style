"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _withStyle = require("with-style");
var _class = require("./utilities/class");
var _constants = require("./constants");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
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
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
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
            ClassOrFunction = /*#__PURE__*/ function(Class) {
                _inherits(_class1, Class);
                var _super = _createSuper(_class1);
                function _class1() {
                    _classCallCheck(this, _class1);
                    return _super.apply(this, arguments);
                }
                _createClass(_class1, null, [
                    {
                        key: "fromClass",
                        value: function fromClass(_Class, properties) {
                            for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                                remainingArguments[_key - 2] = arguments[_key];
                            }
                            var _$_Class;
                            properties = appendClassNameToProperties(className, properties);
                            return (_$_Class = Class1).fromClass.apply(_$_Class, [
                                _Class,
                                properties
                            ].concat(_toConsumableArray(remainingArguments)));
                        }
                    }
                ]);
                return _class1;
            }(Class1);
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
    properties = properties.hasOwnProperty(_constants.CLASS_NAME) ? properties : _objectSpread({}, properties, {
        className: className
    }); ///
    return properties;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoU3R5bGUuanMiLCJsaWIvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyB0YWdOYW1lcywgc3R5bGVzVXRpbGl0aWVzLCBjbGFzc05hbWVVdGlsaXRpZXMgfSBmcm9tIFwid2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBpc0NsYXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NsYXNzXCI7XG5pbXBvcnQgeyBDTEFTU19OQU1FIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZ2VuZXJhdGVDbGFzc05hbWUgfSA9IGNsYXNzTmFtZVV0aWxpdGllcyxcbiAgICAgIHsgcmVuZGVyU3R5bGUsIHJlbmRlclN0eWxlcywgZ2VuZXJhdGVTdHlsZSwgcmV0cmlldmVTdHlsZSB9ID0gc3R5bGVzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGUoQ2xhc3NPckZ1bmN0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c107ICAvLy9cblxuICAgIGxldCB7IGNsYXNzTmFtZSA9IG51bGwgfSA9IENsYXNzT3JGdW5jdGlvbjtcblxuICAgIGNvbnN0IHN1cGVyU3R5bGUgPSByZXRyaWV2ZVN0eWxlKGNsYXNzTmFtZSk7XG5cbiAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUsIHN1cGVyU3R5bGUpO1xuXG4gICAgY29uc3QgQ2xhc3NPckZ1bmN0aW9uQ2xhc3MgPSBpc0NsYXNzKENsYXNzT3JGdW5jdGlvbik7XG5cbiAgICBpZiAoQ2xhc3NPckZ1bmN0aW9uQ2xhc3MpIHtcbiAgICAgIGNvbnN0IENsYXNzID0gQ2xhc3NPckZ1bmN0aW9uOyAgLy8vXG5cbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IGNsYXNzIGV4dGVuZHMgQ2xhc3Mge1xuICAgICAgICBzdGF0aWMgZnJvbUNsYXNzKF9DbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgICAgICAgcHJvcGVydGllcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyhjbGFzc05hbWUsIHByb3BlcnRpZXMpO1xuXG4gICAgICAgICAgcmV0dXJuIENsYXNzLmZyb21DbGFzcyhfQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgRnVuY3Rpb24gPSBDbGFzc09yRnVuY3Rpb247IC8vL1xuXG4gICAgICBDbGFzc09yRnVuY3Rpb24gPSAocHJvcGVydGllcykgPT4ge1xuICAgICAgICBwcm9wZXJ0aWVzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wZXJ0aWVzKGNsYXNzTmFtZSwgcHJvcGVydGllcyk7XG5cbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKENsYXNzT3JGdW5jdGlvbiwge1xuICAgICAgY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQ2xhc3NPckZ1bmN0aW9uO1xuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKHdpdGhTdHlsZSwge1xuICByZW5kZXJTdHlsZSxcbiAgcmVuZGVyU3R5bGVzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlO1xuXG50YWdOYW1lcy5mb3JFYWNoKCh0YWdOYW1lKSA9PiB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aXRoU3R5bGUsIHRhZ05hbWUsIHtcbiAgICBnZXQ6ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdLCAgLy8vXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gKHByb3BlcnRpZXMpID0+IHtcbiAgICAgICAgcHJvcGVydGllcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyhjbGFzc05hbWUsIHByb3BlcnRpZXMpO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIHByb3BlcnRpZXMpO1xuICAgICAgfTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihGdW5jdGlvbiwge1xuICAgICAgICBjbGFzc05hbWVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gRnVuY3Rpb247XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMoY2xhc3NOYW1lLCBwcm9wZXJ0aWVzKSB7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KENMQVNTX05BTUUpID8gcHJvcGVydGllcyA6IHsgLi4ucHJvcGVydGllcywgY2xhc3NOYW1lIH07IC8vL1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBDTEFTU19OQU1FID0gXCJjbGFzc05hbWVcIjtcbiJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNsYXNzTmFtZSIsImNsYXNzTmFtZVV0aWxpdGllcyIsInJlbmRlclN0eWxlIiwic3R5bGVzVXRpbGl0aWVzIiwicmVuZGVyU3R5bGVzIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJ3aXRoU3R5bGUiLCJDbGFzc09yRnVuY3Rpb24iLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xhc3NOYW1lIiwic3VwZXJTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbkNsYXNzIiwiaXNDbGFzcyIsIkNsYXNzIiwiZnJvbUNsYXNzIiwiX0NsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyIsIkZ1bmN0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZXMiLCJmb3JFYWNoIiwidGFnTmFtZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiaGFzT3duUHJvcGVydHkiLCJDTEFTU19OQU1FIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZLFdBQUEsQ0FBQzs7O0VBQWI7d0JBQUE7QUFFc0IsR0FBTSxDQUFOLEtBQU07QUFDa0MsR0FBWSxDQUFaLFVBQVk7QUFFbEQsR0FBbUIsQ0FBbkIsTUFBbUI7QUFDaEIsR0FBYSxDQUFiLFVBQWE7O3lEQU54Qzt1RUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OERBQUE7c0NBQUE7NkRBQUE7aUVBQUE7Ozs7d0VBQUE7Z0VBQUE7Ozs7Ozs7Ozs7VUFBQTs7d0JBQUE7Ozs7Ozs7S0FBQTs7Ozs7Ozs7Ozs7OztNQUFBO3lEQUFBOzs7Ozs7Ozs7Ozs7Ozs7ZUFBQTs7O3FEQUFBO1VBQUE7Ozs7Ozs7Ozs7Ozt1QkFBQTs7S0FBQTs7Ozs7OzsyQkFBQTs7Ozs7OzsrREFBQTs7Ozs7Ozs7O3FGQUFBOzs7Ozs7Ozs7Ozs7bUVBQUE7O2lEQUFBOzs7OztBQVFBLEdBQUssQ0FBR0EsaUJBQWlCLEdBQUtDLFVBQWtCLG9CQUF4Q0QsaUJBQWlCLEVBQ2pCRSxXQUFXLEdBQWlEQyxVQUFlLGlCQUEzRUQsV0FBVyxFQUFFRSxZQUFZLEdBQW1DRCxVQUFlLGlCQUE5REMsWUFBWSxFQUFFQyxhQUFhLEdBQW9CRixVQUFlLGlCQUFoREUsYUFBYSxFQUFFQyxhQUFhLEdBQUtILFVBQWUsaUJBQWpDRyxhQUFhO1NBRXREQyxTQUFTLENBQUNDLGVBQWUsRUFBRSxDQUFDO0lBQ25DLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQztRQUNqQixHQUFLLENBQUNDLElBQUksOEJBQU9DLFNBQVMsR0FBSSxFQUFHLEFBQUgsQ0FBRztRQUVqQyxHQUFHLGNBQXdCRixl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