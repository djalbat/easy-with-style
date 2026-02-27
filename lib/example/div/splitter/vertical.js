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
const _index = /*#__PURE__*/ _interop_require_default(require("../../../index"));
const _easy = require("easy");
const _cursor = /*#__PURE__*/ _interop_require_default(require("../../cursor"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class VerticalSplitterDiv extends _easy.Element {
    mouseUpHandler(event, element) {
        const dragging = this.isDragging();
        if (dragging) {
            this.stopDragging();
        }
        _cursor.default.reset();
    }
    mouseMoveHandler(event) {
        const dragging = this.isDragging();
        if (dragging) {
            const mouseLeft = event.pageX, relativeMouseLeft = mouseLeft - this.previousMouseLeft, sizeableDivWidth = this.previousSizeableDivWidth + relativeMouseLeft, previousSiblingElement = this.getPreviousSiblingElement(), sizeableDiv = previousSiblingElement, width = sizeableDivWidth; ///
            sizeableDiv.setWidth(width);
        }
    }
    mouseDownHandler(event) {
        const dragging = this.isDragging();
        if (!dragging) {
            const mouseLeft = event.pageX, previousSiblingElement = this.getPreviousSiblingElement(), sizeableDiv = previousSiblingElement, sizeableDivWidth = sizeableDiv.getWidth(), previousMouseLeft = mouseLeft, previousSizeableDivWidth = sizeableDivWidth; ///
            this.previousMouseLeft = previousMouseLeft;
            this.previousSizeableDivWidth = previousSizeableDivWidth;
            this.startDragging();
        }
        _cursor.default.columnResize();
    }
    mouseOverHandler(event, element) {
        _cursor.default.columnResize();
    }
    mouseOutHandler(event, element) {
        _cursor.default.reset();
    }
    startDragging() {
        this.addClass("dragging");
    }
    stopDragging() {
        this.removeClass("dragging");
    }
    isDragging() {
        const dragging = this.hasClass("dragging");
        return dragging;
    }
    didMount() {
        this.onMouseDown(this.mouseDownHandler, this);
        this.onMouseOver(this.mouseOverHandler, this);
        this.onMouseOut(this.mouseOutHandler, this);
        _easy.window.onMouseUp(this.mouseUpHandler, this);
        _easy.window.onMouseMove(this.mouseMoveHandler, this);
    }
    willUnmount() {
        this.offMouseDown(this.mouseDownHandler, this);
        this.offMouseOver(this.mouseOverHandler, this);
        this.offMouseOut(this.mouseOutHandler, this);
        _easy.window.offMouseUp(this.mouseUpHandler, this);
        _easy.window.offMouseMove(this.mouseMoveHandler, this);
    }
    static tagName = "div";
    static defaultProperties = {
        className: "vertical-splitter"
    };
}
const _default = (0, _index.default)(VerticalSplitterDiv)`

  width: 1rem;
  flex-shrink: 0;

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyB3aW5kb3csIEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgY3Vyc29yIGZyb20gXCIuLi8uLi9jdXJzb3JcIjtcblxuY2xhc3MgVmVydGljYWxTcGxpdHRlckRpdiBleHRlbmRzIEVsZW1lbnQge1xuICBtb3VzZVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICBpZiAoZHJhZ2dpbmcpIHtcbiAgICAgIHRoaXMuc3RvcERyYWdnaW5nKCk7XG4gICAgfVxuXG4gICAgY3Vyc29yLnJlc2V0KCk7XG4gIH1cblxuICBtb3VzZU1vdmVIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgZHJhZ2dpbmcgPSB0aGlzLmlzRHJhZ2dpbmcoKTtcblxuICAgIGlmIChkcmFnZ2luZykge1xuICAgICAgY29uc3QgbW91c2VMZWZ0ID0gZXZlbnQucGFnZVgsICAvLy9cbiAgICAgICAgICAgIHJlbGF0aXZlTW91c2VMZWZ0ID0gbW91c2VMZWZ0IC0gdGhpcy5wcmV2aW91c01vdXNlTGVmdCxcbiAgICAgICAgICAgIHNpemVhYmxlRGl2V2lkdGggPSB0aGlzLnByZXZpb3VzU2l6ZWFibGVEaXZXaWR0aCArIHJlbGF0aXZlTW91c2VMZWZ0LFxuICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgICB3aWR0aCA9IHNpemVhYmxlRGl2V2lkdGg7IC8vL1xuXG4gICAgICBzaXplYWJsZURpdi5zZXRXaWR0aCh3aWR0aCk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VEb3duSGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nKCk7XG5cbiAgICBpZiAoIWRyYWdnaW5nKSB7XG4gICAgICBjb25zdCBtb3VzZUxlZnQgPSBldmVudC5wYWdlWCwgIC8vL1xuICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nRWxlbWVudCA9IHRoaXMuZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCgpLFxuICAgICAgICAgICAgc2l6ZWFibGVEaXYgPSBwcmV2aW91c1NpYmxpbmdFbGVtZW50LCAgLy8vXG4gICAgICAgICAgICBzaXplYWJsZURpdldpZHRoID0gc2l6ZWFibGVEaXYuZ2V0V2lkdGgoKSxcbiAgICAgICAgICAgIHByZXZpb3VzTW91c2VMZWZ0ID0gbW91c2VMZWZ0LCAgLy8vXG4gICAgICAgICAgICBwcmV2aW91c1NpemVhYmxlRGl2V2lkdGggPSBzaXplYWJsZURpdldpZHRoOyAgIC8vL1xuXG4gICAgICB0aGlzLnByZXZpb3VzTW91c2VMZWZ0ID0gcHJldmlvdXNNb3VzZUxlZnQ7XG5cbiAgICAgIHRoaXMucHJldmlvdXNTaXplYWJsZURpdldpZHRoID0gcHJldmlvdXNTaXplYWJsZURpdldpZHRoO1xuXG4gICAgICB0aGlzLnN0YXJ0RHJhZ2dpbmcoKTtcbiAgICB9XG5cbiAgICBjdXJzb3IuY29sdW1uUmVzaXplKCk7XG4gIH1cblxuICBtb3VzZU92ZXJIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY3Vyc29yLmNvbHVtblJlc2l6ZSgpO1xuICB9XG5cbiAgbW91c2VPdXRIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgY3Vyc29yLnJlc2V0KCk7XG4gIH1cblxuICBzdGFydERyYWdnaW5nKCkge1xuICAgIHRoaXMuYWRkQ2xhc3MoXCJkcmFnZ2luZ1wiKTtcbiAgfVxuXG4gIHN0b3BEcmFnZ2luZygpIHtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKFwiZHJhZ2dpbmdcIik7XG4gIH1cblxuICBpc0RyYWdnaW5nKCkge1xuICAgIGNvbnN0IGRyYWdnaW5nID0gdGhpcy5oYXNDbGFzcyhcImRyYWdnaW5nXCIpO1xuXG4gICAgcmV0dXJuIGRyYWdnaW5nO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vbk1vdXNlRG93bih0aGlzLm1vdXNlRG93bkhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZU92ZXIodGhpcy5tb3VzZU92ZXJIYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgd2luZG93Lm9uTW91c2VVcCh0aGlzLm1vdXNlVXBIYW5kbGVyLCB0aGlzKTtcblxuICAgIHdpbmRvdy5vbk1vdXNlTW92ZSh0aGlzLm1vdXNlTW92ZUhhbmRsZXIsIHRoaXMpO1xuICB9XG5cbiAgd2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5vZmZNb3VzZURvd24odGhpcy5tb3VzZURvd25IYW5kbGVyLCB0aGlzKTtcbiAgICB0aGlzLm9mZk1vdXNlT3Zlcih0aGlzLm1vdXNlT3ZlckhhbmRsZXIsIHRoaXMpO1xuICAgIHRoaXMub2ZmTW91c2VPdXQodGhpcy5tb3VzZU91dEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgd2luZG93Lm9mZk1vdXNlVXAodGhpcy5tb3VzZVVwSGFuZGxlciwgdGhpcyk7XG5cbiAgICB3aW5kb3cub2ZmTW91c2VNb3ZlKHRoaXMubW91c2VNb3ZlSGFuZGxlciwgdGhpcyk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2ZXJ0aWNhbC1zcGxpdHRlclwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWZXJ0aWNhbFNwbGl0dGVyRGl2KWBcblxuICB3aWR0aDogMXJlbTtcbiAgZmxleC1zaHJpbms6IDA7XG5cbmA7XG4iXSwibmFtZXMiOlsiVmVydGljYWxTcGxpdHRlckRpdiIsIkVsZW1lbnQiLCJtb3VzZVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImRyYWdnaW5nIiwiaXNEcmFnZ2luZyIsInN0b3BEcmFnZ2luZyIsImN1cnNvciIsInJlc2V0IiwibW91c2VNb3ZlSGFuZGxlciIsIm1vdXNlTGVmdCIsInBhZ2VYIiwicmVsYXRpdmVNb3VzZUxlZnQiLCJwcmV2aW91c01vdXNlTGVmdCIsInNpemVhYmxlRGl2V2lkdGgiLCJwcmV2aW91c1NpemVhYmxlRGl2V2lkdGgiLCJwcmV2aW91c1NpYmxpbmdFbGVtZW50IiwiZ2V0UHJldmlvdXNTaWJsaW5nRWxlbWVudCIsInNpemVhYmxlRGl2Iiwid2lkdGgiLCJzZXRXaWR0aCIsIm1vdXNlRG93bkhhbmRsZXIiLCJnZXRXaWR0aCIsInN0YXJ0RHJhZ2dpbmciLCJjb2x1bW5SZXNpemUiLCJtb3VzZU92ZXJIYW5kbGVyIiwibW91c2VPdXRIYW5kbGVyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIiwiZGlkTW91bnQiLCJvbk1vdXNlRG93biIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsIndpbmRvdyIsIm9uTW91c2VVcCIsIm9uTW91c2VNb3ZlIiwid2lsbFVubW91bnQiLCJvZmZNb3VzZURvd24iLCJvZmZNb3VzZU92ZXIiLCJvZmZNb3VzZU91dCIsIm9mZk1vdXNlVXAiLCJvZmZNb3VzZU1vdmUiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXdHQTs7O2VBQUE7Ozs4REF0R3NCO3NCQUVVOytEQUViOzs7Ozs7QUFFbkIsTUFBTUEsNEJBQTRCQyxhQUFPO0lBQ3ZDQyxlQUFlQyxLQUFLLEVBQUVDLE9BQU8sRUFBRTtRQUM3QixNQUFNQyxXQUFXLElBQUksQ0FBQ0Ms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