"use strict";
var _index = _interopRequireDefault(require("./index"));
var _easy = require("easy");
var _view = _interopRequireDefault(require("./example/view"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
Object.assign(window, {
    React: _easy.React
});
var renderStyles = _index.default.renderStyles;
var body = new _easy.Body();
renderStyles();
body.mount(_easy.React.createElement(_view.default, null));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCIuL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSwgUmVhY3QgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9leGFtcGxlL3ZpZXdcIjtcblxuT2JqZWN0LmFzc2lnbih3aW5kb3csIHtcbiAgUmVhY3Rcbn0pO1xuXG5jb25zdCB7IHJlbmRlclN0eWxlcyB9ID0gd2l0aFN0eWxlO1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxucmVuZGVyU3R5bGVzKCk7XG5cbmJvZHkubW91bnQoXG5cbiAgPFZpZXcgLz5cblxuKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBO0lBRUEsTUFBQTtJQUVBLEtBQUE7SUFFQSxLQUFBOzs7Ozs7QUFFQSxNQUFBLENBQUEsTUFBQSxDQUFBLE1BQUE7QUFDQSxTQUFBLEVBTEEsS0FBQTs7SUFRQSxZQUFBLEdBVkEsTUFBQSxTQVVBLFlBQUE7SUFFQSxJQUFBLE9BVkEsS0FBQTtBQVlBLFlBQUE7QUFFQSxJQUFBLENBQUEsS0FBQSxDQWRBLEtBQUEscUJBRUEsS0FBQSJ9