"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
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
        var ClassOrFunctionClass = (0, _class.isClass)(ClassOrFunction);
        if (ClassOrFunctionClass) {
            var Class = ClassOrFunction; ///
            ClassOrFunction = /*#__PURE__*/ function(Class1) {
                _inherits(ClassOrFunction, Class1);
                var _super = _createSuper(ClassOrFunction);
                function ClassOrFunction() {
                    _classCallCheck(this, ClassOrFunction);
                    return _super.apply(this, arguments);
                }
                _createClass(ClassOrFunction, null, [
                    {
                        key: "fromClass",
                        value: function fromClass(_Class, properties) {
                            for(var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                                remainingArguments[_key - 2] = arguments[_key];
                            }
                            var _$_Class;
                            properties = appendClassNameToProperties(className, properties);
                            return (_$_Class = Class).fromClass.apply(_$_Class, [
                                _Class,
                                properties
                            ].concat(_toConsumableArray(remainingArguments)));
                        }
                    }
                ]);
                return ClassOrFunction;
            }(Class);
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
    properties = properties.hasOwnProperty(_constants.CLASS_NAME) ? properties : _objectSpreadProps(_objectSpread({}, properties), {
        className: className
    }); ///
    return properties;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoU3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IHRhZ05hbWVzLCBzdHlsZXNVdGlsaXRpZXMsIGNsYXNzTmFtZVV0aWxpdGllcyB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IGlzQ2xhc3MgfSBmcm9tIFwiLi91dGlsaXRpZXMvY2xhc3NcIjtcbmltcG9ydCB7IENMQVNTX05BTUUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBnZW5lcmF0ZUNsYXNzTmFtZSB9ID0gY2xhc3NOYW1lVXRpbGl0aWVzLFxuICAgICAgeyByZW5kZXJTdHlsZSwgcmVuZGVyU3R5bGVzLCBnZW5lcmF0ZVN0eWxlLCByZXRyaWV2ZVN0eWxlIH0gPSBzdHlsZXNVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHdpdGhTdHlsZShDbGFzc09yRnVuY3Rpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFyZ3MgPSBbIC4uLmFyZ3VtZW50cyBdOyAgLy8vXG5cbiAgICBsZXQgeyBjbGFzc05hbWUgPSBudWxsIH0gPSBDbGFzc09yRnVuY3Rpb247XG5cbiAgICBjb25zdCBzdXBlclN0eWxlID0gcmV0cmlldmVTdHlsZShjbGFzc05hbWUpO1xuXG4gICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lLCBzdXBlclN0eWxlKTtcblxuICAgIGNvbnN0IENsYXNzT3JGdW5jdGlvbkNsYXNzID0gaXNDbGFzcyhDbGFzc09yRnVuY3Rpb24pO1xuXG4gICAgaWYgKENsYXNzT3JGdW5jdGlvbkNsYXNzKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IENsYXNzT3JGdW5jdGlvbjsgIC8vL1xuXG4gICAgICBDbGFzc09yRnVuY3Rpb24gPSBjbGFzcyBleHRlbmRzIENsYXNzIHtcbiAgICAgICAgc3RhdGljIGZyb21DbGFzcyhfQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgICAgICAgIHByb3BlcnRpZXMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMoY2xhc3NOYW1lLCBwcm9wZXJ0aWVzKTtcblxuICAgICAgICAgIHJldHVybiBDbGFzcy5mcm9tQ2xhc3MoX0NsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gQ2xhc3NPckZ1bmN0aW9uOyAvLy9cblxuICAgICAgQ2xhc3NPckZ1bmN0aW9uID0gKHByb3BlcnRpZXMpID0+IHtcbiAgICAgICAgcHJvcGVydGllcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyhjbGFzc05hbWUsIHByb3BlcnRpZXMpO1xuXG4gICAgICAgIHJldHVybiBGdW5jdGlvbihwcm9wZXJ0aWVzKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihDbGFzc09yRnVuY3Rpb24sIHtcbiAgICAgIGNsYXNzTmFtZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIENsYXNzT3JGdW5jdGlvbjtcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbih3aXRoU3R5bGUsIHtcbiAgcmVuZGVyU3R5bGUsXG4gIHJlbmRlclN0eWxlc1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZTtcblxudGFnTmFtZXMuZm9yRWFjaCgodGFnTmFtZSkgPT4ge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2l0aFN0eWxlLCB0YWdOYW1lLCB7XG4gICAgZ2V0OiAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXSwgIC8vL1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUpO1xuXG4gICAgICBjb25zdCBGdW5jdGlvbiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gICAgICAgIHByb3BlcnRpZXMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMoY2xhc3NOYW1lLCBwcm9wZXJ0aWVzKTtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBwcm9wZXJ0aWVzKTtcbiAgICAgIH07XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oRnVuY3Rpb24sIHtcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIEZ1bmN0aW9uO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wZXJ0aWVzKGNsYXNzTmFtZSwgcHJvcGVydGllcykge1xuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShDTEFTU19OQU1FKSA/IHByb3BlcnRpZXMgOiB7IC4uLnByb3BlcnRpZXMsIGNsYXNzTmFtZSB9OyAvLy9cblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cbiJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNsYXNzTmFtZSIsImNsYXNzTmFtZVV0aWxpdGllcyIsInJlbmRlclN0eWxlIiwic3R5bGVzVXRpbGl0aWVzIiwicmVuZGVyU3R5bGVzIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJ3aXRoU3R5bGUiLCJDbGFzc09yRnVuY3Rpb24iLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xhc3NOYW1lIiwic3VwZXJTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbkNsYXNzIiwiaXNDbGFzcyIsIkNsYXNzIiwiZnJvbUNsYXNzIiwiX0NsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyIsIkZ1bmN0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZXMiLCJmb3JFYWNoIiwidGFnTmFtZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiaGFzT3duUHJvcGVydHkiLCJDTEFTU19OQU1FIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBMkRiLFNBQXlCOzs7ZUFBekIsUUFBeUI7OztvQkF6REgsTUFBTTt5QkFDa0MsWUFBWTtxQkFFbEQsbUJBQW1CO3lCQUNoQixhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQU0sQUFBRUEsaUJBQWlCLEdBQUtDLFVBQWtCLG1CQUFBLENBQXhDRCxpQkFBaUIsQUFBdUIsRUFDeENFLFdBQVcsR0FBaURDLFVBQWUsZ0JBQUEsQ0FBM0VELFdBQVcsRUFBRUUsWUFBWSxHQUFtQ0QsVUFBZSxnQkFBQSxDQUE5REMsWUFBWSxFQUFFQyxhQUFhLEdBQW9CRixVQUFlLGdCQUFBLENBQWhERSxhQUFhLEVBQUVDLGFBQWEsR0FBS0gsVUFBZSxnQkFBQSxDQUFqQ0csYUFBYSxBQUFxQjtBQUVwRixTQUFTQyxTQUFTLENBQUNDLGVBQWUsRUFBRTtJQUNsQyxPQUFPLFdBQVc7UUFDaEIsSUFBTUMsSUFBSSxHQUFLLDJCQUFHQyxTQUFTLENBQVRBLEFBQVcsQUFBQyxFQUFFLEdBQUc7UUFFbkMsaUJBQTJCRixlQUFlLENBQXBDRyxTQUFTLEVBQVRBLFNBQVMsMkJBQUcsSUFBSSxhQUFBLEFBQXFCO1FBRTNDLElBQU1DLFVBQVUsR0FBR04sYUFBYSxDQUFDSyxTQUFTLENBQUMsQUFBQztRQUU1Q0EsU0FBUyxHQUFHWCxpQkFBaUIsRUFBRSxDQUFDO1FBRWhDSyxhQUFhLENBQUNJLElBQUksRUFBRUUsU0FB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