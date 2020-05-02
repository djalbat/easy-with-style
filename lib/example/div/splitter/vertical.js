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

  return VerticalSplitterDiv;
}(_easy.Element);

_defineProperty(VerticalSplitterDiv, "tagName", "div");

_defineProperty(VerticalSplitterDiv, "defaultProperties", {
  className: "vertical-splitter"
});

var _default = (0, _index["default"])(VerticalSplitterDiv)(_templateObject());

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLmpzIl0sIm5hbWVzIjpbIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJkcmFnZ2luZyIsImlzRHJhZ2dpbmciLCJzdG9wRHJhZ2dpbmciLCJjdXJzb3IiLCJyZXNldCIsImV2ZW50IiwibW91c2VMZWZ0IiwicGFnZVgiLCJyZWxhdGl2ZU1vdXNlTGVmdCIsInByZXZpb3VzTW91c2VMZWZ0Iiwic2l6ZWFibGVEaXZXaWR0aCIsInByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCIsInByZXZpb3VzU2libGluZ0VsZW1lbnQiLCJnZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50Iiwic2l6ZWFibGVEaXYiLCJ3aWR0aCIsInNldFdpZHRoIiwiZ2V0V2lkdGgiLCJzdGFydERyYWdnaW5nIiwiY29sdW1uUmVzaXplIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIiwicHJvcGVydGllcyIsIm1vdXNlVXBIYW5kbGVyIiwiYmluZCIsIm1vdXNlTW92ZUhhbmRsZXIiLCJtb3VzZURvd25IYW5kbGVyIiwibW91c2VPdmVySGFuZGxlciIsIm1vdXNlT3V0SGFuZGxlciIsIm9uTW91c2VEb3duIiwib25Nb3VzZU92ZXIiLCJvbk1vdXNlT3V0Iiwid2luZG93Iiwib25Nb3VzZVVwIiwib25Nb3VzZU1vdmUiLCJDbGFzcyIsInZlcnRpY2FsU3BsaXR0ZXIiLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxtQjs7Ozs7Ozs7Ozs7OztxQ0FDYTtBQUNmLFVBQU1DLFFBQVEsR0FBRyxLQUFLQyxVQUFMLEVBQWpCOztBQUVBLFVBQUlELFFBQUosRUFBYztBQUNaLGFBQUtFLFlBQUw7QUFDRDs7QUFFREMseUJBQU9DLEtBQVA7QUFDRDs7O3FDQUVnQkMsSyxFQUFPO0FBQ3RC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QVMsRUFBRTtBQURjLEM7O2VBYWQsdUJBQVUxQyxtQkFBVixDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgd2luZG93LCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IGN1cnNvciBmcm9tIFwiLi4vLi4vY3Vyc29yXCI7XG5cbmNsYXNzIFZlcnRpY2FsU3BsaXR0ZXJEaXYgZXh0ZW5kcyBFbGVtZW50IHtcbiAgbW91c2VVcEhhbmRsZXIoKSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgdGhpcy5zdG9wRHJhZ2dpbmcoKTtcbiAgICB9XG5cbiAgICBjdXJzb3IucmVzZXQoKTtcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaXNEcmFnZ2luZygpO1xuXG4gICAgaWYgKGRyYWdnaW5nKSB7XG4gICAgICBjb25zdCBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgIC8vL1xuICAgICAgICAgICAgcmVsYXRpdmVNb3VzZUxlZnQgPSBtb3VzZUxlZnQgLSB0aGlzLnByZXZpb3VzTW91c2VMZWZ0LFxuICAgICAgICAgICAgc2l6ZWFibGVEaXZXaWR0aCA9IHRoaXMucHJldmlvdXNTaXplYWJsZURpdldpZHRoICsgcmVsYXRpdmVNb3VzZUxlZnQsXG4gICAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgICBzaXplYWJsZURpdiA9IHByZXZpb3VzU2libGluZ0VsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHdpZHRoID0gc2l6ZWFibGVEaXZXaWR0aDsgLy8vXG5cbiAgICAgIHNpemVhYmxlRGl2LnNldFdpZHRoKHdpZHRoKTtcbiAgICB9XG4gIH1cblxuICBtb3VzZURvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmICghZHJhZ2dpbmcpIHtcbiAgICAgIGNvbnN0IG1vdXNlTGVmdCA9IGV2ZW50LnBhZ2VYLCAgLy8vXG4gICAgICAgICAgICBwcmV2aW91c1NpYmxpbmdFbGVtZW50ID0gdGhpcy5nZXRQcmV2aW91c1NpYmxpbmdFbGVtZW50KCksXG4gICAgICAgICAgICBzaXplYWJsZURpdiA9IHByZXZpb3VzU2libGluZ0VsZW1lbnQsICAvLy9cbiAgICAgICAgICAgIHNpemVhYmxlRGl2V2lkdGggPSBzaXplYWJsZURpdi5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgcHJldmlvdXNNb3VzZUxlZnQgPSBtb3VzZUxlZnQsICAvLy9cbiAgICAgICAgICAgIHByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCA9IHNpemVhYmxlRGl2V2lkdGg7ICAgLy8vXG5cbiAgICAgIHRoaXMucHJldmlvdXNNb3VzZUxlZnQgPSBwcmV2aW91c01vdXNlTGVmdDtcblxuICAgICAgdGhpcy5wcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGg7XG5cbiAgICAgIHRoaXMuc3RhcnREcmFnZ2luZygpO1xuICAgIH1cblxuICAgIGN1cnNvci5jb2x1bW5SZXNpemUoKTtcbiAgfVxuXG4gIG1vdXNlT3ZlckhhbmRsZXIoKSB7XG4gICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuICB9XG5cbiAgbW91c2VPdXRIYW5kbGVyKCkge1xuICAgIGN1cnNvci5yZXNldCgpO1xuICB9XG5cbiAgc3RhcnREcmFnZ2luZygpIHtcbiAgICB0aGlzLmFkZENsYXNzKFwiZHJhZ2dpbmdcIik7XG4gIH1cblxuICBzdG9wRHJhZ2dpbmcoKSB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhcImRyYWdnaW5nXCIpO1xuICB9XG5cbiAgaXNEcmFnZ2luZygpIHtcbiAgICBjb25zdCBkcmFnZ2luZyA9IHRoaXMuaGFzQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcblxuICAgIHJldHVybiBkcmFnZ2luZztcbiAgfVxuXG4gIGluaXRpYWxpc2UocHJvcGVydGllcykge1xuICAgIGNvbnN0IG1vdXNlVXBIYW5kbGVyID0gdGhpcy5tb3VzZVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlTW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlTW92ZUhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBtb3VzZURvd25IYW5kbGVyID0gdGhpcy5tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VPdmVySGFuZGxlciA9IHRoaXMubW91c2VPdmVySGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIG1vdXNlT3V0SGFuZGxlciA9IHRoaXMubW91c2VPdXRIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uTW91c2VEb3duKG1vdXNlRG93bkhhbmRsZXIpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIobW91c2VPdmVySGFuZGxlcik7XG4gICAgdGhpcy5vbk1vdXNlT3V0KG1vdXNlT3V0SGFuZGxlcik7XG5cbiAgICB3aW5kb3cub25Nb3VzZVVwKG1vdXNlVXBIYW5kbGVyKTtcblxuICAgIHdpbmRvdy5vbk1vdXNlTW92ZShtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZlcnRpY2FsLXNwbGl0dGVyXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmVydGljYWxTcGxpdHRlciA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIHZlcnRpY2FsU3BsaXR0ZXIuaW5pdGlhbGlzZShwcm9wZXJ0aWVzKTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbFNwbGl0dGVyO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWZXJ0aWNhbFNwbGl0dGVyRGl2KWBcblxuICB3aWR0aDogMC41cmVtO1xuICBmbGV4LXNocmluazogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuXG5gO1xuIl19