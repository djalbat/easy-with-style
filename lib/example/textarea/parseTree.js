"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _textarea = _interopRequireDefault(require("../textarea"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var ParseTreeTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(ParseTreeTextarea, Textarea);
    function ParseTreeTextarea() {
        _classCallCheck(this, ParseTreeTextarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(ParseTreeTextarea).apply(this, arguments));
    }
    _createClass(ParseTreeTextarea, [
        {
            key: "setParseTree",
            value: function setParseTree(parseTree) {
                if (parseTree !== null) {
                    parseTree.shiftLine(); //
                    var parseTreeString = parseTree.asString(), value = parseTreeString; ///
                    this.setValue(value);
                } else {
                    this.clearParseTree();
                }
            }
        },
        {
            key: "clearParseTree",
            value: function clearParseTree() {
                var value = "";
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var setParseTree = this.setParseTree.bind(this), clearParseTree = this.clearParseTree.bind(this);
                return {
                    setParseTree: setParseTree,
                    clearParseTree: clearParseTree
                };
            }
        }
    ]);
    return ParseTreeTextarea;
}(_textarea.default);
_defineProperty(ParseTreeTextarea, "defaultProperties", {
    readOnly: true,
    className: "parse-tree",
    spellCheck: "false"
});
exports.default = ParseTreeTextarea;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL3BhcnNlVHJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJzZVRyZWVUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSkge1xuICAgIGlmIChwYXJzZVRyZWUgIT09IG51bGwpIHtcbiAgICAgIHBhcnNlVHJlZS5zaGlmdExpbmUoKTsgIC8vXG5cbiAgICAgIGNvbnN0IHBhcnNlVHJlZVN0cmluZyA9IHBhcnNlVHJlZS5hc1N0cmluZygpLFxuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZVRyZWVTdHJpbmc7ICAvLy9cblxuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclBhcnNlVHJlZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IFwiXCI7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3Qgc2V0UGFyc2VUcmVlID0gdGhpcy5zZXRQYXJzZVRyZWUuYmluZCh0aGlzKSxcbiAgICAgICAgICBjbGVhclBhcnNlVHJlZSA9IHRoaXMuY2xlYXJQYXJzZVRyZWUuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgc2V0UGFyc2VUcmVlLFxuICAgICAgY2xlYXJQYXJzZVRyZWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICByZWFkT25seTogdHJ1ZSxcbiAgICBjbGFzc05hbWU6IFwicGFyc2UtdHJlZVwiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVMsU0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUViLGlCQUFpQjtjQUFqQixpQkFBaUI7YUFBakIsaUJBQWlCOzhCQUFqQixpQkFBaUI7Z0VBQWpCLGlCQUFpQjs7aUJBQWpCLGlCQUFpQjs7WUFDcEMsR0FBWSxHQUFaLFlBQVk7NEJBQVosWUFBWSxDQUFDLFNBQVM7b0JBQ2hCLFNBQVMsS0FBSyxJQUFJO29CQUNwQixTQUFTLENBQUMsU0FBUyxHQUFLLENBQUUsQUFBRixFQUFFO3dCQUVwQixlQUFlLEdBQUcsU0FBUyxDQUFDLFFBQVEsSUFDcEMsS0FBSyxHQUFHLGVBQWUsQ0FBRyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7eUJBRTlCLFFBQVEsQ0FBQyxLQUFLOzt5QkFFZCxjQUFjOzs7OztZQUl2QixHQUFjLEdBQWQsY0FBYzs0QkFBZCxjQUFjO29CQUNOLEtBQUs7cUJBRU4sUUFBUSxDQUFDLEtBQUs7Ozs7WUFHckIsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTtvQkFDTCxZQUFZLFFBQVEsWUFBWSxDQUFDLElBQUksUUFDckMsY0FBYyxRQUFRLGNBQWMsQ0FBQyxJQUFJOztvQkFHN0MsWUFBWSxFQUFaLFlBQVk7b0JBQ1osY0FBYyxFQUFkLGNBQWM7Ozs7O1dBMUJDLGlCQUFpQjtFQUZqQixTQUFhO2dCQUViLGlCQUFpQixHQThCN0IsaUJBQWlCO0lBQ3RCLFFBQVEsRUFBRSxJQUFJO0lBQ2QsU0FBUyxHQUFFLFVBQVk7SUFDdkIsVUFBVSxHQUFFLEtBQU87O2tCQWpDRixpQkFBaUIifQ==