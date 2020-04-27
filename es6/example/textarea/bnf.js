"use strict";

import Textarea from "../textarea";

class BNFTextarea extends Textarea {
  getBNF() {
    const value = this.getValue(),
          bnf = value;  ///

    return bnf;
  }

  setBNF(bnf) {
    const value = bnf;  ///

    this.setValue(value);
  }

  parentContext() {
    const getBNF = this.getBNF.bind(this),
          setBNF = this.setBNF.bind(this);

    return ({
      getBNF,
      setBNF
    });
  }

  static defaultProperties = {
    className: "bnf",
    spellCheck: "false"
  };

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = BNFTextarea;
    }

    return Textarea.fromProperties(Class, properties);
  }
}

export default BNFTextarea;
