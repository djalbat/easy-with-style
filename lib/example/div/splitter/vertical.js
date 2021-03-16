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
        "\n\n  width: 1rem;\n  flex-shrink: 0;\n  \n  background-color: lightgrey;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var VerticalSplitterDiv = function(Element1) {
    _inherits(VerticalSplitterDiv, _easy.Element);
    function VerticalSplitterDiv() {
        _classCallCheck(this, VerticalSplitterDiv);
        return _possibleConstructorReturn(this, _getPrototypeOf(VerticalSplitterDiv).apply(this, arguments));
    }
    _createClass(VerticalSplitterDiv, [
        {
            key: "mouseUpHandler",
            value: function mouseUpHandler() {
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
            value: function mouseOverHandler() {
                _cursor.default.columnResize();
            }
        },
        {
            key: "mouseOutHandler",
            value: function mouseOutHandler() {
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
            key: "initialise",
            value: function initialise() {
                var mouseUpHandler = this.mouseUpHandler.bind(this), mouseMoveHandler = this.mouseMoveHandler.bind(this), mouseDownHandler = this.mouseDownHandler.bind(this), mouseOverHandler = this.mouseOverHandler.bind(this), mouseOutHandler = this.mouseOutHandler.bind(this);
                this.onMouseDown(mouseDownHandler);
                this.onMouseOver(mouseOverHandler);
                this.onMouseOut(mouseOutHandler);
                _easy.window.onMouseUp(mouseUpHandler);
                _easy.window.onMouseMove(mouseMoveHandler);
            }
        }
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var verticalSplitter = _easy.Element.fromClass(Class, properties);
                verticalSplitter.initialise();
                return verticalSplitter;
            }
        }
    ]);
    return VerticalSplitterDiv;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(VerticalSplitterDiv, "tagName", "div");
_defineProperty(VerticalSplitterDiv, "defaultProperties", {
    className: "vertical-splitter"
});
var _default = _index.default(VerticalSplitterDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyB3aW5kb3csIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgY3Vyc29yIGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlckRpdiBleHRlbmRzIEVsZW1lbnQge1xuICBtb3VzZVVwSGFuZGxlcigpIHtcbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICB0aGlzLnN0b3BEcmFnZ2luZygpO1xuICAgIH1cblxuICAgIGN1cnNvci5yZXNldCgpO1xuICB9XG5cbiAgbW91c2VNb3ZlSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgIGNvbnN0IG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAgLy8vXG4gICAgICAgICAgICByZWxhdGl2ZU1vdXNlTGVmdCA9IG1vdXNlTGVmdCAtIHRoaXMucHJldmlvdXNNb3VzZUxlZnQsXG4gICAgICAgICAgICBzaXplYWJsZURpdldpZHRoID0gdGhpcy5wcmV2aW91c1NpemVhYmxlRGl2V2lkdGggKyByZWxhdGl2ZU1vdXNlTGVmdCxcbiAgICAgICAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSB0aGlzLmdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRGl2ID0gcHJldmlvdXNTaWJsaW5nRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgd2lkdGggPSBzaXplYWJsZURpdldpZHRoOyAvLy9cblxuICAgICAgc2l6ZWFibGVEaXYuc2V0V2lkdGgod2lkdGgpO1xuICAgIH1cbiAgfVxuXG4gIG1vdXNlRG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgaWYgKCFkcmFnZ2luZykge1xuICAgICAgY29uc3QgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsICAvLy9cbiAgICAgICAgICAgIHByZXZpb3VzU2libGluZ0VsZW1lbnQgPSB0aGlzLmdldFByZXZpb3VzU2libGluZ0VsZW1lbnQoKSxcbiAgICAgICAgICAgIHNpemVhYmxlRGl2ID0gcHJldmlvdXNTaWJsaW5nRWxlbWVudCwgIC8vL1xuICAgICAgICAgICAgc2l6ZWFibGVEaXZXaWR0aCA9IHNpemVhYmxlRGl2LmdldFdpZHRoKCksXG4gICAgICAgICAgICBwcmV2aW91c01vdXNlTGVmdCA9IG1vdXNlTGVmdCwgIC8vL1xuICAgICAgICAgICAgcHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gc2l6ZWFibGVEaXZXaWR0aDsgICAvLy9cblxuICAgICAgdGhpcy5wcmV2aW91c01vdXNlTGVmdCA9IHByZXZpb3VzTW91c2VMZWZ0O1xuXG4gICAgICB0aGlzLnByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCA9IHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aDtcblxuICAgICAgdGhpcy5zdGFydERyYWdnaW5nKCk7XG4gICAgfVxuXG4gICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuICB9XG5cbiAgbW91c2VPdmVySGFuZGxlcigpIHtcbiAgICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG4gIH1cblxuICBtb3VzZU91dEhhbmRsZXIoKSB7XG4gICAgY3Vyc29yLnJlc2V0KCk7XG4gIH1cblxuICBzdGFydERyYWdnaW5nKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZHJhZ2dpbmdcIik7XG4gIH1cblxuICBpc0RyYWdnaW5nKCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5oYXNDbGFzcyhcImRyYWdnaW5nXCIpO1xuXG4gICAgcmV0dXJuIGRyYWdnaW5nO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBtb3VzZVVwSGFuZGxlciA9IHRoaXMubW91c2VVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZU1vdmVIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VEb3duSGFuZGxlciA9IHRoaXMubW91c2VEb3duSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlT3ZlckhhbmRsZXIgPSB0aGlzLm1vdXNlT3ZlckhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZU91dEhhbmRsZXIgPSB0aGlzLm1vdXNlT3V0SGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vbk1vdXNlRG93bihtb3VzZURvd25IYW5kbGVyKTtcbiAgICB0aGlzLm9uTW91c2VPdmVyKG1vdXNlT3ZlckhhbmRsZXIpO1xuICAgIHRoaXMub25Nb3VzZU91dChtb3VzZU91dEhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9uTW91c2VVcChtb3VzZVVwSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub25Nb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2ZXJ0aWNhbC1zcGxpdHRlclwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHZlcnRpY2FsU3BsaXR0ZXIgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICB2ZXJ0aWNhbFNwbGl0dGVyLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbFNwbGl0dGVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWZXJ0aWNhbFNwbGl0dGVyRGl2KWBcblxuICB3aWR0aDogMXJlbTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG5cbmA7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7SUFFQSxNQUFBO0lBRUEsS0FBQTtJQUVBLE9BQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBc0dBLDZFQU9BOzs7Ozs7O0lBM0dBLG1CQUFBLFlBQUEsUUFBQTtjQUFBLG1CQUFBLEVBSkEsS0FBQTthQUlBLG1CQUFBOzhCQUFBLG1CQUFBO2dFQUFBLG1CQUFBOztpQkFBQSxtQkFBQTs7QUFDQSxlQUFBLEdBQUEsY0FBQTs0QkFBQSxjQUFBO29CQUNBLFFBQUEsUUFBQSxVQUFBO29CQUVBLFFBQUE7eUJBQ0EsWUFBQTs7QUFQQSx1QkFBQSxTQVVBLEtBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsZ0JBQUE7NEJBQUEsZ0JBQUEsQ0FBQSxLQUFBO29CQUNBLFFBQUEsUUFBQSxVQUFBO29CQUVBLFFBQUE7d0JBQ0EsU0FBQSxHQUFBLEtBQUEsQ0FBQSxLQUFBLEVBQ0EsaUJBQUEsR0FBQSxTQUFBLFFBQUEsaUJBQUEsRUFDQSxnQkFBQSxRQUFBLHdCQUFBLEdBQUEsaUJBQUEsRUFDQSxzQkFBQSxRQUFBLHlCQUFBLElBQ0EsV0FBQSxHQUFBLHNCQUFBLEVBQ0EsS0FBQSxHQUFBLGdCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFFQSwrQkFBQSxDQUFBLFFBQUEsQ0FBQSxLQUFBOzs7OztBQUlBLGVBQUEsR0FBQSxnQkFBQTs0QkFBQSxnQkFBQSxDQUFBLEtBQUE7b0JBQ0EsUUFBQSxRQUFBLFVBQUE7cUJBRUEsUUFBQTt3QkFDQSxTQUFBLEdBQUEsS0FBQSxDQUFBLEtBQUEsRUFDQSxzQkFBQSxRQUFBLHlCQUFBLElBQ0EsV0FBQSxHQUFBLHNCQUFBLEVBQ0EsZ0JBQUEsR0FBQSxXQUFBLENBQUEsUUFBQSxJQUNBLGlCQUFBLEdBQUEsU0FBQSxFQUNBLHdCQUFBLEdBQUEsZ0JBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTt5QkFFQSxpQkFBQSxHQUFBLGlCQUFBO3lCQUVBLHdCQUFBLEdBQUEsd0JBQUE7eUJBRUEsYUFBQTs7QUEzQ0EsdUJBQUEsU0E4Q0EsWUFBQTs7OztBQUdBLGVBQUEsR0FBQSxnQkFBQTs0QkFBQSxnQkFBQTtBQWpEQSx1QkFBQSxTQWtEQSxZQUFBOzs7O0FBR0EsZUFBQSxHQUFBLGVBQUE7NEJBQUEsZUFBQTtBQXJEQSx1QkFBQSxTQXNEQSxLQUFBOzs7O0FBR0EsZUFBQSxHQUFBLGFBQUE7NEJBQUEsYUFBQTtxQkFDQSxRQUFBLEVBQUEsUUFBQTs7OztBQUdBLGVBQUEsR0FBQSxZQUFBOzRCQUFBLFlBQUE7cUJBQ0EsV0FBQSxFQUFBLFFBQUE7Ozs7QUFHQSxlQUFBLEdBQUEsVUFBQTs0QkFBQSxVQUFBO29CQUNBLFFBQUEsUUFBQSxRQUFBLEVBQUEsUUFBQTt1QkFFQSxRQUFBOzs7O0FBR0EsZUFBQSxHQUFBLFVBQUE7NEJBQUEsVUFBQTtvQkFDQSxjQUFBLFFBQUEsY0FBQSxDQUFBLElBQUEsUUFDQSxnQkFBQSxRQUFBLGdCQUFBLENBQUEsSUFBQSxRQUNBLGdCQUFBLFFBQUEsZ0JBQUEsQ0FBQSxJQUFBLFFBQ0EsZ0JBQUEsUUFBQSxnQkFBQSxDQUFBLElBQUEsUUFDQSxlQUFBLFFBQUEsZUFBQSxDQUFBLElBQUE7cUJBRUEsV0FBQSxDQUFBLGdCQUFBO3FCQUNBLFdBQUEsQ0FBQSxnQkFBQTtxQkFDQSxVQUFBLENBQUEsZUFBQTtBQWxGQSxxQkFBQSxRQW9GQSxTQUFBLENBQUEsY0FBQTtBQXBGQSxxQkFBQSxRQXNGQSxXQUFBLENBQUEsZ0JBQUE7Ozs7O0FBU0EsZUFBQSxHQUFBLFNBQUE7NEJBQUEsU0FBQSxDQUFBLEtBQUEsRUFBQSxVQUFBO29CQUNBLGdCQUFBLEdBaEdBLEtBQUEsU0FnR0EsU0FBQSxDQUFBLEtBQUEsRUFBQSxVQUFBO0FBRUEsZ0NBQUEsQ0FBQSxVQUFBO3VCQUVBLGdCQUFBOzs7O1dBaEdBLG1CQUFBO21CQUpBLEtBQUE7Z0JBSUEsbUJBQUEsR0FxRkEsT0FBQSxJQUFBLEdBQUE7Z0JBckZBLG1CQUFBLEdBdUZBLGlCQUFBO0FBQ0EsYUFBQSxHQUFBLGlCQUFBOztlQTlGQSxNQUFBLFNBMEdBLG1CQUFBIn0=