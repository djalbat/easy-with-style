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
function isClass(argument) {
    return isSubclassOf(argument, _easy.Element);
} ///
function isSubclassOf(argument, Class) {
    var subclass = false;
    if (argument.name === Class.name) {
        subclass = true;
    } else {
        argument = Object.getPrototypeOf(argument); ///
        if (argument !== null) {
            subclass = isSubclassOf(argument, Class);
        }
    }
    return subclass;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2xhc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2xhc3MoYXJndW1lbnQpIHsgcmV0dXJuIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgRWxlbWVudCk7IH0gIC8vL1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCBzdWJjbGFzcyA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7ICAgLy8vXG4gICAgc3ViY2xhc3MgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN1YmNsYXNzID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YmNsYXNzO1xufSJdLCJuYW1lcyI6WyJpc0NsYXNzIiwiYXJndW1lbnQiLCJpc1N1YmNsYXNzT2YiLCJFbGVtZW50IiwiQ2xhc3MiLCJzdWJjbGFzcyIsIm5hbWUiLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQUlHQSxTQUFPOzs7ZUFBUEEsT0FBTzs7O29CQUZDLE1BQU07QUFFdkIsU0FBU0EsT0FBTyxDQUFDQyxRQUFRLEVBQUU7SUFBRSxPQUFPQyxZQUFZLENBQUNELFFBQVEsRUFBRUUsS0FBTyxRQUFBLENBQUMsQ0FBQztDQUFFLENBQUUsR0FBRztBQUVsRixTQUFTRCxZQUFZLENBQUNELFFBQVEsRUFBRUcsS0FBSyxFQUFFO0lBQ3JDLElBQUlDLFFBQVEsR0FBRyxLQUFLLEFBQUM7SUFFckIsSUFBSUosUUFBUSxDQUFDSyxJQUFJLEtBQUtGLEtBQUssQ0FBQ0UsSUFBSSxFQUFFO1FBQ2hDRCxRQUFRLEdBQUcsSUFBSSxDQUFDO0tBQ2pCLE1BQU07UUFDTEosUUFBUSxHQUFHTSxNQUFNLENBQUNDLGNBQWMsQ0FBQ1AsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHO1FBRS9DLElBQUlBLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDckJJLFFBQVEsR0FBR0gsWUFBWSxDQUFDRCxRQUFRLEVBQUVHLEtBQUssQ0FBQyxDQUFDO1NBQzFDO0tBQ0Y7SUFFRCxPQUFPQyxRQUFRLENBQUM7Q0FDakIifQ==