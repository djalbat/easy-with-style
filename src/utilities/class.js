'use strict';

import { Element } from "easy";

export function isClass(argument) { return isSubclassOf(argument, Element); }  ///

function isSubclassOf(argument, Class) {
  const subclassOf = (argument.prototype instanceof Class);

  return subclassOf;
}
