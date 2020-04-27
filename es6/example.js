"use strict";

import withStyle from "./index";

import { Body, Element, React } from "easy";

const { renderStyles } = withStyle;

Object.assign(window, {
  React
});

const body = new Body();

const Paragraph = withStyle(class extends Element {
  static tagName = "p";

  static fromProperties(properties) { return Element.fromProperties(Paragraph, properties); }
})`

  background-color: green;
  
`;

const StyledParagraph = withStyle(Paragraph)`

  color: red;

`;

renderStyles();

body.prepend(

  <article>
    <h1>
      Easy with Style example
    </h1>
    <StyledParagraph>
      First styles...
    </StyledParagraph>
  </article>

);
