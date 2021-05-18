"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var previousCursor; ///
var bodyDOMElement = document.querySelector("body");
function columnResize() {
    var currentCursor = getCurrentCursor();
    if (currentCursor !== "col-resize") {
        previousCursor = currentCursor;
        setCursor("col-resize");
    }
}
function rowResize() {
    var currentCursor = getCurrentCursor();
    if (currentCursor !== "row-resize") {
        previousCursor = currentCursor;
        setCursor("row-resize");
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
    var currentCursor = bodyDOMElement.style.cursor; ///
    return currentCursor || "auto"; ///
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2N1cnNvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxubGV0IHByZXZpb3VzQ3Vyc29yOyAgLy8vXG5cbmNvbnN0IGJvZHlET01FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmZ1bmN0aW9uIGNvbHVtblJlc2l6ZSgpIHtcbiAgY29uc3QgY3VycmVudEN1cnNvciA9IGdldEN1cnJlbnRDdXJzb3IoKTtcblxuICBpZiAoY3VycmVudEN1cnNvciAhPT0gXCJjb2wtcmVzaXplXCIpIHtcbiAgICBwcmV2aW91c0N1cnNvciA9IGN1cnJlbnRDdXJzb3I7XG5cbiAgICBzZXRDdXJzb3IoXCJjb2wtcmVzaXplXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJvd1Jlc2l6ZSgpIHtcbiAgY29uc3QgY3VycmVudEN1cnNvciA9IGdldEN1cnJlbnRDdXJzb3IoKTtcblxuICBpZiAoY3VycmVudEN1cnNvciAhPT0gXCJyb3ctcmVzaXplXCIpIHtcbiAgICBwcmV2aW91c0N1cnNvciA9IGN1cnJlbnRDdXJzb3I7XG5cbiAgICBzZXRDdXJzb3IoXCJyb3ctcmVzaXplXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICBzZXRDdXJzb3IocHJldmlvdXNDdXJzb3IpOyAvLy9cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb2x1bW5SZXNpemUsXG4gIHJvd1Jlc2l6ZSxcbiAgcmVzZXRcbn1cblxuZnVuY3Rpb24gc2V0Q3Vyc29yKGN1cnNvcikge1xuICBib2R5RE9NRWxlbWVudC5zdHlsZS5jdXJzb3IgPSBjdXJzb3I7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDdXJzb3IoKSB7XG4gIGNvbnN0IGN1cnJlbnRDdXJzb3IgPSBib2R5RE9NRWxlbWVudC5zdHlsZS5jdXJzb3I7ICAvLy9cblxuICByZXR1cm4gY3VycmVudEN1cnNvciB8fCBcImF1dG9cIjsgLy8vXG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7SUFFUixjQUFjLENBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO0lBRWxCLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxFQUFDLElBQU07U0FFM0MsWUFBWTtRQUNiLGFBQWEsR0FBRyxnQkFBZ0I7UUFFbEMsYUFBYSxNQUFLLFVBQVk7UUFDaEMsY0FBYyxHQUFHLGFBQWE7UUFFOUIsU0FBUyxFQUFDLFVBQVk7OztTQUlqQixTQUFTO1FBQ1YsYUFBYSxHQUFHLGdCQUFnQjtRQUVsQyxhQUFhLE1BQUssVUFBWTtRQUNoQyxjQUFjLEdBQUcsYUFBYTtRQUU5QixTQUFTLEVBQUMsVUFBWTs7O1NBSWpCLEtBQUs7SUFDWixTQUFTLENBQUMsY0FBYyxFQUFHLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRzs7O0lBSTlCLFlBQVksRUFBWixZQUFZO0lBQ1osU0FBUyxFQUFULFNBQVM7SUFDVCxLQUFLLEVBQUwsS0FBSzs7O1NBR0UsU0FBUyxDQUFDLE1BQU07SUFDdkIsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTTs7U0FHN0IsZ0JBQWdCO1FBQ2pCLGFBQWEsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7V0FFaEQsYUFBYSxLQUFJLElBQU0sRUFBRSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUcifQ==