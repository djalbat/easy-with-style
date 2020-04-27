"use strict";

import withStyle from "../index";  ///

import { Textarea } from "easy";

export default withStyle(Textarea)`

  width: 100%;
  font-size: 1rem;
  padding: 0.25rem;
  font-family: monospace;
  border: 1px solid darkgray;
  height: 16rem;
  resize: vertical;
  white-space: pre;
  margin-top: 0.5rem;
  
  .error {
    border-color: red;
  }

`;
