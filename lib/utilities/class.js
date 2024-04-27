'use strict';
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import { Element } from "easy";
export function isClass(argument) {
    return isSubclassOf(argument, Element);
} ///
function isSubclassOf(argument, Class) {
    var subclassOf = _instanceof(argument.prototype, Class);
    return subclassOf;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2xhc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2xhc3MoYXJndW1lbnQpIHsgcmV0dXJuIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgRWxlbWVudCk7IH0gIC8vL1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGNvbnN0IHN1YmNsYXNzT2YgPSAoYXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgQ2xhc3MpO1xuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuIl0sIm5hbWVzIjpbIkVsZW1lbnQiLCJpc0NsYXNzIiwiYXJndW1lbnQiLCJpc1N1YmNsYXNzT2YiLCJDbGFzcyIsInN1YmNsYXNzT2YiLCJwcm90b3R5cGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxTQUFTQSxPQUFPLFFBQVEsT0FBTztBQUUvQixPQUFPLFNBQVNDLFFBQVFDLFFBQVE7SUFBSSxPQUFPQyxhQUFhRCxVQUFVRjtBQUFVLEVBQUcsR0FBRztBQUVsRixTQUFTRyxhQUFhRCxRQUFRLEVBQUVFLEtBQUs7SUFDbkMsSUFBTUMsYUFBY0gsQUFBa0IsWUFBbEJBLFNBQVNJLFNBQVMsRUFBWUY7SUFFbEQsT0FBT0M7QUFDVCJ9