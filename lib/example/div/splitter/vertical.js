"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../../index"));
var _easy = require("easy");
var _cursor = _interopRequireDefault(require("../../cursor"));
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  width: 1rem;\n  flex-shrink: 0;\n  background-color: lightgrey;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var VerticalSplitterDiv = /*#__PURE__*/ function(Element1) {
    _inherits(VerticalSplitterDiv, Element1);
    function VerticalSplitterDiv() {
        _classCallCheck(this, VerticalSplitterDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(VerticalSplitterDiv).apply(this, arguments));
    }
    _createClass(VerticalSplitterDiv, [
        {
            key: "mouseUpHandler",
            value: function mouseUpHandler(event, element) {
                var dragging = this.isDragging();
                if (dragging) {
                    this.stopDragging();
                }
                _cursor.default.reset();
            }
        },
        {
            key: "mouseMoveHandler",
            value: function mouseMoveHandler(event) {
                var dragging = this.isDragging();
                if (dragging) {
                    var mouseLeft = event.pageX, relativeMouseLeft = mouseLeft - this.previousMouseLeft, sizeableDivWidth = this.previousSizeableDivWidth + relativeMouseLeft, previousSiblingElement = this.getPreviousSiblingElement(), sizeableDiv = previousSiblingElement, width = sizeableDivWidth; ///
                    sizeableDiv.setWidth(width);
                }
            }
        },
        {
            key: "mouseDownHandler",
            value: function mouseDownHandler(event) {
                var dragging = this.isDragging();
                if (!dragging) {
                    var mouseLeft = event.pageX, previousSiblingElement = this.getPreviousSiblingElement(), sizeableDiv = previousSiblingElement, sizeableDivWidth = sizeableDiv.getWidth(), previousMouseLeft = mouseLeft, previousSizeableDivWidth = sizeableDivWidth; ///
                    this.previousMouseLeft = previousMouseLeft;
                    this.previousSizeableDivWidth = previousSizeableDivWidth;
                    this.startDragging();
                }
                _cursor.default.columnResize();
            }
        },
        {
            key: "mouseOverHandler",
            value: function mouseOverHandler(event, element) {
                _cursor.default.columnResize();
            }
        },
        {
            key: "mouseOutHandler",
            value: function mouseOutHandler(event, element) {
                _cursor.default.reset();
            }
        },
        {
            key: "startDragging",
            value: function startDragging() {
                this.addClass("dragging");
            }
        },
        {
            key: "stopDragging",
            value: function stopDragging() {
                this.removeClass("dragging");
            }
        },
        {
            key: "isDragging",
            value: function isDragging() {
                var dragging = this.hasClass("dragging");
                return dragging;
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.onMouseDown(this.mouseDownHandler, this);
                this.onMouseOver(this.mouseOverHandler, this);
                this.onMouseOut(this.mouseOutHandler, this);
                _easy.window.onMouseUp(this.mouseUpHandler, this);
                _easy.window.onMouseMove(this.mouseMoveHandler, this);
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
                this.offMouseDown(this.mouseDownHandler, this);
                this.offMouseOver(this.mouseOverHandler, this);
                this.offMouseOut(this.mouseOutHandler, this);
                _easy.window.offMouseUp(this.mouseUpHandler, this);
                _easy.window.offMouseMove(this.mouseMoveHandler, this);
            }
        }
    ]);
    return VerticalSplitterDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(VerticalSplitterDiv, "tagName", "div");
_defineProperty(VerticalSplitterDiv, "defaultProperties", {
    className: "vertical-splitter"
});
var _default = (0, _index).default(VerticalSplitterDiv)(_templateObject());
exports.default = _default;
