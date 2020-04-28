"use strict";

import { Element } from "easy";

import { CSSLexer, CSSParser } from "with-style";

import Heading from "./heading";
import ColumnDiv from "./div/column";
import ColumnsDiv from "./div/columns";
import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import ContentTextarea from "./textarea/content";
import VerticalSplitter from "./verticalSplitter";
import ParseTreeTextarea from "./textarea/parseTree";
import LexicalEntriesTextarea from "./textarea/lexicalEntries";

export default class View extends Element {
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

  keyUpHandler() {
    try {
      const parseTree = this.getParseTree();

      this.setParseTree(parseTree);
    } catch (error) {
      console.log(error);

      this.clearParseTree();
    }
  }

  childElements(properties) {
    const keyUpHandler = this.keyUpHandler.bind(this);

    return ([

      <Heading>
        Easy with Style example
      </Heading>,
      <ColumnsDiv>
        <SizeableDiv>
          <SubHeading>
            Lexical entries
          </SubHeading>
          <LexicalEntriesTextarea onKeyUp={keyUpHandler} />
          <SubHeading>
            BNF
          </SubHeading>
          <BNFTextarea onKeyUp={keyUpHandler} />
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
          <ContentTextarea onKeyUp={keyUpHandler} />
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

    this.keyUpHandler();
  }

  static tagName = "div";

  static fromProperties(properties) {
    const view = Element.fromProperties(View, properties);

    view.initialise();

    return view;
  }
}
