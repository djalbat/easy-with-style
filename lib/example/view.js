"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _withStyle = require("with-style");
var _heading = _interopRequireDefault(require("./heading"));
var _rows = _interopRequireDefault(require("./div/rows"));
var _column = _interopRequireDefault(require("./div/column"));
var _columns = _interopRequireDefault(require("./div/columns"));
var _subHeading = _interopRequireDefault(require("./subHeading"));
var _sizeable = _interopRequireDefault(require("./div/sizeable"));
var _bnf = _interopRequireDefault(require("./textarea/bnf"));
var _content = _interopRequireDefault(require("./textarea/content"));
var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));
var _vertical = _interopRequireDefault(require("./div/splitter/vertical"));
var _lexicalEntries = _interopRequireDefault(require("./textarea/lexicalEntries"));
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
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View() {
        _classCallCheck(this, View);
        return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
    }
    _createClass(View, [
        {
            key: "getParseTree",
            value: function getParseTree() {
                var parseTree = null;
                var bnf = this.getBNF(), content = this.getContent(), lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, cssLexer = _withStyle.CSSLexer.fromEntries(entries), cssParser = _withStyle.CSSParser.fromBNF(bnf), tokens = cssLexer.tokenise(content), node = cssParser.parse(tokens);
                if (node !== null) {
                    parseTree = node.asParseTree(tokens);
                }
                return parseTree;
            }
        },
        {
            key: "keyUpHandler",
            value: function keyUpHandler(event, element) {
                try {
                    var parseTree = this.getParseTree();
                    this.setParseTree(parseTree);
                } catch (error) {
                    console.log(error);
                    this.clearParseTree();
                }
            }
        },
        {
            key: "didMount",
            value: function didMount() {
                this.keyUpHandler();
            }
        },
        {
            key: "willUnmount",
            value: function willUnmount() {
            ///
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var keyUpHandler = this.keyUpHandler.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(_heading.default, null, "Easy with Style example"),
                    /*#__PURE__*/ React.createElement(_columns.default, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_rows.default, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                        onKeyUp: keyUpHandler
                    }))), /*#__PURE__*/ React.createElement(_vertical.default, null), /*#__PURE__*/ React.createElement(_column.default, null, /*#__PURE__*/ React.createElement(_rows.default, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null))))
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var entries = _withStyle.CSSLexer.entries, bnf = _withStyle.CSSParser.bnf, content = "", lexicalEntries = entries; ///
                this.setBNF(bnf);
                this.setContent(content);
                this.setLexicalEntries(lexicalEntries);
            }
        }
    ]);
    return View;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "tagName", "div");
exports.default = View;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsIkNTU0xleGVyIiwiQ1NTUGFyc2VyIiwiSGVhZGluZyIsIlJvd3NEaXYiLCJDb2x1bW5EaXYiLCJDb2x1bW5zRGl2IiwiU3ViSGVhZGluZyIsIlNpemVhYmxlRGl2IiwiQk5GVGV4dGFyZWEiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwiVmlldyIsImdldFBhcnNlVHJlZSIsInBhcnNlVHJlZSIsImJuZiIsImdldEJORiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJjc3NMZXhlciIsImZyb21FbnRyaWVzIiwiY3NzUGFyc2VyIiwiZnJvbUJORiIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwiYXNQYXJzZVRyZWUiLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJzZXRQYXJzZVRyZWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjbGVhclBhcnNlVHJlZSIsImRpZE1vdW50Iiwid2lsbFVubW91bnQiLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIm9uS2V5VXAiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsRW50cmllcyIsInRhZ05hbWUiXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0FBRVksR0FBTSxDQUFOLEtBQU07QUFFTSxHQUFZLENBQVosVUFBWTtBQUU1QixHQUFXLENBQVgsUUFBVztBQUNYLEdBQVksQ0FBWixLQUFZO0FBQ1YsR0FBYyxDQUFkLE9BQWM7QUFDYixHQUFlLENBQWYsUUFBZTtBQUNmLEdBQWMsQ0FBZCxXQUFjO0FBQ2IsR0FBZ0IsQ0FBaEIsU0FBZ0I7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