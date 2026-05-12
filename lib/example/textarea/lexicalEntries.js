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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class LexicalEntriesTextarea extends _textarea.default {
    getLexicalEntries() {
        const value = this.getValue(), jsonString = value, json = JSON.parse(jsonString), lexicalEntries = json; ///
        return lexicalEntries;
    }
    setLexicalEntries(lexicalEntries) {
        const json = lexicalEntries, jsonString = JSON.stringify(json, null, 2), value = jsonString; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2xleGljYWxFbnRyaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dGFyZWEgZnJvbSBcIi4uL3RleHRhcmVhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExleGljYWxFbnRyaWVzVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldExleGljYWxFbnRyaWVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGpzb25TdHJpbmcgPSB2YWx1ZSwgLy8vXG4gICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyksXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBqc29uOyAgLy8vXG5cbiAgICByZXR1cm4gbGV4aWNhbEVudHJpZXM7XG4gIH1cblxuICBzZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcykge1xuICAgIGNvbnN0IGpzb24gPSBsZXhpY2FsRW50cmllcywgIC8vL1xuICAgICAgICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCAyKSxcbiAgICAgICAgICB2YWx1ZSA9IGpzb25TdHJpbmc7IC8vL1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldExleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldExleGljYWxFbnRyaWVzID0gdGhpcy5zZXRMZXhpY2FsRW50cmllcy5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRMZXhpY2FsRW50cmllcyxcbiAgICAgIHNldExleGljYWxFbnRyaWVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImxleGljYWwtZW50cmllc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJUZXh0YXJlYSIsImdldExleGljYWxFbnRyaWVzIiwidmFsdWUiLCJnZXRWYWx1ZSIsImpzb25TdHJpbmciLCJqc29uIiwiSlNPTiIsInBhcnNlIiwibGV4aWNhbEVudHJpZXMiLCJzZXRMZXhpY2FsRW50cmllcyIsInN0cmluZ2lmeSIsInNldFZhbHVlIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7aUVBRkE7Ozs7OztBQUVOLE1BQU1BLCtCQUErQkMsaUJBQVE7SUFDMURDLG9CQUFvQjtRQUNsQixNQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsYUFBYUYsT0FDYkcsT0FBT0MsS0FBS0MsS0FBSyxDQUFDSCxhQUNsQkksaUJBQWlCSCxNQUFPLEdBQUc7UUFFakMsT0FBT0c7SUFDVDtJQUVBQyxrQkFBa0JELGNBQWMsRUFBRTtRQUNoQyxNQUFNSCxPQUFPRyxnQkFDUEosYUFBYUUsS0FBS0ksU0FBUyxDQUFDTCxNQUFNLE1BQU0sSUFDeENILFFBQVFFLFlBQVksR0FBRztRQUU3QixJQUFJLENBQUNPLFFBQVEsQ0FBQ1Q7SUFDaEI7SUFFQVUsZ0JBQWdCO1FBQ2QsTUFBTVgsb0JBQW9CLElBQUksQ0FBQ0EsaUJBQWlCLENBQUNZLElBQUksQ0FBQyxJQUFJLEdBQ3BESixvQkFBb0IsSUFBSSxDQUFDQSxpQkFBaUIsQ0FBQ0ksSUFBSSxDQUFDLElBQUk7UUFFMUQsT0FBUTtZQUNOWjtZQUNBUTtRQUNGO0lBQ0Y7SUFFQSxPQUFPSyxvQkFBb0I7UUFDekJDLFdBQVc7UUFDWEMsWUFBWTtJQUNkLEVBQUU7QUFDSiJ9