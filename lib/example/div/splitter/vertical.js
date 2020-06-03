"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../../../index"));

var _easy = require("easy");

var _cursor = _interopRequireDefault(require("../../cursor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 1rem;\n  flex-shrink: 0;\n  \n  background-color: lightgrey;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VerticalSplitterDiv = /*#__PURE__*/function (_Element) {
  _inherits(VerticalSplitterDiv, _Element);

  var _super = _createSuper(VerticalSplitterDiv);

  function VerticalSplitterDiv() {
    _classCallCheck(this, VerticalSplitterDiv);

    return _super.apply(this, arguments);
  }

  _createClass(VerticalSplitterDiv, [{
    key: "mouseUpHandler",
    value: function mouseUpHandler() {
      var dragging = this.isDragging();

      if (dragging) {
        this.stopDragging();
      }

      _cursor["default"].reset();
    }
  }, {
    key: "mouseMoveHandler",
    value: function mouseMoveHandler(event) {
      var dragging = this.isDragging();

      if (dragging) {
        var mouseLeft = event.pageX,
            ///
        relativeMouseLeft = mouseLeft - this.previousMouseLeft,
            sizeableDivWidth = this.previousSizeableDivWidth + relativeMouseLeft,
            previousSiblingElement = this.getPreviousSiblingElement(),
            sizeableDiv = previousSiblingElement,
            ///
        width = sizeableDivWidth; ///

        sizeableDiv.setWidth(width);
      }
    }
  }, {
    key: "mouseDownHandler",
    value: function mouseDownHandler(event) {
      var dragging = this.isDragging();

      if (!dragging) {
        var mouseLeft = event.pageX,
            ///
        previousSiblingElement = this.getPreviousSiblingElement(),
            sizeableDiv = previousSiblingElement,
            ///
        sizeableDivWidth = sizeableDiv.getWidth(),
            previousMouseLeft = mouseLeft,
            ///
        previousSizeableDivWidth = sizeableDivWidth; ///

        this.previousMouseLeft = previousMouseLeft;
        this.previousSizeableDivWidth = previousSizeableDivWidth;
        this.startDragging();
      }

      _cursor["default"].columnResize();
    }
  }, {
    key: "mouseOverHandler",
    value: function mouseOverHandler() {
      _cursor["default"].columnResize();
    }
  }, {
    key: "mouseOutHandler",
    value: function mouseOutHandler() {
      _cursor["default"].reset();
    }
  }, {
    key: "startDragging",
    value: function startDragging() {
      this.addClass("dragging");
    }
  }, {
    key: "stopDragging",
    value: function stopDragging() {
      this.removeClass("dragging");
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      var dragging = this.hasClass("dragging");
      return dragging;
    }
  }, {
    key: "initialise",
    value: function initialise() {
      var mouseUpHandler = this.mouseUpHandler.bind(this),
          mouseMoveHandler = this.mouseMoveHandler.bind(this),
          mouseDownHandler = this.mouseDownHandler.bind(this),
          mouseOverHandler = this.mouseOverHandler.bind(this),
          mouseOutHandler = this.mouseOutHandler.bind(this);
      this.onMouseDown(mouseDownHandler);
      this.onMouseOver(mouseOverHandler);
      this.onMouseOut(mouseOutHandler);

      _easy.window.onMouseUp(mouseUpHandler);

      _easy.window.onMouseMove(mouseMoveHandler);
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var verticalSplitter = _easy.Element.fromClass(Class, properties);

      verticalSplitter.initialise();
      return verticalSplitter;
    }
  }]);

  return VerticalSplitterDiv;
}(_easy.Element);

_defineProperty(VerticalSplitterDiv, "tagName", "div");

_defineProperty(VerticalSplitterDiv, "defaultProperties", {
  className: "vertical-splitter"
});

var _default = (0, _index["default"])(VerticalSplitterDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJkcmFnZ2luZyIsImlzRHJhZ2dpbmciLCJzdG9wRHJhZ2dpbmciLCJjdXJzb3IiLCJyZXNldCIsImV2ZW50IiwibW91c2VMZWZ0IiwicGFnZVgiLCJyZWxhdGl2ZU1vdXNlTGVmdCIsInByZXZpb3VzTW91c2VMZWZ0Iiwic2l6ZWFibGVEaXZXaWR0aCIsInByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50Iiwic2l6ZWFibGVEaXYiLCJ3aWR0aCIsInNldFdpZHRoIiwiZ2V0V2lkdGgiLCJzdGFydERyYWdnaW5nIiwiY29sdW1uUmVzaXplIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIiwibW91c2VVcEhhbmRsZXIiLCJiaW5kIiwibW91c2VNb3ZlSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwibW91c2VPdXRIYW5kbGVyIiwib25Nb3VzZURvd24iLCJvbk1vdXNlT3ZlciIsIm9uTW91c2VPdXQiLCJ3aW5kb3ciLCJvbk1vdXNlVXAiLCJvbk1vdXNlTW92ZSIsIkNsYXNzIiwicHJvcGVydGllcyIsInZlcnRpY2FsU3BsaXR0ZXIiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxtQjs7Ozs7Ozs7Ozs7OztxQ0FDYTtBQUNmLFVBQU1DLFFBQVEsR0FBRyxLQUFLQyxVQUFMLEVBQWpCOztBQUVBLFVBQUlELFFBQUosRUFBYztBQUNaLGFBQUtFLFlBQUw7QUFDRDs7QUFFREMseUJBQU9DLEtBQVA7QUFDRDs7O3FDQUVnQkMsSyxFQUFPO0FBQ3RC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QUFVMUMsbUJBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuLi8uLi8uLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IHdpbmRvdywgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBjdXJzb3IgZnJvbSBcIi4uLy4uL2N1cnNvclwiO1xuXG5jbGFzcyBWZXJ0aWNhbFNwbGl0dGVyRGl2IGV4dGVuZHMgRWxlbWVudCB7XG4gIG1vdXNlVXBIYW5kbGVyKCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgfVxuXG4gICAgY3Vyc29yLnJlc2V0KCk7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgY29uc3QgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsICAvLy9cbiAgICAgICAgICAgIHJlbGF0aXZlTW91c2VMZWZ0ID0gbW91c2VMZWZ0IC0gdGhpcy5wcmV2aW91c01vdXNlTGVmdCxcbiAgICAgICAgICAgIHNpemVhYmxlRGl2V2lkdGggPSB0aGlzLnByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCArIHJlbGF0aXZlTW91c2VMZWZ0LFxuICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgICB3aWR0aCA9IHNpemVhYmxlRGl2V2lkdGg7IC8vL1xuXG4gICAgICBzaXplYWJsZURpdi5zZXRXaWR0aCh3aWR0aCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICBjb25zdCBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgIC8vL1xuICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBzaXplYWJsZURpdldpZHRoID0gc2l6ZWFibGVEaXYuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIHByZXZpb3VzTW91c2VMZWZ0ID0gbW91c2VMZWZ0LCAgLy8vXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBzaXplYWJsZURpdldpZHRoOyAgIC8vL1xuXG4gICAgICB0aGlzLnByZXZpb3VzTW91c2VMZWZ0ID0gcHJldmlvdXNNb3VzZUxlZnQ7XG5cbiAgICAgIHRoaXMucHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gcHJldmlvdXNTaXplYWJsZURpdldpZHRoO1xuXG4gICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcoKTtcbiAgICB9XG5cbiAgICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG4gIH1cblxuICBtb3VzZU92ZXJIYW5kbGVyKCkge1xuICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbiAgfVxuXG4gIG1vdXNlT3V0SGFuZGxlcigpIHtcbiAgICBjdXJzb3IucmVzZXQoKTtcbiAgfVxuXG4gIHN0YXJ0RHJhZ2dpbmcoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImRyYWdnaW5nXCIpO1xuICB9XG5cbiAgc3RvcERyYWdnaW5nKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmhhc0NsYXNzKFwiZHJhZ2dpbmdcIik7XG5cbiAgICByZXR1cm4gZHJhZ2dpbmc7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IG1vdXNlVXBIYW5kbGVyID0gdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZURvd25IYW5kbGVyID0gdGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VPdmVySGFuZGxlciA9IHRoaXMubW91c2VPdmVySGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlT3V0SGFuZGxlciA9IHRoaXMubW91c2VPdXRIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uTW91c2VEb3duKG1vdXNlRG93bkhhbmRsZXIpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIobW91c2VPdmVySGFuZGxlcik7XG4gICAgdGhpcy5vbk1vdXNlT3V0KG1vdXNlT3V0SGFuZGxlcik7XG5cbiAgICB3aW5kb3cub25Nb3VzZVVwKG1vdXNlVXBIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbk1vdXNlTW92ZShtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZlcnRpY2FsLXNwbGl0dGVyXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmVydGljYWxTcGxpdHRlciA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIHZlcnRpY2FsU3BsaXR0ZXIuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHZlcnRpY2FsU3BsaXR0ZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZlcnRpY2FsU3BsaXR0ZXJEaXYpYFxuXG4gIHdpZHRoOiAxcmVtO1xuICBmbGV4LXNocmluazogMDtcbiAgXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcblxuYDtcbiJdfQ==