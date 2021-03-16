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
var BNFTextarea = function(Textarea) {
    _inherits(BNFTextarea, _textarea.default);
    function BNFTextarea() {
        _classCallCheck(this, BNFTextarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(BNFTextarea).apply(this, arguments));
    }
    _createClass(BNFTextarea, [
        {
            key: "getBNF",
            value: function getBNF() {
                var value = this.getValue(), bnf = value; ///
                return bnf;
            }
        },
        {
            key: "setBNF",
            value: function setBNF(bnf) {
                var value = bnf; ///
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getBNF = this.getBNF.bind(this), setBNF = this.setBNF.bind(this);
                return {
                    getBNF: getBNF,
                    setBNF: setBNF
                };
            }
        }
    ]);
    return BNFTextarea;
}(_textarea.default);
_defineProperty(BNFTextarea, "defaultProperties", {
    className: "bnf",
    spellCheck: "false"
});
var _default = BNFTextarea;
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2JuZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5jbGFzcyBCTkZUZXh0YXJlYSBleHRlbmRzIFRleHRhcmVhIHtcbiAgZ2V0Qk5GKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGJuZiA9IHZhbHVlOyAgLy8vXG5cbiAgICByZXR1cm4gYm5mO1xuICB9XG5cbiAgc2V0Qk5GKGJuZikge1xuICAgIGNvbnN0IHZhbHVlID0gYm5mOyAgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0Qk5GID0gdGhpcy5nZXRCTkYuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRCTkYgPSB0aGlzLnNldEJORi5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRCTkYsXG4gICAgICBzZXRCTkZcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiYm5mXCIsXG4gICAgc3BlbGxDaGVjazogXCJmYWxzZVwiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJORlRleHRhcmVhO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsU0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVBLFdBQUEsWUFBQSxRQUFBO2NBQUEsV0FBQSxFQUZBLFNBQUE7YUFFQSxXQUFBOzhCQUFBLFdBQUE7Z0VBQUEsV0FBQTs7aUJBQUEsV0FBQTs7QUFDQSxlQUFBLEdBQUEsTUFBQTs0QkFBQSxNQUFBO29CQUNBLEtBQUEsUUFBQSxRQUFBLElBQ0EsR0FBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTt1QkFFQSxHQUFBOzs7O0FBR0EsZUFBQSxHQUFBLE1BQUE7NEJBQUEsTUFBQSxDQUFBLEdBQUE7b0JBQ0EsS0FBQSxHQUFBLEdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtxQkFFQSxRQUFBLENBQUEsS0FBQTs7OztBQUdBLGVBQUEsR0FBQSxhQUFBOzRCQUFBLGFBQUE7b0JBQ0EsTUFBQSxRQUFBLE1BQUEsQ0FBQSxJQUFBLFFBQ0EsTUFBQSxRQUFBLE1BQUEsQ0FBQSxJQUFBOztBQUdBLDBCQUFBLEVBQUEsTUFBQTtBQUNBLDBCQUFBLEVBQUEsTUFBQTs7Ozs7V0FwQkEsV0FBQTtFQUZBLFNBQUE7Z0JBRUEsV0FBQSxHQXdCQSxpQkFBQTtBQUNBLGFBQUEsR0FBQSxHQUFBO0FBQ0EsY0FBQSxHQUFBLEtBQUE7O2VBSUEsV0FBQSJ9