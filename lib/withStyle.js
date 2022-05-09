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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoU3R5bGUuanMiLCIuLi9zcmMvY29uc3RhbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJlYXN5XCI7XG5pbXBvcnQgeyB0YWdOYW1lcywgc3R5bGVzVXRpbGl0aWVzLCBjbGFzc05hbWVVdGlsaXRpZXMgfSBmcm9tIFwid2l0aC1zdHlsZVwiO1xuXG5pbXBvcnQgeyBpc0NsYXNzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2NsYXNzXCI7XG5pbXBvcnQgeyBDTEFTU19OQU1FIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgZ2VuZXJhdGVDbGFzc05hbWUgfSA9IGNsYXNzTmFtZVV0aWxpdGllcyxcbiAgICAgIHsgcmVuZGVyU3R5bGUsIHJlbmRlclN0eWxlcywgZ2VuZXJhdGVTdHlsZSwgcmV0cmlldmVTdHlsZSB9ID0gc3R5bGVzVXRpbGl0aWVzO1xuXG5mdW5jdGlvbiB3aXRoU3R5bGUoQ2xhc3NPckZ1bmN0aW9uKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBhcmdzID0gWyAuLi5hcmd1bWVudHMgXTsgIC8vL1xuXG4gICAgbGV0IHsgY2xhc3NOYW1lID0gbnVsbCB9ID0gQ2xhc3NPckZ1bmN0aW9uO1xuXG4gICAgY29uc3Qgc3VwZXJTdHlsZSA9IHJldHJpZXZlU3R5bGUoY2xhc3NOYW1lKTtcblxuICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSwgc3VwZXJTdHlsZSk7XG5cbiAgICBjb25zdCBDbGFzc09yRnVuY3Rpb25DbGFzcyA9IGlzQ2xhc3MoQ2xhc3NPckZ1bmN0aW9uKTtcblxuICAgIGlmIChDbGFzc09yRnVuY3Rpb25DbGFzcykge1xuICAgICAgY29uc3QgQ2xhc3MgPSBDbGFzc09yRnVuY3Rpb247ICAvLy9cblxuICAgICAgQ2xhc3NPckZ1bmN0aW9uID0gY2xhc3MgZXh0ZW5kcyBDbGFzcyB7XG4gICAgICAgIHN0YXRpYyBmcm9tQ2xhc3MoX0NsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wZXJ0aWVzKGNsYXNzTmFtZSwgcHJvcGVydGllcyk7XG5cbiAgICAgICAgICByZXR1cm4gQ2xhc3MuZnJvbUNsYXNzKF9DbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBGdW5jdGlvbiA9IENsYXNzT3JGdW5jdGlvbjsgLy8vXG5cbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gICAgICAgIHByb3BlcnRpZXMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMoY2xhc3NOYW1lLCBwcm9wZXJ0aWVzKTtcblxuICAgICAgICByZXR1cm4gRnVuY3Rpb24ocHJvcGVydGllcyk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oQ2xhc3NPckZ1bmN0aW9uLCB7XG4gICAgICBjbGFzc05hbWVcbiAgICB9KTtcblxuICAgIHJldHVybiBDbGFzc09yRnVuY3Rpb247XG4gIH07XG59XG5cbk9iamVjdC5hc3NpZ24od2l0aFN0eWxlLCB7XG4gIHJlbmRlclN0eWxlLFxuICByZW5kZXJTdHlsZXNcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGU7XG5cbnRhZ05hbWVzLmZvckVhY2goKHRhZ05hbWUpID0+IHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpdGhTdHlsZSwgdGFnTmFtZSwge1xuICAgIGdldDogKCkgPT4gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBhcmdzID0gWy4uLmFyZ3VtZW50c10sICAvLy9cbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGdlbmVyYXRlQ2xhc3NOYW1lKCk7XG5cbiAgICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lKTtcblxuICAgICAgY29uc3QgRnVuY3Rpb24gPSAocHJvcGVydGllcykgPT4ge1xuICAgICAgICBwcm9wZXJ0aWVzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wZXJ0aWVzKGNsYXNzTmFtZSwgcHJvcGVydGllcyk7XG5cbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgcHJvcGVydGllcyk7XG4gICAgICB9O1xuXG4gICAgICBPYmplY3QuYXNzaWduKEZ1bmN0aW9uLCB7XG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBGdW5jdGlvbjtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyhjbGFzc05hbWUsIHByb3BlcnRpZXMpIHtcbiAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoQ0xBU1NfTkFNRSkgPyBwcm9wZXJ0aWVzIDogeyAuLi5wcm9wZXJ0aWVzLCBjbGFzc05hbWUgfTsgLy8vXG5cbiAgcmV0dXJuIHByb3BlcnRpZXM7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IENMQVNTX05BTUUgPSBcImNsYXNzTmFtZVwiO1xuIl0sIm5hbWVzIjpbImdlbmVyYXRlQ2xhc3NOYW1lIiwiY2xhc3NOYW1lVXRpbGl0aWVzIiwicmVuZGVyU3R5bGUiLCJzdHlsZXNVdGlsaXRpZXMiLCJyZW5kZXJTdHlsZXMiLCJnZW5lcmF0ZVN0eWxlIiwicmV0cmlldmVTdHlsZSIsIndpdGhTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbiIsImFyZ3MiLCJhcmd1bWVudHMiLCJjbGFzc05hbWUiLCJzdXBlclN0eWxlIiwiQ2xhc3NPckZ1bmN0aW9uQ2xhc3MiLCJpc0NsYXNzIiwiQ2xhc3MiLCJmcm9tQ2xhc3MiLCJfQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wZXJ0aWVzIiwiRnVuY3Rpb24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lcyIsImZvckVhY2giLCJ0YWdOYW1lIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsIkNMQVNTX05BTUUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLEtBQU0sV0FBTixNQUFNLENBQUE7QUFDa0MsSUFBQSxVQUFZLFdBQVosWUFBWSxDQUFBO0FBRWxELElBQUEsTUFBbUIsV0FBbkIsbUJBQW1CLENBQUE7QUFDaEIsSUFBQSxVQUFhLFdBQWIsYUFBYSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQU0sQUFBRUEsaUJBQWlCLEdBQUtDLFVBQWtCLG1CQUFBLENBQXhDRCxpQkFBaUIsQUFBdUIsRUFDeENFLFdBQVcsR0FBaURDLFVBQWUsZ0JBQUEsQ0FBM0VELFdBQVcsRUFBRUUsWUFBWSxHQUFtQ0QsVUFBZSxnQkFBQSxDQUE5REMsWUFBWSxFQUFFQyxhQUFhLEdBQW9CRixVQUFlLGdCQUFBLENBQWhERSxhQUFhLEVBQUVDLGFBQWEsR0FBS0gsVUFBZSxnQkFBQSxDQUFqQ0csYUFBYSxBQUFxQjtBQUVwRixTQUFTQyxTQUFTLENBQUNDLGVBQWUsRUFBRTtJQUNsQyxPQUFPLFdBQVc7UUFDaEIsSUFBTUMsSUFBSSxHQUFLLDJCQUFHQyxTQUFTLENBQVRBLEFBQVcsQUFBQyxFQUFFLEdBQUc7UUFFbkMsaUJBQTJCRixlQUFlLENBQXBDRyxTQUFTLEVBQVRBLFNBQVMsMkJBQUcsSUFBSSxhQUFBLEFBQXFCO1FBRTNDLElBQU1DLFVBQVUsR0FBR04sYUFBYSxDQUFDSyxTQUFTLENBQUMsQUFBQztRQUU1Q0EsU0FBUyxHQUFHWCxpQkFBaUIsRUFBRSxDQUFDO1FBRWhDSyxhQUFhLENBQUNJLElBQUksRUFBRUUsU0FBUyxFQUFFQyxVQUFVLENBQUMsQ0FBQztRQUUzQyxJQUFNQyxvQkFBb0IsR0FBR0MsQ0FBQUEsR0FBQUEsTUFBTyxBQUFpQixDQUFBLFFBQWpCLENBQUNOLGVBQWUsQ0FBQyxBQUFDO1FBRXRELElBQUlLLG9CQUFvQixFQUFFO1lBQ3hCLElBQU1FLE1BQUssR0FBR1AsZUFBZSxBQUFDLEVBQUUsR0FBRztZQUVuQ0EsZUFBZSxpQkFBRzs7Ozs7Ozs7O3dCQUNUUSxHQUFTLEVBQVRBLFdBQVM7K0JBQWhCLFNBQU9BLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFQyxVQUFVLEVBQXlCOzRCQUF2QixJQUFBLElBQUEsSUFBcUIsR0FBckIsU0FBcUIsQ0FBckIsTUFBcUIsRUFBckIsQUFBR0Msa0JBQWtCLEdBQXJCLFVBQUEsSUFBcUIsR0FBckIsQ0FBcUIsR0FBckIsSUFBcUIsR0FBckIsQ0FBcUIsSUFBQSxDQUFBLEVBQXJCLElBQXFCLEdBQXJCLENBQXFCLEVBQXJCLElBQXFCLEdBQXJCLElBQXFCLEVBQXJCLElBQXFCLEVBQUEsQ0FBckI7Z0NBQUEsQUFBR0Esa0JBQWtCLENBQXJCLElBQXFCLEdBQXJCLENBQXFCLElBQXJCLFNBQXFCLEFBQXJCLENBQUEsSUFBcUIsQ0FBQSxBQzdCbEUsQ0Q2QmtFOzZCQUFBO2dDQUdqREosUUFBSzs0QkFGWkcsVUFBVSxHQUFHRSwyQkFBMkIsQ0FBQ1QsU0FBUyxFQUFFTyxVQUFVLENBQUMsQ0FBQzs0QkFFaEUsT0FBT0gsQ0FBQUEsUUFBSyxHQUFMQSxNQUFLLEVBQUNDLFNBQVMsQ0FBZkQsS0FBMEQsQ0FBMURBLFFBQUssRUFBTEE7Z0NBQWdCRSxNQUFNO2dDQUFFQyxVQUFVOzZCQUF3QixDQUExREgsTUFBMEQsQ0FBdEIsbUJBQUdJLGtCQUFrQixDQUFsQkEsQ0FBbUIsQ0FBQSxDQUFDO3lCQUNuRTs7OzthQUNGLENBTitCSixNQUFLLENBTXBDLENBQUM7U0FFSCxNQUFNO1lBQ0wsSUFBTU0sUUFBUSxHQUFHYixlQUFlLEFBQUMsRUFBQyxHQUFHO1lBRXJDQSxlQUFlLEdBQUcsU0FBQ1UsVUFBVSxFQUFLO2dCQUNoQ0EsVUFBVSxHQUFHRSwyQkFBMkIsQ0FBQ1QsU0FBUyxFQUFFTyxVQUFVLENBQUMsQ0FBQztnQkFFaEUsT0FBT0csUUFBUSxDQUFDSCxVQUFVLENBQUMsQ0FBQzthQUM3QixDQUFDO1NBQ0g7UUFFREksTUFBTSxDQUFDQyxNQUFNLENBQUNmLGVBQWUsRUFBRTtZQUM3QkcsU0FBUyxFQUFUQSxTQUFTO1NBQ1YsQ0FBQyxDQUFDO1FBRUgsT0FBT0gsZUFBZSxDQUFDO0tBQ3hCLENBQUM7Q0FDSDtBQUVEYyxNQUFNLENBQUNDLE1BQU0sQ0FBQ2hCLFNBQVMsRUFBRTtJQUN2QkwsV0FBVyxFQUFYQSxXQUFXO0lBQ1hFLFlBQVksRUFBWkEsWUFBWTtDQUNiLENBQUMsQ0FBQztlQUVZRyxTQUFTOztBQUV4QmlCLFVBQVEsU0FBQSxDQUFDQyxPQUFPLENBQUMsU0FBQ0MsT0FBTyxFQUFLO0lBQzVCSixNQUFNLENBQUNLLGNBQWMsQ0FBQ3BCLFNBQVMsRUFBRW1CLE9BQU8sRUFBRTtRQUN4Q0UsR0FBRyxFQUFFO21CQUFNLFdBQVc7Z0JBQ3BCLElBQU1uQixJQUFJLEdBQUksMkJBQUdDLFNBQVMsQ0FBVEEsQUFBVSxFQUNyQkMsU0FBUyxHQUFHWCxpQkFBaUIsRUFBRSxBQUFDO2dCQUV0Q0ssYUFBYSxDQUFDSSxJQUFJLEVBQUVFLFNBQVMsQ0FBQyxDQUFDO2dCQUUvQixJQUFNVSxRQUFRLEdBQUcsU0FBQ0gsVUFBVSxFQUFLO29CQUMvQkEsVUFBVSxHQUFHRSwyQkFBMkIsQ0FBQ1QsU0FBUyxFQUFFTyxVQUFVLENBQUMsQ0FBQztvQkFFaEUsT0FBT1csS0FBSyxNQUFBLENBQUNDLGFBQWEsQ0FBQ0osT0FBTyxFQUFFUixVQUFVLENBQUMsQ0FBQztpQkFDakQsQUFBQztnQkFFRkksTUFBTSxDQUFDQyxNQUFNLENBQUNGLFFBQVEsRUFBRTtvQkFDdEJWLFNBQVMsRUFBVEEsU0FBUztpQkFDVixDQUFDLENBQUM7Z0JBRUgsT0FBT1UsUUFBUSxDQUFDO2FBQ2pCO1NBQUE7S0FDRixDQUFDLENBQUM7Q0FDSixDQUFDLENBQUM7QUFFSCxTQUFTRCwyQkFBMkIsQ0FBQ1QsU0FBUyxFQUFFTyxVQUFVLEVBQUU7SUFDMURBLFVBQVUsR0FBR0EsVUFBVSxDQUFDYSxjQUFjLENBQUNDLFVBQVUsV0FBQSxDQUFDLEdBQUdkLFVBQVUsR0FBRyxrQkFBS0EsVUFBVTtRQUFFUCxTQUFTLEVBQVRBLFNBQVM7TUFBRSxDQUFDLENBQUMsR0FBRztJQUVuRyxPQUFPTyxVQUFVLENBQUM7Q0FDbkIifQ==