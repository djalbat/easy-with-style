"use strict";

import { React } from "easy";
import { tagNames, stylesUtilities, classNameUtilities } from "with-style";

import { isClass } from "./utilities/class";

const { generateClassName } = classNameUtilities,
      { renderStyles, generateStyle, retrieveStyle } = stylesUtilities;

function withStyle(ClassOrFunction) {
  return function() {
    const args = [...arguments];  ///

    let { className = null } = ClassOrFunction;

    const superStyle = retrieveStyle(className);

    className = generateClassName();

    generateStyle(args, className, superStyle);

    const ClassOrFunctionClass = isClass(ClassOrFunction);

    if (ClassOrFunctionClass) {
      const Class = ClassOrFunction;  ///

      ClassOrFunction = class extends Class {
        static fromProperties(_Class, properties) {
          if (properties === undefined) {
            properties = _Class; ///

            _Class = ClassOrFunction;
          }

          properties = appendClassNameToProperties(className, properties);

          return Class.fromProperties(_Class, properties);
        }
      }
    } else {
      const Function = ClassOrFunction; ///

      ClassOrFunction = (properties) => {
        properties = appendClassNameToProperties(className, properties);

        return Function(properties);
      };
    }

    Object.assign(ClassOrFunction, {
      className
    });

    return ClassOrFunction;
  };
}

Object.assign(withStyle, {
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
