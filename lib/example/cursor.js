"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _constants = require("./constants");
var previousCursor; ///
var bodyDOMElement = document.querySelector("body");
function columnResize() {
    var currentCursor = getCurrentCursor();
    if (currentCursor !== _constants.COL_RESIZE) {
        previousCursor = currentCursor;
        setCursor(_constants.COL_RESIZE);
    }
}
function rowResize() {
    var currentCursor = getCurrentCursor();
    if (currentCursor !== _constants.ROW_RESIZE) {
        previousCursor = currentCursor;
        setCursor(_constants.ROW_RESIZE);
    }
}
function reset() {
    setCursor(previousCursor); ///
}
var _default = {
    columnResize: columnResize,
    rowResize: rowResize,
    reset: reset
};
exports.default = _default;
function setCursor(cursor) {
    bodyDOMElement.style.cursor = cursor;
}
function getCurrentCursor() {
    var currentCursor = bodyDOMElement.style.cursor || _constants.AUTO;
    return currentCursor;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2N1cnNvci5qcyJdLCJuYW1lcyI6WyJBVVRPIiwiQ09MX1JFU0laRSIsIlJPV19SRVNJWkUiLCJwcmV2aW91c0N1cnNvciIsImJvZHlET01FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29sdW1uUmVzaXplIiwiY3VycmVudEN1cnNvciIsImdldEN1cnJlbnRDdXJzb3IiLCJzZXRDdXJzb3IiLCJyb3dSZXNpemUiLCJyZXNldCIsImN1cnNvciIsInN0eWxlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVpQyxHQUFhLENBQWIsVUFBYTtBQUUxRCxHQUFHLENBQUMsY0FBYyxDQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztBQUV4QixHQUFLLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLEVBQUMsSUFBTTtTQUUzQyxZQUFZLEdBQUcsQ0FBQztJQUN2QixHQUFLLENBQUMsYUFBYSxHQUFHLGdCQUFnQjtJQUV0QyxFQUFFLEVBQUUsYUFBYSxLQVQwQixVQUFhLGFBU3RCLENBQUM7UUFDakMsY0FBYyxHQUFHLGFBQWE7UUFFOUIsU0FBUyxDQVpnQyxVQUFhO0lBYXhELENBQUM7QUFDSCxDQUFDO1NBRVEsU0FBUyxHQUFHLENBQUM7SUFDcEIsR0FBSyxDQUFDLGFBQWEsR0FBRyxnQkFBZ0I7SUFFdEMsRUFBRSxFQUFFLGFBQWEsS0FuQjBCLFVBQWEsYUFtQnRCLENBQUM7UUFDakMsY0FBYyxHQUFHLGFBQWE7UUFFOUIsU0FBUyxDQXRCZ0MsVUFBYTtJQXVCeEQsQ0FBQztBQUNILENBQUM7U0FFUSxLQUFLLEdBQUcsQ0FBQztJQUNoQixTQUFTLENBQUMsY0FBYyxFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztBQUNoQyxDQUFDO2VBRWMsQ0FBQztJQUNkLFlBQVksRUFBWixZQUFZO0lBQ1osU0FBUyxFQUFULFNBQVM7SUFDVCxLQUFLLEVBQUwsS0FBSztBQUNQLENBQUM7O1NBRVEsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFCLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU07QUFDdEMsQ0FBQztTQUVRLGdCQUFnQixHQUFHLENBQUM7SUFDM0IsR0FBSyxDQUFDLGFBQWEsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sSUF6Q04sVUFBYTtJQTJDeEQsTUFBTSxDQUFDLGFBQWE7QUFDdEIsQ0FBQyJ9