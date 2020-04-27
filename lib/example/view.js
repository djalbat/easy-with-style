"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _withStyle = require("with-style");

var _heading = _interopRequireDefault(require("./heading"));

var _column = _interopRequireDefault(require("./div/column"));

var _columns = _interopRequireDefault(require("./div/columns"));

var _subHeading = _interopRequireDefault(require("./subHeading"));

var _sizeable = _interopRequireDefault(require("./div/sizeable"));

var _bnf = _interopRequireDefault(require("./textarea/bnf"));

var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import LexicalEntriesTextarea from "./textarea/lexicalEntries";
var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  var _super = _createSuper(View);

  function View() {
    _classCallCheck(this, View);

    return _super.apply(this, arguments);
  }

  _createClass(View, [{
    key: "getParseTree",
    value: function getParseTree() {
      var parseTree = null;

      var bnf = this.getBNF(),
          content = this.getContent(),
          lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries,
          ///
      cssLexer = _withStyle.CSSLexer.fromEntries(entries),
          cssParser = _withStyle.CSSParser.fromBNF(bnf),
          tokens = cssLexer.tokenise(content),
          node = cssParser.parse(tokens);

      if (node !== null) {
        parseTree = node.asParseTree(tokens);
      }

      return parseTree;
    }
  }, {
    key: "keyUpHandler",
    value: function keyUpHandler() {
      try {
        var parseTree = this.getParseTree();
        this.hideError();
        this.setParseTree(parseTree);
      } catch (error) {
        this.showError();
        this.clearParseTree();
      }
    }
  }, {
    key: "childElements",
    value: function childElements(properties) {
      return [/*#__PURE__*/React.createElement(_heading["default"], null, "Reaction with Style example"), /*#__PURE__*/React.createElement(_columns["default"], null, /*#__PURE__*/React.createElement(_sizeable["default"], null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "BNF"), /*#__PURE__*/React.createElement(_bnf["default"], {
        onKeyUp: this.keyUpHandler
      })), /*#__PURE__*/React.createElement(_column["default"], null, /*#__PURE__*/React.createElement(_subHeading["default"], null, "Parse tree"), /*#__PURE__*/React.createElement(_parseTree["default"], null)))];
    }
  }, {
    key: "initialise",
    value: function initialise() {
      this.assignContext();
      var entries = _withStyle.CSSLexer.entries,
          bnf = _withStyle.CSSParser.bnf,
          content = "",
          lexicalEntries = entries; ///
      // this.setBNF(bnf);
      // this.setContent(content);
      // this.setLexicalEntries(lexicalEntries);
      // this.keyUpHandler();
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var view = _easy.Element.fromProperties(View, properties);

      view.initialise();
      return view;
    }
  }]);

  return View;
}(_easy.Element);
/*
<SizeableDiv>
  <SubHeading>
    Lexical entries
  </SubHeading>
  <LexicalEntriesTextarea onKeyUp={this.keyUpHandler} />
</SizeableDiv>
<VerticalSplitter />
<ColumnDiv>
  <SubHeading>
    Parse tree
  </SubHeading>
  <ParseTreeTextarea />
  <SubHeading>
    Content
  </SubHeading>
  <ContentTextarea onKeyUp={this.keyUpHandler} />
</ColumnDiv>
*/


exports["default"] = View;

_defineProperty(View, "tagName", "div");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsInBhcnNlVHJlZSIsImJuZiIsImdldEJORiIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsImVudHJpZXMiLCJjc3NMZXhlciIsIkNTU0xleGVyIiwiZnJvbUVudHJpZXMiLCJjc3NQYXJzZXIiLCJDU1NQYXJzZXIiLCJmcm9tQk5GIiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJhc1BhcnNlVHJlZSIsImdldFBhcnNlVHJlZSIsImhpZGVFcnJvciIsInNldFBhcnNlVHJlZSIsImVycm9yIiwic2hvd0Vycm9yIiwiY2xlYXJQYXJzZVRyZWUiLCJwcm9wZXJ0aWVzIiwia2V5VXBIYW5kbGVyIiwiYXNzaWduQ29udGV4dCIsInZpZXciLCJFbGVtZW50IiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7bUNBQ0o7QUFDYixVQUFJQyxTQUFTLEdBQUcsSUFBaEI7O0FBRUEsVUFBTUMsR0FBRyxHQUFHLEtBQUtDLE1BQUwsRUFBWjtBQUFBLFVBQ01DLE9BQU8sR0FBRyxLQUFLQyxVQUFMLEVBRGhCO0FBQUEsVUFFTUMsY0FBYyxHQUFHLEtBQUtDLGlCQUFMLEVBRnZCO0FBQUEsVUFHTUMsT0FBTyxHQUFHRixjQUhoQjtBQUFBLFVBR2dDO0FBQzFCRyxNQUFBQSxRQUFRLEdBQUdDLG9CQUFTQyxXQUFULENBQXFCSCxPQUFyQixDQUpqQjtBQUFBLFVBS01JLFNBQVMsR0FBR0MscUJBQVVDLE9BQVYsQ0FBa0JaLEdBQWxCLENBTGxCO0FBQUEsVUFNTWEsTUFBTSxHQUFHTixRQUFRLENBQUNPLFFBQVQsQ0FBa0JaLE9BQWxCLENBTmY7QUFBQSxVQU9NYSxJQUFJLEdBQUdMLFNBQVMsQ0FBQ00sS0FBVixDQUFnQkgsTUFBaEIsQ0FQYjs7QUFTQSxVQUFJRSxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQmhCLFFBQUFBLFNBQVMsR0FBR2dCLElBQUksQ0FBQ0UsV0FBTCxDQUFpQkosTUFBakIsQ0FBWjtBQUNEOztBQUVELGFBQU9kLFNBQVA7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSTtBQUNGLFlBQU1BLFNBQVMsR0FBRyxLQUFLbUIsWUFBTCxFQUFsQjtBQUVBLGFBQUtDLFNBQUw7QUFFQSxhQUFLQyxZQUFMLENBQWtCckIsU0FBbEI7QUFDRCxPQU5ELENBTUUsT0FBT3NCLEtBQVAsRUFBYztBQUNkLGFBQUtDLFNBQUw7QUFFQSxhQUFLQyxjQUFMO0FBQ0Q7QUFDRjs7O2tDQUVhQyxVLEVBQVk7QUFDeEIsYUFBUSxjQUVOLG9CQUFDLG1CQUFELHNDQUZNLGVBS04sb0JBQUMsbUJBQUQscUJBQ0Usb0JBQUMsb0JBQUQscUJBQ0Usb0JBQUMsc0JBQUQsY0FERixlQUlFLG9CQUFDLGVBQUQ7QUFBYSxRQUFBLE9BQU8sRUFBRSxLQUFLQztBQUEzQixRQUpGLENBREYsZUFPRSxvQkFBQyxrQkFBRCxxQkFDRSxvQkFBQyxzQkFBRCxxQkFERixlQUlFLG9CQUFDLHFCQUFELE9BSkYsQ0FQRixDQUxNLENBQVI7QUFxQkQ7OztpQ0FFWTtBQUNYLFdBQUtDLGFBQUw7QUFFTSxVQUFFcEIsT0FBRixHQUFjRSxtQkFBZCxDQUFFRixPQUFGO0FBQUEsVUFDRU4sR0FERixHQUNVVyxvQkFEVixDQUNFWCxHQURGO0FBQUEsVUFFQUUsT0FGQSxHQUVVLEVBRlY7QUFBQSxVQUdBRSxjQUhBLEdBR2lCRSxPQUhqQixDQUhLLENBTXFCO0FBRWhDO0FBQ0E7QUFDQTtBQUVBO0FBQ0Q7OzttQ0FJcUJrQixVLEVBQVk7QUFDaEMsVUFBTUcsSUFBSSxHQUFHQyxjQUFRQyxjQUFSLENBQXVCL0IsSUFBdkIsRUFBNkIwQixVQUE3QixDQUFiOztBQUVBRyxNQUFBQSxJQUFJLENBQUNHLFVBQUw7QUFFQSxhQUFPSCxJQUFQO0FBQ0Q7Ozs7RUFqRitCQyxhO0FBb0ZsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBcEZxQjlCLEksYUF5RUYsSyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgQ1NTTGV4ZXIsIENTU1BhcnNlciB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5cbmltcG9ydCBIZWFkaW5nIGZyb20gXCIuL2hlYWRpbmdcIjtcbmltcG9ydCBDb2x1bW5EaXYgZnJvbSBcIi4vZGl2L2NvbHVtblwiO1xuaW1wb3J0IENvbHVtbnNEaXYgZnJvbSBcIi4vZGl2L2NvbHVtbnNcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbi8vIGltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29udGVudFwiO1xuLy8gaW1wb3J0IFZlcnRpY2FsU3BsaXR0ZXIgZnJvbSBcIi4vdmVydGljYWxTcGxpdHRlclwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuLy8gaW1wb3J0IExleGljYWxFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIGNzc0xleGVyID0gQ1NTTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgY3NzUGFyc2VyID0gQ1NTUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgICB0b2tlbnMgPSBjc3NMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gY3NzUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IHRoaXMuZ2V0UGFyc2VUcmVlKCk7XG5cbiAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJQYXJzZVRyZWUoKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPEhlYWRpbmc+XG4gICAgICAgIFJlYWN0aW9uIHdpdGggU3R5bGUgZXhhbXBsZVxuICAgICAgPC9IZWFkaW5nPixcbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICBCTkZcbiAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IENTU0xleGVyLFxuICAgICAgICAgIHsgYm5mIH0gPSBDU1NQYXJzZXIsXG4gICAgICAgICAgY29udGVudCA9IFwiXCIsIC8vL1xuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gZW50cmllczsgLy8vXG5cbiAgICAvLyB0aGlzLnNldEJORihibmYpO1xuICAgIC8vIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcbiAgICAvLyB0aGlzLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICAgIC8vIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB2aWV3ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhWaWV3LCBwcm9wZXJ0aWVzKTtcblxuICAgIHZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHZpZXc7XG4gIH1cbn1cblxuLypcbjxTaXplYWJsZURpdj5cbiAgPFN1YkhlYWRpbmc+XG4gICAgTGV4aWNhbCBlbnRyaWVzXG4gIDwvU3ViSGVhZGluZz5cbiAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG48L1NpemVhYmxlRGl2PlxuPFZlcnRpY2FsU3BsaXR0ZXIgLz5cbjxDb2x1bW5EaXY+XG4gIDxTdWJIZWFkaW5nPlxuICAgIFBhcnNlIHRyZWVcbiAgPC9TdWJIZWFkaW5nPlxuICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgPFN1YkhlYWRpbmc+XG4gICAgQ29udGVudFxuICA8L1N1YkhlYWRpbmc+XG4gIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG48L0NvbHVtbkRpdj5cbiovXG4iXX0=