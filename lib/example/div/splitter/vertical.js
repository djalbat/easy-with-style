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
var _index = /*#__PURE__*/ _interop_require_default(require("../../../index"));
var _easy = require("easy");
var _cursor = /*#__PURE__*/ _interop_require_default(require("../../cursor"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  width: 1rem;\n  flex-shrink: 0;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var VerticalSplitterDiv = /*#__PURE__*/ function(Element) {
    _inherits(VerticalSplitterDiv, Element);
    function VerticalSplitterDiv() {
        _class_call_check(this, VerticalSplitterDiv);
        return _call_super(this, VerticalSplitterDiv, arguments);
    }
    _create_class(VerticalSplitterDiv, [
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
}(_wrap_native_super(_easy.Element));
_define_property(VerticalSplitterDiv, "tagName", "div");
_define_property(VerticalSplitterDiv, "defaultProperties", {
    className: "vertical-splitter"
});
var _default = (0, _index.default)(VerticalSplitterDiv)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyB3aW5kb3csIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgY3Vyc29yIGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlckRpdiBleHRlbmRzIEVsZW1lbnQge1xuICBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgfVxuXG4gICAgY3Vyc29yLnJlc2V0KCk7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgY29uc3QgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsICAvLy9cbiAgICAgICAgICAgIHJlbGF0aXZlTW91c2VMZWZ0ID0gbW91c2VMZWZ0IC0gdGhpcy5wcmV2aW91c01vdXNlTGVmdCxcbiAgICAgICAgICAgIHNpemVhYmxlRGl2V2lkdGggPSB0aGlzLnByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCArIHJlbGF0aXZlTW91c2VMZWZ0LFxuICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgICB3aWR0aCA9IHNpemVhYmxlRGl2V2lkdGg7IC8vL1xuXG4gICAgICBzaXplYWJsZURpdi5zZXRXaWR0aCh3aWR0aCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICBjb25zdCBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgIC8vL1xuICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBzaXplYWJsZURpdldpZHRoID0gc2l6ZWFibGVEaXYuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIHByZXZpb3VzTW91c2VMZWZ0ID0gbW91c2VMZWZ0LCAgLy8vXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBzaXplYWJsZURpdldpZHRoOyAgIC8vL1xuXG4gICAgICB0aGlzLnByZXZpb3VzTW91c2VMZWZ0ID0gcHJldmlvdXNNb3VzZUxlZnQ7XG5cbiAgICAgIHRoaXMucHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gcHJldmlvdXNTaXplYWJsZURpdldpZHRoO1xuXG4gICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcoKTtcbiAgICB9XG5cbiAgICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG4gIH1cblxuICBtb3VzZU92ZXJIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuICB9XG5cbiAgbW91c2VPdXRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY3Vyc29yLnJlc2V0KCk7XG4gIH1cblxuICBzdGFydERyYWdnaW5nKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZHJhZ2dpbmdcIik7XG4gIH1cblxuICBpc0RyYWdnaW5nKCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5oYXNDbGFzcyhcImRyYWdnaW5nXCIpO1xuXG4gICAgcmV0dXJuIGRyYWdnaW5nO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXJIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgd2luZG93Lm9uTW91c2VVcCh0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTtcblxuICAgIHdpbmRvdy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZNb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9mZk1vdXNlT3Zlcih0aGlzLm1vdXNlT3ZlckhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub2ZmTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgd2luZG93Lm9mZk1vdXNlVXAodGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7XG5cbiAgICB3aW5kb3cub2ZmTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2ZXJ0aWNhbC1zcGxpdHRlclwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWZXJ0aWNhbFNwbGl0dGVyRGl2KWBcblxuICB3aWR0aDogMXJlbTtcbiAgZmxleC1zaHJpbms6IDA7XG5cbmA7XG4iXSwibmFtZXMiOlsiVmVydGljYWxTcGxpdHRlckRpdiIsIm1vdXNlVXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiZHJhZ2dpbmciLCJpc0RyYWdnaW5nIiwic3RvcERyYWdnaW5nIiwiY3Vyc29yIiwicmVzZXQiLCJtb3VzZU1vdmVIYW5kbGVyIiwibW91c2VMZWZ0IiwicGFnZVgiLCJyZWxhdGl2ZU1vdXNlTGVmdCIsInByZXZpb3VzTW91c2VMZWZ0Iiwic2l6ZWFibGVEaXZXaWR0aCIsInByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50Iiwic2l6ZWFibGVEaXYiLCJ3aWR0aCIsInNldFdpZHRoIiwibW91c2VEb3duSGFuZGxlciIsImdldFdpZHRoIiwic3RhcnREcmFnZ2luZyIsImNvbHVtblJlc2l6ZSIsIm1vdXNlT3ZlckhhbmRsZXIiLCJtb3VzZU91dEhhbmRsZXIiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJkaWRNb3VudCIsIm9uTW91c2VEb3duIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwid2luZG93Iiwib25Nb3VzZVVwIiwib25Nb3VzZU1vdmUiLCJ3aWxsVW5tb3VudCIsIm9mZk1vdXNlRG93biIsIm9mZk1vdXNlT3ZlciIsIm9mZk1vdXNlT3V0Iiwib2ZmTW91c2VVcCIsIm9mZk1vdXNlTW92ZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdHQTs7O2VBQUE7Ozs0REF0R3NCO29CQUVVOzZEQUViOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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