"use strict";

import withStyle from "./index";

import { Body, React } from "easy";

// import View from "./example/view";

const Link = withStyle.a`

  text-decoration: none;

`;

Object.assign(window, {
  React
});

const { renderStyles } = withStyle;

const body = new Body();

renderStyles();

body.prepend(

  <Link href="http://google.com">blah</Link>

);
