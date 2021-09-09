"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _index = _interopRequireDefault(require("../../index"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  display: flex;\n  flex-grow: 1;\n  flex-direction: row;\n\n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var ColumnsDiv = function(properties) {
    var className = properties.className, childElements = properties.childElements;
    return(/*#__PURE__*/ React.createElement("div", {
        className: "".concat(className, " columns")
    }, childElements));
};
var _default = (0, _index).default(ColumnsDiv)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2Rpdi9jb2x1bW5zLmpzIl0sIm5hbWVzIjpbIndpdGhTdHlsZSIsIkNvbHVtbnNEaXYiLCJwcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiY2hpbGRFbGVtZW50cyIsImRpdiJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFVSxHQUFhLENBQWIsTUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBY0UsaUVBTXJDOzs7Ozs7O0FBbEJBLEdBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFQLFVBQVUsRUFBSyxDQUFDO0lBQ2xDLEdBQUssQ0FBRyxTQUFTLEdBQW9CLFVBQVUsQ0FBdkMsU0FBUyxFQUFFLGFBQWEsR0FBSyxVQUFVLENBQTVCLGFBQWE7SUFFaEMsTUFBTSxvQ0FFSCxHQUFHO1FBQUMsU0FBUyxLQUFlLE1BQVEsQ0FBbEIsU0FBUyxHQUFDLFFBQVE7T0FDbEMsYUFBYTtBQUlwQixDQUFDO21CQVpxQixNQUFhLFVBY1YsVUFBVSJ9