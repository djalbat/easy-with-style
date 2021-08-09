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
