"use strict";

import withStyle from "../index";  ///

import { Textarea } from "easy";

export default withStyle(Textarea)`

  width: 100%;
  border: 1px solid darkgray;
  height: 16rem;
  resize: vertical;
  padding: 0.25rem;
  font-size: 1rem;
  margin-top: 0.5rem;
  font-family: monospace;
  white-space: pre;

`;
