'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isClass", {
    enumerable: true,
    get: function() {
        return isClass;
    }
});
const _easy = require("easy");
function isClass(argument) {
    return isSubclassOf(argument, _easy.Element);
} ///
function isSubclassOf(argument, Class) {
    const subclassOf = argument.prototype instanceof Class;
    return subclassOf;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2xhc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2xhc3MoYXJndW1lbnQpIHsgcmV0dXJuIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgRWxlbWVudCk7IH0gIC8vL1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGNvbnN0IHN1YmNsYXNzT2YgPSAoYXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgQ2xhc3MpO1xuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuIl0sIm5hbWVzIjpbImlzQ2xhc3MiLCJhcmd1bWVudCIsImlzU3ViY2xhc3NPZiIsIkVsZW1lbnQiLCJDbGFzcyIsInN1YmNsYXNzT2YiLCJwcm90b3R5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlnQkE7OztlQUFBQTs7O3NCQUZRO0FBRWpCLFNBQVNBLFFBQVFDLFFBQVE7SUFBSSxPQUFPQyxhQUFhRCxVQUFVRSxhQUFPO0FBQUcsRUFBRyxHQUFHO0FBRWxGLFNBQVNELGFBQWFELFFBQVEsRUFBRUcsS0FBSztJQUNuQyxNQUFNQyxhQUFjSixTQUFTSyxTQUFTLFlBQVlGO0lBRWxELE9BQU9DO0FBQ1QifQ==