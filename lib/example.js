"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("./example/preamble");
var _index = /*#__PURE__*/ _interopRequireDefault(require("./index"));
var _easy = require("easy");
var _view = /*#__PURE__*/ _interopRequireDefault(require("./example/view"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var renderStyles = _index.default.renderStyles;
var body = new _easy.Body();
renderStyles();
body.mount(/*#__PURE__*/ React.createElement(_view.default, null));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuL2V4YW1wbGUvcHJlYW1ibGVcIjtcblxuaW1wb3J0IHdpdGhTdHlsZSBmcm9tIFwiLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXdcIjtcblxuY29uc3QgeyByZW5kZXJTdHlsZXMgfSA9IHdpdGhTdHlsZTtcblxuY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbnJlbmRlclN0eWxlcygpO1xuXG5ib2R5Lm1vdW50KFxuXG4gIDxWaWV3Lz5cblxuKTtcbiJdLCJuYW1lcyI6WyJyZW5kZXJTdHlsZXMiLCJ3aXRoU3R5bGUiLCJib2R5IiwiQm9keSIsIm1vdW50IiwiVmlldyJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7O1FBRU4sb0JBQW9COzBEQUVMLFNBQVM7b0JBRVYsTUFBTTt5REFFVixnQkFBZ0I7Ozs7OztBQUVqQyxJQUFNLEFBQUVBLFlBQVksR0FBS0MsTUFBUyxRQUFBLENBQTFCRCxZQUFZLEFBQWMsQUFBQztBQUVuQyxJQUFNRSxJQUFJLEdBQUcsSUFBSUMsS0FBSSxLQUFBLEVBQUUsQUFBQztBQUV4QkgsWUFBWSxFQUFFLENBQUM7QUFFZkUsSUFBSSxDQUFDRSxLQUFLLGVBRVIsb0JBQUNDLEtBQUksUUFBQSxPQUFFLENBRVIsQ0FBQyJ9