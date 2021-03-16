'use strict';

import { Element } from "easy";

export function isClass(argument) { return isSubclassOf(argument, Element); }  ///

function isSubclassOf(argument, Class) {
  let subclass = false;

  if (argument.name === Class.name) {   ///
    subclass = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument !== null) {
      subclass = isSubclassOf(argument, Class);
    }
  }

  return subclass;
}