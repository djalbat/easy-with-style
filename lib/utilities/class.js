'use strict';
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isClass = isClass;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2xhc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2xhc3MoYXJndW1lbnQpIHsgcmV0dXJuIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgRWxlbWVudCk7IH0gIC8vL1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGxldCBzdWJjbGFzcyA9IGZhbHNlO1xuXG4gIGlmIChhcmd1bWVudC5uYW1lID09PSBDbGFzcy5uYW1lKSB7ICAgLy8vXG4gICAgc3ViY2xhc3MgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGFyZ3VtZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGFyZ3VtZW50KTsgLy8vXG5cbiAgICBpZiAoYXJndW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN1YmNsYXNzID0gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YmNsYXNzO1xufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBSUksT0FBTyxHQUFQLE9BQU87SUFGQyxLQUFNO1NBRWQsT0FBTyxDQUFDLFFBQVE7V0FBVyxZQUFZLENBQUMsUUFBUSxFQUZ4QyxLQUFNO0NBRWlELENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztTQUV6RSxZQUFZLENBQUMsUUFBUSxFQUFFLEtBQUs7UUFDL0IsUUFBUSxHQUFHLEtBQUs7UUFFaEIsUUFBUSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSTtRQUM5QixRQUFRLEdBQUcsSUFBSTs7UUFFZixRQUFRLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUcsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO1lBRTNDLFFBQVEsS0FBSyxJQUFJO1lBQ25CLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxFQUFFLEtBQUs7OztXQUlwQyxRQUFRIn0=