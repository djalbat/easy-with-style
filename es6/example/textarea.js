"use strict";

import withStyle from "../index";  ///

import { Textarea } from "easy";

export default withStyle(Textarea)`

  border: 1px solid darkgrey;
  height: 16rem;
  resize: vertical;
  padding: 0.25rem;
  font-size: 1.2rem;
  margin-top: 0.5rem;
  font-family: monospace;
  white-space: pre;

`;
