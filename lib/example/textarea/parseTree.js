"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ParseTreeTextarea;
    }
});
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ParseTreeTextarea extends _textarea.default {
    setParseTree(parseTree) {
        if (parseTree !== null) {
            parseTree.shiftLine(); //
            const parseTreeString = parseTree.asString(), value = parseTreeString; ///
            this.setValue(value);
        } else {
            this.clearParseTree();
        }
    }
    clearParseTree() {
        const value = "";
        this.setValue(value);
    }
    parentContext() {
        const setParseTree = this.setParseTree.bind(this), clearParseTree = this.clearParseTree.bind(this);
        return {
            setParseTree,
            clearParseTree
        };
    }
    static defaultProperties = {
        readOnly: true,
        className: "parse-tree",
        spellCheck: "false"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL3BhcnNlVHJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJzZVRyZWVUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSkge1xuICAgIGlmIChwYXJzZVRyZWUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICAgIGNvbnN0IHBhcnNlVHJlZVN0cmluZyA9IHBhcnNlVHJlZS5hc1N0cmluZygpLFxuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclBhcnNlVHJlZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IFwiXCI7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0UGFyc2VUcmVlID0gdGhpcy5zZXRQYXJzZVRyZWUuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhclBhcnNlVHJlZSA9IHRoaXMuY2xlYXJQYXJzZVRyZWUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0UGFyc2VUcmVlLFxuICAgICAgY2xlYXJQYXJzZVRyZWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICByZWFkT25seTogdHJ1ZSxcbiAgICBjbGFzc05hbWU6IFwicGFyc2UtdHJlZVwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlBhcnNlVHJlZVRleHRhcmVhIiwiVGV4dGFyZWEiLCJzZXRQYXJzZVRyZWUiLCJwYXJzZVRyZWUiLCJzaGlmdExpbmUiLCJwYXJzZVRyZWVTdHJpbmciLCJhc1N0cmluZyIsInZhbHVlIiwic2V0VmFsdWUiLCJjbGVhclBhcnNlVHJlZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJyZWFkT25seSIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7aUVBRkE7Ozs7OztBQUVOLE1BQU1BLDBCQUEwQkMsaUJBQVE7SUFDckRDLGFBQWFDLFNBQVMsRUFBRTtRQUN0QixJQUFJQSxjQUFjLE1BQU07WUFDdEJBLFVBQVVDLFNBQVMsSUFBSyxFQUFFO1lBRTFCLE1BQU1DLGtCQUFrQkYsVUFBVUcsUUFBUSxJQUNwQ0MsUUFBUUYsaUJBQWtCLEdBQUc7WUFFbkMsSUFBSSxDQUFDRyxRQUFRLENBQUNEO1FBQ2hCLE9BQU87WUFDTCxJQUFJLENBQUNFLGNBQWM7UUFDckI7SUFDRjtJQUVBQSxpQkFBaUI7UUFDZixNQUFNRixRQUFRO1FBRWQsSUFBSSxDQUFDQyxRQUFRLENBQUNEO0lBQ2hCO0lBRUFHLGdCQUFnQjtRQUNkLE1BQU1SLGVBQWUsSUFBSSxDQUFDQSxZQUFZLENBQUNTLElBQUksQ0FBQyxJQUFJLEdBQzFDRixpQkFBaUIsSUFBSSxDQUFDQSxjQUFjLENBQUNFLElBQUksQ0FBQyxJQUFJO1FBRXBELE9BQVE7WUFDTlQ7WUFDQU87UUFDRjtJQUNGO0lBRUEsT0FBT0csb0JBQW9CO1FBQ3pCQyxVQUFVO1FBQ1ZDLFdBQVc7UUFDWEMsWUFBWTtJQUNkLEVBQUU7QUFDSiJ9