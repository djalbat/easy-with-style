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
const _class = require("./utilities/class");
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
        const ClassOrFunctionClass = (0, _class.isClass)(ClassOrFunction);
        if (ClassOrFunctionClass) {
            const Class = ClassOrFunction; ///
            ClassOrFunction = class extends Class {
                static fromClass(_Class, properties, ...remainingArguments) {
                    properties = appendClassNameToProperties(className, properties);
                    return Class.fromClass(_Class, properties, ...remainingArguments);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy93aXRoU3R5bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0IH0gZnJvbSBcImVhc3lcIjtcbmltcG9ydCB7IHRhZ05hbWVzLCBzdHlsZXNVdGlsaXRpZXMsIGNsYXNzTmFtZVV0aWxpdGllcyB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5cbmltcG9ydCB7IGlzQ2xhc3MgfSBmcm9tIFwiLi91dGlsaXRpZXMvY2xhc3NcIjtcbmltcG9ydCB7IENMQVNTX05BTUUgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBnZW5lcmF0ZUNsYXNzTmFtZSB9ID0gY2xhc3NOYW1lVXRpbGl0aWVzLFxuICAgICAgeyByZW5kZXJTdHlsZSwgcmVuZGVyU3R5bGVzLCBnZW5lcmF0ZVN0eWxlLCByZXRyaWV2ZVN0eWxlIH0gPSBzdHlsZXNVdGlsaXRpZXM7XG5cbmZ1bmN0aW9uIHdpdGhTdHlsZShDbGFzc09yRnVuY3Rpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGFyZ3MgPSBbIC4uLmFyZ3VtZW50cyBdOyAgLy8vXG5cbiAgICBsZXQgeyBjbGFzc05hbWUgPSBudWxsIH0gPSBDbGFzc09yRnVuY3Rpb247XG5cbiAgICBjb25zdCBzdXBlclN0eWxlID0gcmV0cmlldmVTdHlsZShjbGFzc05hbWUpO1xuXG4gICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgIGdlbmVyYXRlU3R5bGUoYXJncywgY2xhc3NOYW1lLCBzdXBlclN0eWxlKTtcblxuICAgIGNvbnN0IENsYXNzT3JGdW5jdGlvbkNsYXNzID0gaXNDbGFzcyhDbGFzc09yRnVuY3Rpb24pO1xuXG4gICAgaWYgKENsYXNzT3JGdW5jdGlvbkNsYXNzKSB7XG4gICAgICBjb25zdCBDbGFzcyA9IENsYXNzT3JGdW5jdGlvbjsgIC8vL1xuXG4gICAgICBDbGFzc09yRnVuY3Rpb24gPSBjbGFzcyBleHRlbmRzIENsYXNzIHtcbiAgICAgICAgc3RhdGljIGZyb21DbGFzcyhfQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgICAgICAgIHByb3BlcnRpZXMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMoY2xhc3NOYW1lLCBwcm9wZXJ0aWVzKTtcblxuICAgICAgICAgIHJldHVybiBDbGFzcy5mcm9tQ2xhc3MoX0NsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IEZ1bmN0aW9uID0gQ2xhc3NPckZ1bmN0aW9uOyAvLy9cblxuICAgICAgQ2xhc3NPckZ1bmN0aW9uID0gKHByb3BlcnRpZXMpID0+IHtcbiAgICAgICAgcHJvcGVydGllcyA9IGFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyhjbGFzc05hbWUsIHByb3BlcnRpZXMpO1xuXG4gICAgICAgIHJldHVybiBGdW5jdGlvbihwcm9wZXJ0aWVzKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgT2JqZWN0LmFzc2lnbihDbGFzc09yRnVuY3Rpb24sIHtcbiAgICAgIGNsYXNzTmFtZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIENsYXNzT3JGdW5jdGlvbjtcbiAgfTtcbn1cblxuT2JqZWN0LmFzc2lnbih3aXRoU3R5bGUsIHtcbiAgcmVuZGVyU3R5bGUsXG4gIHJlbmRlclN0eWxlc1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZTtcblxudGFnTmFtZXMuZm9yRWFjaCgodGFnTmFtZSkgPT4ge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkod2l0aFN0eWxlLCB0YWdOYW1lLCB7XG4gICAgZ2V0OiAoKSA9PiBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IGFyZ3MgPSBbLi4uYXJndW1lbnRzXSwgIC8vL1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gZ2VuZXJhdGVDbGFzc05hbWUoKTtcblxuICAgICAgZ2VuZXJhdGVTdHlsZShhcmdzLCBjbGFzc05hbWUpO1xuXG4gICAgICBjb25zdCBGdW5jdGlvbiA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gICAgICAgIHByb3BlcnRpZXMgPSBhcHBlbmRDbGFzc05hbWVUb1Byb3BlcnRpZXMoY2xhc3NOYW1lLCBwcm9wZXJ0aWVzKTtcblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0YWdOYW1lLCBwcm9wZXJ0aWVzKTtcbiAgICAgIH07XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oRnVuY3Rpb24sIHtcbiAgICAgICAgY2xhc3NOYW1lXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIEZ1bmN0aW9uO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gYXBwZW5kQ2xhc3NOYW1lVG9Qcm9wZXJ0aWVzKGNsYXNzTmFtZSwgcHJvcGVydGllcykge1xuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShDTEFTU19OQU1FKSA/IHByb3BlcnRpZXMgOiB7IC4uLnByb3BlcnRpZXMsIGNsYXNzTmFtZSB9OyAvLy9cblxuICByZXR1cm4gcHJvcGVydGllcztcbn1cbiJdLCJuYW1lcyI6WyJnZW5lcmF0ZUNsYXNzTmFtZSIsImNsYXNzTmFtZVV0aWxpdGllcyIsInJlbmRlclN0eWxlIiwicmVuZGVyU3R5bGVzIiwiZ2VuZXJhdGVTdHlsZSIsInJldHJpZXZlU3R5bGUiLCJzdHlsZXNVdGlsaXRpZXMiLCJ3aXRoU3R5bGUiLCJDbGFzc09yRnVuY3Rpb24iLCJhcmdzIiwiYXJndW1lbnRzIiwiY2xhc3NOYW1lIiwic3VwZXJTdHlsZSIsIkNsYXNzT3JGdW5jdGlvbkNsYXNzIiwiaXNDbGFzcyIsIkNsYXNzIiwiZnJvbUNsYXNzIiwiX0NsYXNzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImFwcGVuZENsYXNzTmFtZVRvUHJvcGVydGllcyIsIkZ1bmN0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZXMiLCJmb3JFYWNoIiwidGFnTmFtZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiaGFzT3duUHJvcGVydHkiLCJDTEFTU19OQU1FIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEyREE7OztlQUFBOzs7c0JBekRzQjsyQkFDd0M7dUJBRXRDOzJCQUNHO0FBRTNCLE1BQU0sRUFBRUEsaUJBQWlCLEVBQUUsR0FBR0MsNkJBQWtCLEVBQzFDLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsRUFBRSxHQUFHQywwQkFBZTtBQUVuRixTQUFTQyxVQUFVQyxlQUFlO0lBQ2hDLE9BQU87UUFDTCxNQUFNQyxPQUFPO2VBQUtDO1NBQVcsRUFBRyxHQUFHO1FBRW5DLElBQUksRUFBRUMsWUFBWSxJQUFJLEVBQUUsR0FBR0g7UUFFM0IsTUFBTUksYUFBYVAsY0FBY007UUFFakNBLFlBQVlYO1FBRVpJLGNBQWNLLE1BQU1FLFdBQVdDO1FBRS9CLE1BQU1DLHVCQUF1QkMsSUFBQUEsY0FBTyxFQUFDTjtRQUVyQyxJQUFJSyxzQkFBc0I7WUFDeEIsTUFBTUUsUUFBUVAsaUJBQWtCLEdBQUc7WUFFbkNBLGtCQUFrQixjQUFjTztnQkFDOUIsT0FBT0MsVUFBVUMsTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR0Msa0JBQWtCLEVBQUU7b0JBQzFERCxhQUFhRSw0QkFBNEJULFdBQVdPO29CQUVwRCxPQUFPSCxNQUFNQyxTQUFTLENBQUNDLFFBQVFDLGVBQWVDO2dCQUNoRDtZQUNGO1FBRUYsT0FBTztZQUNMLE1BQU1FLFdBQVdiLGlCQUFpQixHQUFHO1lBRXJDQSxrQkFBa0IsQ0FBQ1U7Z0JBQ2pCQSxhQUFhRSw0QkFBNEJULFdBQVdPO2dCQUVwRCxPQUFPRyxTQUFTSDtZQUNsQjtRQUNGO1FBRUFJLE9BQU9DLE1BQU0sQ0FBQ2YsaUJBQWlCO1lBQzdCRztRQUNGO1FBRUEsT0FBT0g7SUFDVDtBQUNGO0FBRUFjLE9BQU9DLE1BQU0sQ0FBQ2hCLFdBQVc7SUFDdkJMO0lBQ0FDO0FBQ0Y7TUFFQSxXQUFlSTtBQUVmaUIsbUJBQVEsQ0FBQ0MsT0FBTyxDQUFDLENBQUNDO0lBQ2hCSixPQUFPSyxjQUFjLENBQUNwQixXQUFXbUIsU0FBUztRQUN4Q0UsS0FBSyxJQUFNO2dCQUNULE1BQU1uQixPQUFPO3VCQUFJQztpQkFBVSxFQUNyQkMsWUFBWVg7Z0JBRWxCSSxjQUFjSyxNQUFNRTtnQkFFcEIsTUFBTVUsV0FBVyxDQUFDSDtvQkFDaEJBLGFBQWFFLDRCQUE0QlQsV0FBV087b0JBRXBELE9BQU9XLFdBQUssQ0FBQ0MsYUFBYSxDQUFDSixTQUFTUjtnQkFDdEM7Z0JBRUFJLE9BQU9DLE1BQU0sQ0FBQ0YsVUFBVTtvQkFDdEJWO2dCQUNGO2dCQUVBLE9BQU9VO1lBQ1Q7SUFDRjtBQUNGO0FBRUEsU0FBU0QsNEJBQTRCVCxTQUFTLEVBQUVPLFVBQVU7SUFDeERBLGFBQWFBLFdBQVdhLGNBQWMsQ0FBQ0MscUJBQVUsSUFBSWQsYUFBYTtRQUFFLEdBQUdBLFVBQVU7UUFBRVA7SUFBVSxHQUFHLEdBQUc7SUFFbkcsT0FBT087QUFDVCJ9