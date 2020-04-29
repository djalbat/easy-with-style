"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../index"));

var _easy = require("easy");

var _cursor = _interopRequireDefault(require("./cursor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n  width: 0.5rem;\n  flex-shrink: 0;\n  background-color: lightgrey;\n\n"]);

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

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VerticalSplitter = /*#__PURE__*/function (_Element) {
  _inherits(VerticalSplitter, _Element);

  var _super = _createSuper(VerticalSplitter);

  function VerticalSplitter() {
    _classCallCheck(this, VerticalSplitter);

    return _super.apply(this, arguments);
  }

  _createClass(VerticalSplitter, [{
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
    value: function initialise(properties) {
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

      verticalSplitter.initialise(properties);
      return verticalSplitter;
    }
  }]);

  return VerticalSplitter;
}(_easy.Element);

_defineProperty(VerticalSplitter, "tagName", "div");

_defineProperty(VerticalSplitter, "defaultProperties", {
  className: "vertical-splitter"
});

var _default = (0, _index["default"])(VerticalSplitter)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsU3BsaXR0ZXIuanMiXSwibmFtZXMiOlsiVmVydGljYWxTcGxpdHRlciIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsImN1cnNvciIsInJlc2V0IiwiZXZlbnQiLCJtb3VzZUxlZnQiLCJwYWdlWCIsInJlbGF0aXZlTW91c2VMZWZ0IiwicHJldmlvdXNNb3VzZUxlZnQiLCJzaXplYWJsZURpdldpZHRoIiwicHJldmlvdXNTaXplYWJsZURpdldpZHRoIiwicHJldmlvdXNTaWJsaW5nRWxlbWVudCIsImdldFByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJzaXplYWJsZURpdiIsIndpZHRoIiwic2V0V2lkdGgiLCJnZXRXaWR0aCIsInN0YXJ0RHJhZ2dpbmciLCJjb2x1bW5SZXNpemUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJwcm9wZXJ0aWVzIiwibW91c2VVcEhhbmRsZXIiLCJiaW5kIiwibW91c2VNb3ZlSGFuZGxlciIsIm1vdXNlRG93bkhhbmRsZXIiLCJtb3VzZU92ZXJIYW5kbGVyIiwibW91c2VPdXRIYW5kbGVyIiwib25Nb3VzZURvd24iLCJvbk1vdXNlT3ZlciIsIm9uTW91c2VPdXQiLCJ3aW5kb3ciLCJvbk1vdXNlVXAiLCJvbk1vdXNlTW92ZSIsIkNsYXNzIiwidmVydGljYWxTcGxpdHRlciIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGdCOzs7Ozs7Ozs7Ozs7O3FDQUNhO0FBQ2YsVUFBTUMsUUFBUSxHQUFHLEtBQUtDLFVBQUwsRUFBakI7O0FBRUEsVUFBSUQsUUFBSixFQUFjO0FBQ1osYUFBS0UsWUFBTDtBQUNEOztBQUVEQyx5QkFBT0MsS0FBUDtBQUNEOzs7cUNBRWdCQyxLLEVBQU87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QUEsU0FBUyxFQUFFO0FBRGMsQzs7ZUFhZCx1QkFBVTFDLGdCQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyB3aW5kb3csIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgY3Vyc29yIGZyb20gXCIuL2N1cnNvclwiO1xuXG5jbGFzcyBWZXJ0aWNhbFNwbGl0dGVyIGV4dGVuZHMgRWxlbWVudCB7XG4gIG1vdXNlVXBIYW5kbGVyKCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgfVxuXG4gICAgY3Vyc29yLnJlc2V0KCk7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgY29uc3QgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsICAvLy9cbiAgICAgICAgICAgIHJlbGF0aXZlTW91c2VMZWZ0ID0gbW91c2VMZWZ0IC0gdGhpcy5wcmV2aW91c01vdXNlTGVmdCxcbiAgICAgICAgICAgIHNpemVhYmxlRGl2V2lkdGggPSB0aGlzLnByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCArIHJlbGF0aXZlTW91c2VMZWZ0LFxuICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgICB3aWR0aCA9IHNpemVhYmxlRGl2V2lkdGg7IC8vL1xuXG4gICAgICBzaXplYWJsZURpdi5zZXRXaWR0aCh3aWR0aCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICBjb25zdCBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgIC8vL1xuICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBzaXplYWJsZURpdldpZHRoID0gc2l6ZWFibGVEaXYuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIHByZXZpb3VzTW91c2VMZWZ0ID0gbW91c2VMZWZ0LCAgLy8vXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBzaXplYWJsZURpdldpZHRoOyAgIC8vL1xuXG4gICAgICB0aGlzLnByZXZpb3VzTW91c2VMZWZ0ID0gcHJldmlvdXNNb3VzZUxlZnQ7XG5cbiAgICAgIHRoaXMucHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gcHJldmlvdXNTaXplYWJsZURpdldpZHRoO1xuXG4gICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcoKTtcbiAgICB9XG5cbiAgICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG4gIH1cblxuICBtb3VzZU92ZXJIYW5kbGVyKCkge1xuICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbiAgfVxuXG4gIG1vdXNlT3V0SGFuZGxlcigpIHtcbiAgICBjdXJzb3IucmVzZXQoKTtcbiAgfVxuXG4gIHN0YXJ0RHJhZ2dpbmcoKSB7XG4gICAgdGhpcy5hZGRDbGFzcyhcImRyYWdnaW5nXCIpO1xuICB9XG5cbiAgc3RvcERyYWdnaW5nKCkge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcbiAgfVxuXG4gIGlzRHJhZ2dpbmcoKSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmhhc0NsYXNzKFwiZHJhZ2dpbmdcIik7XG5cbiAgICByZXR1cm4gZHJhZ2dpbmc7XG4gIH1cblxuICBpbml0aWFsaXNlKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBtb3VzZVVwSGFuZGxlciA9IHRoaXMubW91c2VVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZU1vdmVIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VEb3duSGFuZGxlciA9IHRoaXMubW91c2VEb3duSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlT3ZlckhhbmRsZXIgPSB0aGlzLm1vdXNlT3ZlckhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZU91dEhhbmRsZXIgPSB0aGlzLm1vdXNlT3V0SGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vbk1vdXNlRG93bihtb3VzZURvd25IYW5kbGVyKTtcbiAgICB0aGlzLm9uTW91c2VPdmVyKG1vdXNlT3ZlckhhbmRsZXIpO1xuICAgIHRoaXMub25Nb3VzZU91dChtb3VzZU91dEhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9uTW91c2VVcChtb3VzZVVwSGFuZGxlcik7XG5cbiAgICB3aW5kb3cub25Nb3VzZU1vdmUobW91c2VNb3ZlSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2ZXJ0aWNhbC1zcGxpdHRlclwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IHZlcnRpY2FsU3BsaXR0ZXIgPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICB2ZXJ0aWNhbFNwbGl0dGVyLmluaXRpYWxpc2UocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gdmVydGljYWxTcGxpdHRlcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmVydGljYWxTcGxpdHRlcilgXG5cbiAgd2lkdGg6IDAuNXJlbTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcblxuYDtcbiJdfQ==