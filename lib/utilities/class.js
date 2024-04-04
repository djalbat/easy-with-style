"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isClass", {
    enumerable: true,
    get: function() {
        return isClass;
    }
});
var _easy = require("easy");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function isClass(argument) {
    return isSubclassOf(argument, _easy.Element);
} ///
function isSubclassOf(argument, Class) {
    var subclassOf = _instanceof(argument.prototype, Class);
    return subclassOf;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2xhc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2xhc3MoYXJndW1lbnQpIHsgcmV0dXJuIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgRWxlbWVudCk7IH0gIC8vL1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGNvbnN0IHN1YmNsYXNzT2YgPSAoYXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgQ2xhc3MpO1xuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuIl0sIm5hbWVzIjpbImlzQ2xhc3MiLCJhcmd1bWVudCIsImlzU3ViY2xhc3NPZiIsIkVsZW1lbnQiLCJDbGFzcyIsInN1YmNsYXNzT2YiLCJwcm90b3R5cGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJZ0JBOzs7ZUFBQUE7OztvQkFGUTs7Ozs7Ozs7QUFFakIsU0FBU0EsUUFBUUMsUUFBUTtJQUFJLE9BQU9DLGFBQWFELFVBQVVFLGFBQU87QUFBRyxFQUFHLEdBQUc7QUFFbEYsU0FBU0QsYUFBYUQsUUFBUSxFQUFFRyxLQUFLO0lBQ25DLElBQU1DLGFBQWNKLEFBQWtCLFlBQWxCQSxTQUFTSyxTQUFTLEVBQVlGO0lBRWxELE9BQU9DO0FBQ1QifQ==