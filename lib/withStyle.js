"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easy = require("easy");
const _withstyle = require("with-style");
const _constants = require("./constants");
const { generateClassName } = _withstyle.classNameUtilities, { renderStyle, renderStyles, generateStyle, retrieveStyle } = _withstyle.stylesUtilities;
function withStyle(ClassOrFunction) {
    return function() {
        const args = [
            ...arguments
        ]; ///
        let { className = null } = ClassOrFunction;
        const superStyle = retrieveStyle(className);
        className = generateClassName();
        generateStyle(args, className, superStyle);
        const ClassOrFunctionElementClass = _easy.Element.isPrototypeOf(ClassOrFunction);
        if (ClassOrFunctionElementClass) {
            const ElementClass = ClassOrFunction; ///
            ClassOrFunction = class extends ElementClass {
                static fromClass(Class, properties, ...remainingArguments) {
                    properties = appendClassNameToProperties(className, properties);
                    return ElementClass.fromClass(Class, properties, ...remainingArguments);
                }
            };
        } else {
            const Function = ClassOrFunction; ///
            ClassOrFunction = (properties)=>{
                properties = appendClassNameToProperties(className, properties);
                return Function(properties);
            };
        }
        Object.assign(ClassOrFunction, {
            className
        });
        return ClassOrFunction;
    };
}
Object.assign(withStyle, {
    renderStyle,
    renderStyles
});
const _default = withStyle;
_withstyle.tagNames.forEach((tagName)=>{
    Object.defineProperty(withStyle, tagName, {
        get: ()=>function() {
                const args = [
                    ...arguments
                ], className = generateClassName();
                generateStyle(args, className);
                const Function = (properties)=>{
                    properties = appendClassNameToProperties(className, properties);
                    return _easy.React.createElement(tagName, properties);
                };
                Object.assign(Function, {
                    className
                });
                return Function;
            }
    });
});
function appendClassNameToProperties(className, properties) {
    properties = properties.hasOwnProperty(_constants.CLASS_NAME) ? properties : {
        ...properties,
        className
    }; ///
    return properties;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoU3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0LCBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IHRhZ05hbWVzLCBzdHlsZXNVdGlsaXRpZXMsIGNsYXNzTmFtZVV0aWxpdGllcyB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IENMQVNTX05BTUUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBnZW5lcmF0ZUNsYXNzTmFtZSB9ID0gY2xhc3NOYW1lVXRpbGl0aWVzLFxuICAgICAgeyByZW5kZXJTdHlsZSwgcmVuZGVyU3R5bGVzLCBnZW5lcmF0ZVN0eWxlLCByZXRyaWV2ZVN0eWxlIH0gPSBzdHlsZXNVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHdpdGhTdHlsZShDbGFzc09yRnVuY3Rpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFyZ3MgPSBbIC4uLmFyZ3VtZW50cyBdOyAgLy8vXG5cbiAgICBsZXQgeyBjbGFzc05hbWUgPSBudWxsIH0gPSBDbGFzc09yRnVuY3Rpb247XG5cbiAgICBjb25zdCBzdXBlclN0eWxlID0gcmV0cmlldmVTdHlsZShjbGFzc05hbWUpO1xuXG4gICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lLCBzdXBlclN0eWxlKTtcblxuICAgIGNvbnN0IENsYXNzT3JGdW5jdGlvbkVsZW1lbnRDbGFzcyA9IEVsZW1lbnQuaXNQcm90b3R5cGVPZihDbGFzc09yRnVuY3Rpb24pO1xuXG4gICAgaWYgKENsYXNzT3JGdW5jdGlvbkVsZW1lbnRDbGFzcykge1xuICAgICAgY29uc3QgRWxlbWVudENsYXNzID0gQ2xhc3NPckZ1bmN0aW9uOyAgLy8vXG5cbiAgICAgIENsYXNzT3JGdW5jdGlvbiA9IGNsYXNzIGV4dGVuZHMgRWxlbWVudENsYXNzIHtcbiAgICAgICAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgICAgICAgcHJvcGVydGllcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyhjbGFzc05hbWUsIHByb3BlcnRpZXMpO1xuXG4gICAgICAgICAgcmV0dXJuIEVsZW1lbnRDbGFzcy5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgRnVuY3Rpb24gPSBDbGFzc09yRnVuY3Rpb247IC8vL1xuXG4gICAgICBDbGFzc09yRnVuY3Rpb24gPSAocHJvcGVydGllcykgPT4ge1xuICAgICAgICBwcm9wZXJ0aWVzID0gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wZXJ0aWVzKGNsYXNzTmFtZSwgcHJvcGVydGllcyk7XG5cbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uKHByb3BlcnRpZXMpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBPYmplY3QuYXNzaWduKENsYXNzT3JGdW5jdGlvbiwge1xuICAgICAgY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICByZXR1cm4gQ2xhc3NPckZ1bmN0aW9uO1xuICB9O1xufVxuXG5PYmplY3QuYXNzaWduKHdpdGhTdHlsZSwge1xuICByZW5kZXJTdHlsZSxcbiAgcmVuZGVyU3R5bGVzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlO1xuXG50YWdOYW1lcy5mb3JFYWNoKCh0YWdOYW1lKSA9PiB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aXRoU3R5bGUsIHRhZ05hbWUsIHtcbiAgICBnZXQ6ICgpID0+IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc3QgYXJncyA9IFsuLi5hcmd1bWVudHNdLCAgLy8vXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBnZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG4gICAgICBnZW5lcmF0ZVN0eWxlKGFyZ3MsIGNsYXNzTmFtZSk7XG5cbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gKHByb3BlcnRpZXMpID0+IHtcbiAgICAgICAgcHJvcGVydGllcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyhjbGFzc05hbWUsIHByb3BlcnRpZXMpO1xuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KHRhZ05hbWUsIHByb3BlcnRpZXMpO1xuICAgICAgfTtcblxuICAgICAgT2JqZWN0LmFzc2lnbihGdW5jdGlvbiwge1xuICAgICAgICBjbGFzc05hbWVcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gRnVuY3Rpb247XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMoY2xhc3NOYW1lLCBwcm9wZXJ0aWVzKSB7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KENMQVNTX05BTUUpID8gcHJvcGVydGllcyA6IHsgLi4ucHJvcGVydGllcywgY2xhc3NOYW1lIH07IC8vL1xuXG4gIHJldHVybiBwcm9wZXJ0aWVzO1xufVxuIl0sIm5hbWVzIjpbImdlbmVyYXRlQ2xhc3NOYW1lIiwiY2xhc3NOYW1lVXRpbGl0aWVzIiwicmVuZGVyU3R5bGUiLCJyZW5kZXJTdHlsZXMiLCJnZW5lcmF0ZVN0eWxlIiwicmV0cmlldmVTdHlsZSIsInN0eWxlc1V0aWxpdGllcyIsIndpdGhTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbiIsImFyZ3MiLCJhcmd1bWVudHMiLCJjbGFzc05hbWUiLCJzdXBlclN0eWxlIiwiQ2xhc3NPckZ1bmN0aW9uRWxlbWVudENsYXNzIiwiRWxlbWVudCIsImlzUHJvdG90eXBlT2YiLCJFbGVtZW50Q2xhc3MiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMiLCJGdW5jdGlvbiIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWVzIiwiZm9yRWFjaCIsInRhZ05hbWUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsImhhc093blByb3BlcnR5IiwiQ0xBU1NfTkFNRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMERBOzs7ZUFBQTs7O3NCQXhEK0I7MkJBQytCOzJCQUVuQztBQUUzQixNQUFNLEVBQUVBLGlCQUFpQixFQUFFLEdBQUdDLDZCQUFrQixFQUMxQyxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUUsR0FBR0MsMEJBQWU7QUFFbkYsU0FBU0MsVUFBVUMsZUFBZTtJQUNoQyxPQUFPO1FBQ0wsTUFBTUMsT0FBTztlQUFLQztTQUFXLEVBQUcsR0FBRztRQUVuQyxJQUFJLEVBQUVDLFlBQVksSUFBSSxFQUFFLEdBQUdIO1FBRTNCLE1BQU1JLGFBQWFQLGNBQWNNO1FBRWpDQSxZQUFZWDtRQUVaSSxjQUFjSyxNQUFNRSxXQUFXQztRQUUvQixNQUFNQyw4QkFBOEJDLGFBQU8sQ0FBQ0MsYUFBYSxDQUFDUDtRQUUxRCxJQUFJSyw2QkFBNkI7WUFDL0IsTUFBTUcsZUFBZVIsaUJBQWtCLEdBQUc7WUFFMUNBLGtCQUFrQixjQUFjUTtnQkFDOUIsT0FBT0MsVUFBVUMsS0FBSyxFQUFFQyxVQUFVLEVBQUUsR0FBR0Msa0JBQWtCLEVBQUU7b0JBQ3pERCxhQUFhRSw0QkFBNEJWLFdBQVdRO29CQUVwRCxPQUFPSCxhQUFhQyxTQUFTLENBQUNDLE9BQU9DLGVBQWVDO2dCQUN0RDtZQUNGO1FBRUYsT0FBTztZQUNMLE1BQU1FLFdBQVdkLGlCQUFpQixHQUFHO1lBRXJDQSxrQkFBa0IsQ0FBQ1c7Z0JBQ2pCQSxhQUFhRSw0QkFBNEJWLFdBQVdRO2dCQUVwRCxPQUFPRyxTQUFTSDtZQUNsQjtRQUNGO1FBRUFJLE9BQU9DLE1BQU0sQ0FBQ2hCLGlCQUFpQjtZQUM3Qkc7UUFDRjtRQUVBLE9BQU9IO0lBQ1Q7QUFDRjtBQUVBZSxPQUFPQyxNQUFNLENBQUNqQixXQUFXO0lBQ3ZCTDtJQUNBQztBQUNGO01BRUEsV0FBZUk7QUFFZmtCLG1CQUFRLENBQUNDLE9BQU8sQ0FBQyxDQUFDQztJQUNoQkosT0FBT0ssY0FBYyxDQUFDckIsV0FBV29CLFNBQVM7UUFDeENFLEtBQUssSUFBTTtnQkFDVCxNQUFNcEIsT0FBTzt1QkFBSUM7aUJBQVUsRUFDckJDLFlBQVlYO2dCQUVsQkksY0FBY0ssTUFBTUU7Z0JBRXBCLE1BQU1XLFdBQVcsQ0FBQ0g7b0JBQ2hCQSxhQUFhRSw0QkFBNEJWLFdBQVdRO29CQUVwRCxPQUFPVyxXQUFLLENBQUNDLGFBQWEsQ0FBQ0osU0FBU1I7Z0JBQ3RDO2dCQUVBSSxPQUFPQyxNQUFNLENBQUNGLFVBQVU7b0JBQ3RCWDtnQkFDRjtnQkFFQSxPQUFPVztZQUNUO0lBQ0Y7QUFDRjtBQUVBLFNBQVNELDRCQUE0QlYsU0FBUyxFQUFFUSxVQUFVO0lBQ3hEQSxhQUFhQSxXQUFXYSxjQUFjLENBQUNDLHFCQUFVLElBQUlkLGFBQWE7UUFBRSxHQUFHQSxVQUFVO1FBQUVSO0lBQVUsR0FBRyxHQUFHO0lBRW5HLE9BQU9RO0FBQ1QifQ==