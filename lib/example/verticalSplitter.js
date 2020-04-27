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
    key: "fromProperties",
    value: function fromProperties(Class, properties) {
      if (properties === undefined) {
        properties = Class; ///

        Class = LexicalEntriesTextarea;
      }

      var verticalSplitter = _easy.Element.fromProperties(Class, properties);

      verticalSplitter.initialise();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsU3BsaXR0ZXIuanMiXSwibmFtZXMiOlsiVmVydGljYWxTcGxpdHRlciIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsImN1cnNvciIsInJlc2V0IiwiZXZlbnQiLCJtb3VzZUxlZnQiLCJwYWdlWCIsInJlbGF0aXZlTW91c2VMZWZ0IiwicHJldmlvdXNNb3VzZUxlZnQiLCJzaXplYWJsZURpdldpZHRoIiwicHJldmlvdXNTaXplYWJsZURpdldpZHRoIiwicHJldmlvdXNTaWJsaW5nRWxlbWVudCIsImdldFByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJzaXplYWJsZURpdiIsIndpZHRoIiwic2V0V2lkdGgiLCJnZXRXaWR0aCIsInN0YXJ0RHJhZ2dpbmciLCJjb2x1bW5SZXNpemUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJtb3VzZVVwSGFuZGxlciIsImJpbmQiLCJtb3VzZU1vdmVIYW5kbGVyIiwibW91c2VEb3duSGFuZGxlciIsIm1vdXNlT3ZlckhhbmRsZXIiLCJtb3VzZU91dEhhbmRsZXIiLCJvbk1vdXNlRG93biIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsIndpbmRvdyIsIm9uTW91c2VVcCIsIm9uTW91c2VNb3ZlIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidW5kZWZpbmVkIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsInZlcnRpY2FsU3BsaXR0ZXIiLCJFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGdCOzs7Ozs7Ozs7Ozs7O3FDQUNhO0FBQ2YsVUFBTUMsUUFBUSxHQUFHLEtBQUtDLFVBQUwsRUFBakI7O0FBRUEsVUFBSUQsUUFBSixFQUFjO0FBQ1osYUFBS0UsWUFBTDtBQUNE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QUE5QixDQUF6Qjs7QUFFQUcsTUFBQUEsZ0JBQWdCLENBQUNHLFVBQWpCO0FBRUEsYUFBT0gsZ0JBQVA7QUFDRDs7OztFQXZHNEJDLGE7O2dCQUF6QnpDLGdCLGFBcUZhLEs7O2dCQXJGYkEsZ0IsdUJBdUZ1QjtBQUN6QjRDLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O2VBbUJkLHVCQUFVNUMsZ0JBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IHdpbmRvdywgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBjdXJzb3IgZnJvbSBcIi4vY3Vyc29yXCI7XG5cbmNsYXNzIFZlcnRpY2FsU3BsaXR0ZXIgZXh0ZW5kcyBFbGVtZW50IHtcbiAgbW91c2VVcEhhbmRsZXIoKSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICB9XG5cbiAgICBjdXJzb3IucmVzZXQoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICBjb25zdCBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgIC8vL1xuICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUxlZnQgPSBtb3VzZUxlZnQgLSB0aGlzLnByZXZpb3VzTW91c2VMZWZ0LFxuICAgICAgICAgICAgc2l6ZWFibGVEaXZXaWR0aCA9IHRoaXMucHJldmlvdXNTaXplYWJsZURpdldpZHRoICsgcmVsYXRpdmVNb3VzZUxlZnQsXG4gICAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgICBzaXplYWJsZURpdiA9IHByZXZpb3VzU2libGluZ0VsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHdpZHRoID0gc2l6ZWFibGVEaXZXaWR0aDsgLy8vXG5cbiAgICAgIHNpemVhYmxlRGl2LnNldFdpZHRoKHdpZHRoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgIGNvbnN0IG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAgLy8vXG4gICAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgICBzaXplYWJsZURpdiA9IHByZXZpb3VzU2libGluZ0VsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHNpemVhYmxlRGl2V2lkdGggPSBzaXplYWJsZURpdi5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgcHJldmlvdXNNb3VzZUxlZnQgPSBtb3VzZUxlZnQsICAvLy9cbiAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCA9IHNpemVhYmxlRGl2V2lkdGg7ICAgLy8vXG5cbiAgICAgIHRoaXMucHJldmlvdXNNb3VzZUxlZnQgPSBwcmV2aW91c01vdXNlTGVmdDtcblxuICAgICAgdGhpcy5wcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGg7XG5cbiAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgIH1cblxuICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbiAgfVxuXG4gIG1vdXNlT3ZlckhhbmRsZXIoKSB7XG4gICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuICB9XG5cbiAgbW91c2VPdXRIYW5kbGVyKCkge1xuICAgIGN1cnNvci5yZXNldCgpO1xuICB9XG5cbiAgc3RhcnREcmFnZ2luZygpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwiZHJhZ2dpbmdcIik7XG4gIH1cblxuICBzdG9wRHJhZ2dpbmcoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImRyYWdnaW5nXCIpO1xuICB9XG5cbiAgaXNEcmFnZ2luZygpIHtcbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaGFzQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICAgIHJldHVybiBkcmFnZ2luZztcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXIgPSB0aGlzLm1vdXNlVXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VNb3ZlSGFuZGxlciA9IHRoaXMubW91c2VNb3ZlSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlRG93bkhhbmRsZXIgPSB0aGlzLm1vdXNlRG93bkhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZU92ZXJIYW5kbGVyID0gdGhpcy5tb3VzZU92ZXJIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VPdXRIYW5kbGVyID0gdGhpcy5tb3VzZU91dEhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25Nb3VzZURvd24obW91c2VEb3duSGFuZGxlcik7XG4gICAgdGhpcy5vbk1vdXNlT3Zlcihtb3VzZU92ZXJIYW5kbGVyKTtcbiAgICB0aGlzLm9uTW91c2VPdXQobW91c2VPdXRIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbk1vdXNlVXAobW91c2VVcEhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9uTW91c2VNb3ZlKG1vdXNlTW92ZUhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmVydGljYWwtc3BsaXR0ZXJcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGlmIChwcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gTGV4aWNhbEVudHJpZXNUZXh0YXJlYTtcbiAgICB9XG5cbiAgICBjb25zdCB2ZXJ0aWNhbFNwbGl0dGVyID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcyk7XG5cbiAgICB2ZXJ0aWNhbFNwbGl0dGVyLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbFNwbGl0dGVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWZXJ0aWNhbFNwbGl0dGVyKWBcblxuICB3aWR0aDogMC41cmVtO1xuICBmbGV4LXNocmluazogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuXG5gO1xuIl19