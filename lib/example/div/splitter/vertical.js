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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
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
    "@swc/helpers - typeof";
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  width: 1rem;\n  flex-shrink: 0;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var VerticalSplitterDiv = /*#__PURE__*/ function(Element) {
    _inherits(VerticalSplitterDiv, Element);
    var _super = _createSuper(VerticalSplitterDiv);
    function VerticalSplitterDiv() {
        _classCallCheck(this, VerticalSplitterDiv);
        return _super.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyB3aW5kb3csIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgY3Vyc29yIGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlckRpdiBleHRlbmRzIEVsZW1lbnQge1xuICBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgfVxuXG4gICAgY3Vyc29yLnJlc2V0KCk7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgY29uc3QgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsICAvLy9cbiAgICAgICAgICAgIHJlbGF0aXZlTW91c2VMZWZ0ID0gbW91c2VMZWZ0IC0gdGhpcy5wcmV2aW91c01vdXNlTGVmdCxcbiAgICAgICAgICAgIHNpemVhYmxlRGl2V2lkdGggPSB0aGlzLnByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCArIHJlbGF0aXZlTW91c2VMZWZ0LFxuICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgICB3aWR0aCA9IHNpemVhYmxlRGl2V2lkdGg7IC8vL1xuXG4gICAgICBzaXplYWJsZURpdi5zZXRXaWR0aCh3aWR0aCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICBjb25zdCBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgIC8vL1xuICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBzaXplYWJsZURpdldpZHRoID0gc2l6ZWFibGVEaXYuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIHByZXZpb3VzTW91c2VMZWZ0ID0gbW91c2VMZWZ0LCAgLy8vXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBzaXplYWJsZURpdldpZHRoOyAgIC8vL1xuXG4gICAgICB0aGlzLnByZXZpb3VzTW91c2VMZWZ0ID0gcHJldmlvdXNNb3VzZUxlZnQ7XG5cbiAgICAgIHRoaXMucHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gcHJldmlvdXNTaXplYWJsZURpdldpZHRoO1xuXG4gICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcoKTtcbiAgICB9XG5cbiAgICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG4gIH1cblxuICBtb3VzZU92ZXJIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuICB9XG5cbiAgbW91c2VPdXRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY3Vyc29yLnJlc2V0KCk7XG4gIH1cblxuICBzdGFydERyYWdnaW5nKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZHJhZ2dpbmdcIik7XG4gIH1cblxuICBpc0RyYWdnaW5nKCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5oYXNDbGFzcyhcImRyYWdnaW5nXCIpO1xuXG4gICAgcmV0dXJuIGRyYWdnaW5nO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXJIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgd2luZG93Lm9uTW91c2VVcCh0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTtcblxuICAgIHdpbmRvdy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZNb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9mZk1vdXNlT3Zlcih0aGlzLm1vdXNlT3ZlckhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub2ZmTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgd2luZG93Lm9mZk1vdXNlVXAodGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7XG5cbiAgICB3aW5kb3cub2ZmTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2ZXJ0aWNhbC1zcGxpdHRlclwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWZXJ0aWNhbFNwbGl0dGVyRGl2KWBcblxuICB3aWR0aDogMXJlbTtcbiAgZmxleC1zaHJpbms6IDA7XG5cbmA7XG4iXSwibmFtZXMiOlsiVmVydGljYWxTcGxpdHRlckRpdiIsIm1vdXNlVXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZHJhZ2dpbmciLCJpc0RyYWdnaW5nIiwic3RvcERyYWdnaW5nIiwiY3Vyc29yIiwicmVzZXQiLCJtb3VzZU1vdmVIYW5kbGVyIiwibW91c2VMZWZ0IiwicGFnZVgiLCJyZWxhdGl2ZU1vdXNlTGVmdCIsInByZXZpb3VzTW91c2VMZWZ0Iiwic2l6ZWFibGVEaXZXaWR0aCIsInByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50Iiwic2l6ZWFibGVEaXYiLCJ3aWR0aCIsInNldFdpZHRoIiwibW91c2VEb3duSGFuZGxlciIsImdldFdpZHRoIiwic3RhcnREcmFnZ2luZyIsImNvbHVtblJlc2l6ZSIsIm1vdXNlT3ZlckhhbmRsZXIiLCJtb3VzZU91dEhhbmRsZXIiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJkaWRNb3VudCIsIm9uTW91c2VEb3duIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwid2luZG93Iiwib25Nb3VzZVVwIiwib25Nb3VzZU1vdmUiLCJ3aWxsVW5tb3VudCIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlT3ZlciIsIm9mZk1vdXNlT3V0Iiwib2ZmTW91c2VVcCIsIm9mZk1vdXNlTW92ZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLENBQVksV0FBQSxDQUFDOzs7RUFBYjt3QkFBQTtBQUVzQixHQUFnQixDQUFoQixNQUFnQjtBQUVOLEdBQU0sQ0FBTixLQUFNO0FBRW5CLEdBQWMsQ0FBZCxPQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztnRkFOakM7Ozs7Ozs7O3NDQUFBOzs7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