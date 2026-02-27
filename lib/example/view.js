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
const _index = /*#__PURE__*/ _interop_require_default(require("../index"));
const _easy = require("easy");
const _withstyle = require("with-style");
const _rows = /*#__PURE__*/ _interop_require_default(require("./div/rows"));
const _column = /*#__PURE__*/ _interop_require_default(require("./div/column"));
const _columns = /*#__PURE__*/ _interop_require_default(require("./div/columns"));
const _subHeading = /*#__PURE__*/ _interop_require_default(require("./subHeading"));
const _sizeable = /*#__PURE__*/ _interop_require_default(require("./div/sizeable"));
const _bnf = /*#__PURE__*/ _interop_require_default(require("./textarea/bnf"));
const _content = /*#__PURE__*/ _interop_require_default(require("./textarea/content"));
const _parseTree = /*#__PURE__*/ _interop_require_default(require("./textarea/parseTree"));
const _vertical = /*#__PURE__*/ _interop_require_default(require("./div/splitter/vertical"));
const _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./textarea/lexicalEntries"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class View extends _easy.Element {
    getParseTree() {
        let parseTree = null;
        const bnf = this.getBNF(), content = this.getContent(), lexicalEntries = this.getLexicalEntries(), entries = lexicalEntries, cssLexer = _withstyle.CSSLexer.fromEntries(entries), cssParser = _withstyle.CSSParser.fromBNF(bnf), tokens = cssLexer.tokenise(content), node = cssParser.parse(tokens);
        if (node !== null) {
            parseTree = node.asParseTree(tokens);
        }
        return parseTree;
    }
    keyUpHandler(event, element) {
        try {
            const parseTree = this.getParseTree();
            this.setParseTree(parseTree);
        } catch (error) {
            console.log(error);
            this.clearParseTree();
        }
    }
    didMount() {
        this.keyUpHandler();
    }
    willUnmount() {
    ///
    }
    childElements() {
        const keyUpHandler = this.keyUpHandler.bind(this);
        return [
            /*#__PURE__*/ React.createElement(_columns.default, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_rows.default, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
                onKeyUp: keyUpHandler
            }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                onKeyUp: keyUpHandler
            }))), /*#__PURE__*/ React.createElement(_vertical.default, null), /*#__PURE__*/ React.createElement(_column.default, null, /*#__PURE__*/ React.createElement(_rows.default, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                onKeyUp: keyUpHandler
            }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null))))
        ];
    }
    initialise() {
        this.assignContext();
        const { entries } = _withstyle.CSSLexer, { bnf } = _withstyle.CSSParser, content = "", lexicalEntries = entries; ///
        this.setBNF(bnf);
        this.setContent(content);
        this.setLexicalEntries(lexicalEntries);
    }
    static tagName = "div";
}
const _default = (0, _index.default)(View)`

  padding: 1rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcIi4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgQ1NTTGV4ZXIsIENTU1BhcnNlciB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5cbmltcG9ydCBSb3dzRGl2IGZyb20gXCIuL2Rpdi9yb3dzXCI7XG5pbXBvcnQgQ29sdW1uRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5cIjtcbmltcG9ydCBDb2x1bW5zRGl2IGZyb20gXCIuL2Rpdi9jb2x1bW5zXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBWZXJ0aWNhbFNwbGl0dGVyRGl2IGZyb20gXCIuL2Rpdi9zcGxpdHRlci92ZXJ0aWNhbFwiO1xuaW1wb3J0IExleGljYWxFbnRyaWVzVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIjtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRQYXJzZVRyZWUoKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKSxcbiAgICAgICAgICBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIGNzc0xleGVyID0gQ1NTTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgY3NzUGFyc2VyID0gQ1NTUGFyc2VyLmZyb21CTkYoYm5mKSxcbiAgICAgICAgICB0b2tlbnMgPSBjc3NMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gY3NzUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYS8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgZW50cmllcyB9ID0gQ1NTTGV4ZXIsXG4gICAgICAgICAgeyBibmYgfSA9IENTU1BhcnNlcixcbiAgICAgICAgICBjb250ZW50ID0gXCJcIiwgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBlbnRyaWVzOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlZpZXciLCJFbGVtZW50IiwiZ2V0UGFyc2VUcmVlIiwicGFyc2VUcmVlIiwiYm5mIiwiZ2V0Qk5GIiwiY29udGVudCIsImdldENvbnRlbnQiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwiZW50cmllcyIsImNzc0xleGVyIiwiQ1NTTGV4ZXIiLCJmcm9tRW50cmllcyIsImNzc1BhcnNlciIsIkNTU1BhcnNlciIsImZyb21CTkYiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImFzUGFyc2VUcmVlIiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50Iiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJQYXJzZVRyZWUiLCJkaWRNb3VudCIsIndpbGxVbm1vdW50IiwiY2hpbGRFbGVtZW50cyIsImJpbmQiLCJDb2x1bW5zRGl2IiwiU2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiU3ViSGVhZGluZyIsIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJvbktleVVwIiwiQk5GVGV4dGFyZWEiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsRW50cmllcyIsInRhZ05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStHQTs7O2VBQUE7Ozs4REE3R3NCO3NCQUVFOzJCQUVZOzZEQUVoQjsrREFDRTtnRUFDQzttRUFDQTtpRUFDQzs0REFDQTtnRUFDSTtrRUFDRTtpRUFDRTt1RUFDRzs7Ozs7O0FBRW5DLE1BQU1BLGFBQWFDLGFBQU87SUFDeEJDLGVBQWU7UUFDYixJQUFJQyxZQUFZO1FBRWhCLE1BQU1DLE1BQU0sSUFBSSxDQUFDQyxNQUFNLElBQ2pCQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsaUJBQWlCLElBQUksQ0FBQ0MsaUJBQWlCLElBQ3ZDQyxVQUFVRixnQkFDVkcsV0FBV0MsbUJBQVEsQ0FBQ0MsV0FBVyxDQUFDSCxVQUNoQ0ksWUFBWUMsb0JBQVMsQ0FBQ0MsT0FBTyxDQUFDWixNQUM5QmEsU0FBU04sU0FBU08sUUFBUSxDQUFDWixVQUMzQmEsT0FBT0wsVUFBVU0sS0FBSyxDQUFDSDtRQUU3QixJQUFJRSxTQUFTLE1BQU07WUFDakJoQixZQUFZZ0IsS0FBS0UsV0FBVyxDQUFDSjtRQUMvQjtRQUVBLE9BQU9kO0lBQ1Q7SUFFQW1CLGFBQWFDLEtBQUssRUFBRUMsT0FBTyxFQUFFO1FBQzNCLElBQUk7WUFDRixNQUFNckIsWUFBWSxJQUFJLENBQUNELFlBQVk7WUFFbkMsSUFBSSxDQUFDdUIsWUFBWSxDQUFDdEI7UUFDcEIsRUFBRSxPQUFPdUIsT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUNGO1lBRVosSUFBSSxDQUFDRyxjQUFjO1FBQ3JCO0lBQ0Y7SUFFQUMsV0FBVztRQUNULElBQUksQ0FBQ1IsWUFBWTtJQUNuQjtJQUVBUyxjQUFjO0lBQ1osR0FBRztJQUNMO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1WLGVBQWUsSUFBSSxDQUFDQSxZQUFZLENBQUNXLElBQUksQ0FBQyxJQUFJO1FBRWhELE9BQVE7MEJBRU4sb0JBQUNDLGdCQUFVLHNCQUNULG9CQUFDQyxpQkFBVyxzQkFDVixvQkFBQ0MsYUFBTyxzQkFDTixvQkFBQ0MsbUJBQVUsUUFBQyxrQ0FHWixvQkFBQ0MsdUJBQXNCO2dCQUFDQyxTQUFTakI7OEJBQ2pDLG9CQUFDZSxtQkFBVSxRQUFDLHNCQUdaLG9CQUFDRyxZQUFXO2dCQUFDRCxTQUFTakI7Z0NBRzFCLG9CQUFDbUIsaUJBQW1CLHVCQUNwQixvQkFBQ0MsZUFBUyxzQkFDUixvQkFBQ04sYUFBTyxzQkFDTixvQkFBQ0MsbUJBQVUsUUFBQywwQkFHWixvQkFBQ00sZ0JBQWU7Z0JBQUNKLFNBQVNqQjs4QkFDMUIsb0JBQUNlLG1CQUFVLFFBQUMsNkJBR1osb0JBQUNPLGtCQUFpQjtTQUt6QjtJQUNIO0lBRUFDLGFBQWE7UUFDWCxJQUFJLENBQUNDLGFBQWE7UUFFbEIsTUFBTSxFQUFFcEMsT0FBTyxFQUFFLEdBQUdFLG1CQUFRLEVBQ3RCLEVBQUVSLEdBQUcsRUFBRSxHQUFHVyxvQkFBUyxFQUNuQlQsVUFBVSxJQUNWRSxpQkFBaUJFLFNBQVMsR0FBRztRQUVuQyxJQUFJLENBQUNxQyxNQUFNLENBQUMzQztRQUNaLElBQUksQ0FBQzRDLFVBQVUsQ0FBQzFDO1FBQ2hCLElBQUksQ0FBQzJDLGlCQUFpQixDQUFDekM7SUFDekI7SUFFQSxPQUFPMEMsVUFBVSxNQUFNO0FBQ3pCO01BRUEsV0FBZUMsSUFBQUEsY0FBUyxFQUFDbkQsS0FBSyxDQUFDOzs7O0FBSS9CLENBQUMifQ==