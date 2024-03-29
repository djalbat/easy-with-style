"use strict";

import withStyle from "../index"; ///

import { Element } from "easy";

import { CSSLexer, CSSParser } from "with-style";

import RowsDiv from "./div/rows";
import ColumnDiv from "./div/column";
import ColumnsDiv from "./div/columns";
import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import ContentTextarea from "./textarea/content";
import ParseTreeTextarea from "./textarea/parseTree";
import VerticalSplitterDiv from "./div/splitter/vertical";
import LexicalEntriesTextarea from "./textarea/lexicalEntries";

class View extends Element {
  getParseTree() {
    let parseTree = null;

    const bnf = this.getBNF(),
          content = this.getContent(),
          lexicalEntries = this.getLexicalEntries(),
          entries = lexicalEntries, ///
          cssLexer = CSSLexer.fromEntries(entries),
          cssParser = CSSParser.fromBNF(bnf),
          tokens = cssLexer.tokenise(content),
          node = cssParser.parse(tokens);

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

    return ([

      <ColumnsDiv>
        <SizeableDiv>
          <RowsDiv>
            <SubHeading>
              Lexical entries
            </SubHeading>
            <LexicalEntriesTextarea onKeyUp={keyUpHandler} />
            <SubHeading>
              BNF
            </SubHeading>
            <BNFTextarea onKeyUp={keyUpHandler} />
          </RowsDiv>
        </SizeableDiv>
        <VerticalSplitterDiv/>
        <ColumnDiv>
          <RowsDiv>
            <SubHeading>
              Content
            </SubHeading>
            <ContentTextarea onKeyUp={keyUpHandler} />
            <SubHeading>
              Parse tree
            </SubHeading>
            <ParseTreeTextarea/>
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    ]);
  }

  initialise() {
    this.assignContext();

    const { entries } = CSSLexer,
          { bnf } = CSSParser,
          content = "", ///
          lexicalEntries = entries; ///

    this.setBNF(bnf);
    this.setContent(content);
    this.setLexicalEntries(lexicalEntries);
  }

  static tagName = "div";
}

export default withStyle(View)`

  padding: 1rem;
  
`;
