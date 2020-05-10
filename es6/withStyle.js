"use strict";

import { React } from "easy";
import { tagNames, stylesUtilities, classNameUtilities } from "with-style";

import { isClass } from "./utilities/class";

const { generateClassName } = classNameUtilities,
      { renderStyle, renderStyles, generateStyle, retrieveStyle } = stylesUtilities;

function withStyle(ClassOrFunction) {
  return function() {
    const args = [...arguments];  ///

    let { className = null } = ClassOrFunction;

    const superStyle = retrieveStyle(className);

    className = generateClassName();

    generateStyle(args, className, superStyle);

    const ClassOrFunctionClass = isClass(ClassOrFunction);

    Object.assign(ClassOrFunction, {
      className
    });

    if (ClassOrFunctionClass) {
      const Class = ClassOrFunction;  ///

      ClassOrFunction = class extends Class {
        static fromClass(_Class, properties, ...remainingArguments) {
          properties = appendClassNameToProperties(className, properties);

          return Class.fromClass(_Class, properties, ...remainingArguments);
        }
      };

    } else {
      const Function = ClassOrFunction; ///

      ClassOrFunction = (properties) => {
        properties = appendClassNameToProperties(className, properties);

        return Function(properties);
      };
    }

    return ClassOrFunction;
  };
}

Object.assign(withStyle, {
  renderStyle,
  renderStyles
});

export default withStyle;

tagNames.forEach((tagName) => {
  Object.defineProperty(withStyle, tagName, {
    get: () => function() {
      const args = [...arguments],  ///
            className = generateClassName();

      generateStyle(args, className);

      const Function = (properties) => {
        properties = appendClassNameToProperties(className, properties);

        return React.createElement(tagName, properties);
      };

      Object.assign(Function, {
        className
      });

      return Function;
    }
  });
});

function appendClassNameToProperties(className, properties) {
  properties = properties.hasOwnProperty("className") ? properties : {...properties, className}; ///

  return properties;
}
