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
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class BNFTextarea extends _textarea.default {
    getBNF() {
        const value = this.getValue(), bnf = value; ///
        return bnf;
    }
    setBNF(bnf) {
        const value = bnf; ///
        this.setValue(value);
    }
    parentContext() {
        const getBNF = this.getBNF.bind(this), setBNF = this.setBNF.bind(this);
        return {
            getBNF,
            setBNF
        };
    }
    static defaultProperties = {
        className: "bnf",
        spellCheck: "false"
    };
}
const _default = BNFTextarea;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2JuZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5jbGFzcyBCTkZUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0Qk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGJuZiA9IHZhbHVlOyAgLy8vXG5cbiAgICByZXR1cm4gYm5mO1xuICB9XG5cbiAgc2V0Qk5GKGJuZikge1xuICAgIGNvbnN0IHZhbHVlID0gYm5mOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Qk5GID0gdGhpcy5nZXRCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRCTkYgPSB0aGlzLnNldEJORi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRCTkYsXG4gICAgICBzZXRCTkZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYm5mXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJORlRleHRhcmVhO1xuIl0sIm5hbWVzIjpbIkJORlRleHRhcmVhIiwiVGV4dGFyZWEiLCJnZXRCTkYiLCJ2YWx1ZSIsImdldFZhbHVlIiwiYm5mIiwic2V0Qk5GIiwic2V0VmFsdWUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0NBOzs7ZUFBQTs7O2lFQWhDcUI7Ozs7OztBQUVyQixNQUFNQSxvQkFBb0JDLGlCQUFRO0lBQ2hDQyxTQUFTO1FBQ1AsTUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLE1BQU1GLE9BQVEsR0FBRztRQUV2QixPQUFPRTtJQUNUO0lBRUFDLE9BQU9ELEdBQUcsRUFBRTtRQUNWLE1BQU1GLFFBQVFFLEtBQU0sR0FBRztRQUV2QixJQUFJLENBQUNFLFFBQVEsQ0FBQ0o7SUFDaEI7SUFFQUssZ0JBQWdCO1FBQ2QsTUFBTU4sU0FBUyxJQUFJLENBQUNBLE1BQU0sQ0FBQ08sSUFBSSxDQUFDLElBQUksR0FDOUJILFNBQVMsSUFBSSxDQUFDQSxNQUFNLENBQUNHLElBQUksQ0FBQyxJQUFJO1FBRXBDLE9BQVE7WUFDTlA7WUFDQUk7UUFDRjtJQUNGO0lBRUEsT0FBT0ksb0JBQW9CO1FBQ3pCQyxXQUFXO1FBQ1hDLFlBQVk7SUFDZCxFQUFFO0FBQ0o7TUFFQSxXQUFlWiJ9