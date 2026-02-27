"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LexicalEntriesTextarea;
    }
});
const _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class LexicalEntriesTextarea extends _textarea.default {
    getLexicalEntries() {
        const value = this.getValue(), lexicalEntries = JSON.parse(value);
        return lexicalEntries;
    }
    setLexicalEntries(lexicalEntries) {
        const value = JSON.stringify(lexicalEntries, null, _constants.DOUBLE_SPACE);
        this.setValue(value);
    }
    parentContext() {
        const getLexicalEntries = this.getLexicalEntries.bind(this), setLexicalEntries = this.setLexicalEntries.bind(this);
        return {
            getLexicalEntries,
            setLexicalEntries
        };
    }
    static defaultProperties = {
        className: "lexical-entries",
        spellCheck: "false"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2xleGljYWxFbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmltcG9ydCB7IERPVUJMRV9TUEFDRSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0TGV4aWNhbEVudHJpZXMoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBKU09OLnBhcnNlKHZhbHVlKTtcblxuICAgIHJldHVybiBsZXhpY2FsRW50cmllcztcbiAgfVxuXG4gIHNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShsZXhpY2FsRW50cmllcywgbnVsbCwgRE9VQkxFX1NQQUNFKTtcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBnZXRMZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRMZXhpY2FsRW50cmllcyA9IHRoaXMuc2V0TGV4aWNhbEVudHJpZXMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0TGV4aWNhbEVudHJpZXMsXG4gICAgICBzZXRMZXhpY2FsRW50cmllc1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJsZXhpY2FsLWVudHJpZXNcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwiVGV4dGFyZWEiLCJnZXRMZXhpY2FsRW50cmllcyIsInZhbHVlIiwiZ2V0VmFsdWUiLCJsZXhpY2FsRW50cmllcyIsIkpTT04iLCJwYXJzZSIsInNldExleGljYWxFbnRyaWVzIiwic3RyaW5naWZ5IiwiRE9VQkxFX1NQQUNFIiwic2V0VmFsdWUiLCJwYXJlbnRDb250ZXh0IiwiYmluZCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7OztpRUFKQTsyQkFFUTs7Ozs7O0FBRWQsTUFBTUEsK0JBQStCQyxpQkFBUTtJQUMxREMsb0JBQW9CO1FBQ2xCLE1BQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxpQkFBaUJDLEtBQUtDLEtBQUssQ0FBQ0o7UUFFbEMsT0FBT0U7SUFDVDtJQUVBRyxrQkFBa0JILGNBQWMsRUFBRTtRQUNoQyxNQUFNRixRQUFRRyxLQUFLRyxTQUFTLENBQUNKLGdCQUFnQixNQUFNSyx1QkFBWTtRQUUvRCxJQUFJLENBQUNDLFFBQVEsQ0FBQ1I7SUFDaEI7SUFFQVMsZ0JBQWdCO1FBQ2QsTUFBTVYsb0JBQW9CLElBQUksQ0FBQ0EsaUJBQWlCLENBQUNXLElBQUksQ0FBQyxJQUFJLEdBQ3BETCxvQkFBb0IsSUFBSSxDQUFDQSxpQkFBaUIsQ0FBQ0ssSUFBSSxDQUFDLElBQUk7UUFFMUQsT0FBUTtZQUNOWDtZQUNBTTtRQUNGO0lBQ0Y7SUFFQSxPQUFPTSxvQkFBb0I7UUFDekJDLFdBQVc7UUFDWEMsWUFBWTtJQUNkLEVBQUU7QUFDSiJ9