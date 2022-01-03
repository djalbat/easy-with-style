"use strict";

import "./example/preamble";

import withStyle from "./index";  ///

import { Body } from "easy";

import View from "./example/view";

const { renderStyles } = withStyle;

const body = new Body();

renderStyles();

body.mount(

  <View/>

);
