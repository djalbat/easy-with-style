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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2N1cnNvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQVVUTywgQ09MX1JFU0laRSwgUk9XX1JFU0laRSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5sZXQgcHJldmlvdXNDdXJzb3I7ICAvLy9cblxuY29uc3QgYm9keURPTUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuZnVuY3Rpb24gY29sdW1uUmVzaXplKCkge1xuICBjb25zdCBjdXJyZW50Q3Vyc29yID0gZ2V0Q3VycmVudEN1cnNvcigpO1xuXG4gIGlmIChjdXJyZW50Q3Vyc29yICE9PSBDT0xfUkVTSVpFKSB7XG4gICAgcHJldmlvdXNDdXJzb3IgPSBjdXJyZW50Q3Vyc29yO1xuXG4gICAgc2V0Q3Vyc29yKENPTF9SRVNJWkUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJvd1Jlc2l6ZSgpIHtcbiAgY29uc3QgY3VycmVudEN1cnNvciA9IGdldEN1cnJlbnRDdXJzb3IoKTtcblxuICBpZiAoY3VycmVudEN1cnNvciAhPT0gUk9XX1JFU0laRSkge1xuICAgIHByZXZpb3VzQ3Vyc29yID0gY3VycmVudEN1cnNvcjtcblxuICAgIHNldEN1cnNvcihST1dfUkVTSVpFKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNldCgpIHtcbiAgc2V0Q3Vyc29yKHByZXZpb3VzQ3Vyc29yKTsgLy8vXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29sdW1uUmVzaXplLFxuICByb3dSZXNpemUsXG4gIHJlc2V0XG59XG5cbmZ1bmN0aW9uIHNldEN1cnNvcihjdXJzb3IpIHtcbiAgYm9keURPTUVsZW1lbnQuc3R5bGUuY3Vyc29yID0gY3Vyc29yO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q3Vyc29yKCkge1xuICBjb25zdCBjdXJyZW50Q3Vyc29yID0gYm9keURPTUVsZW1lbnQuc3R5bGUuY3Vyc29yIHx8IEFVVE87XG5cbiAgcmV0dXJuIGN1cnJlbnRDdXJzb3I7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFaUMsVUFBYTtJQUV0RCxjQUFjLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRWxCLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxFQUFDLElBQU07U0FFM0MsWUFBWTtRQUNiLGFBQWEsR0FBRyxnQkFBZ0I7UUFFbEMsYUFBYSxLQVQwQixVQUFhO1FBVXRELGNBQWMsR0FBRyxhQUFhO1FBRTlCLFNBQVMsQ0FaZ0MsVUFBYTs7O1NBZ0JqRCxTQUFTO1FBQ1YsYUFBYSxHQUFHLGdCQUFnQjtRQUVsQyxhQUFhLEtBbkIwQixVQUFhO1FBb0J0RCxjQUFjLEdBQUcsYUFBYTtRQUU5QixTQUFTLENBdEJnQyxVQUFhOzs7U0EwQmpELEtBQUs7SUFDWixTQUFTLENBQUMsY0FBYyxFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7O0lBSTlCLFlBQVksRUFBWixZQUFZO0lBQ1osU0FBUyxFQUFULFNBQVM7SUFDVCxLQUFLLEVBQUwsS0FBSzs7O1NBR0UsU0FBUyxDQUFDLE1BQU07SUFDdkIsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTTs7U0FHN0IsZ0JBQWdCO1FBQ2pCLGFBQWEsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sSUF6Q04sVUFBYTtXQTJDakQsYUFBYSJ9