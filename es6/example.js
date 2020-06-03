"use strict";

import withStyle from "./index";  ///

import { Body, React } from "easy";

import View from "./example/view";

Object.assign(window, {
  React
});

const { renderStyles } = withStyle;

const body = new Body();

renderStyles();

body.mount(

  <View />

);
