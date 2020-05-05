# Easy with Style

Programmatic styles for [Easy](https://github.com/djalbat/easy).

To find out what variant of CSS is supported, which is essential to know, please read the [With Style](https://github.com/djalbat/with-style) readme file.

## Installation

With [npm](https://www.npmjs.com/):

    npm install easy-with-style

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/easy-with-style.git

...then install the dependencies with npm from within the project's root directory:

    npm install

## Usage

```
import withStyle from 'easy-with-style';   ///

import { Body } from 'easy';

import View from './view';

const { renderStyles } = withStyle;

const body = new Body();

renderStyles();

body.prepend(

  <View />

);
```

You must call the `renderStyles()` function *after* importing the view but *before* rendering it. Doing so ensures that the styles generated as a result of executing the view code are inserted into the DOM before the view itself. Note that rendering the styles in this way is not done as part of the build process, you must explicitly call the `renderStyles()` function, ideally right before you attach the view to the body.

## Example

Not an example as such. It allows you to test out CSS against the built-in CSS lexer and parser. This is the first port of call should you suspect that your CSS is not being parsed correctly. Both the lexical entries and BNF that make up the CSS grammar can be altered on the fly. Pull requests are welcome for improvements to either.

## Creating primitive elements with style

All of the standard HTML elements are supported. For a complete list of tag names, see the [`tagNames.js`](https://github.com/djalbat/with-style/blob/master/es6/tagNames.js) file. You can create these elements, which are functional elements under the hood, as follows:

```
const Link = withStyle.a`

  color: ${white};
  text-decoration: none;

  @media (min-width: ${desktop}) {
    color: ${black};
  }

`;
```

Now you are free to use the `Link` element in the usual way. Note that expression interpolation is supported. For example, here colour and breakpoint variables have been used.

To learn more about template literals in general and expression interpolation in particular, see the relevant [MDN page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

## Creating functional elements with style

This can be done with the `withStyle()` function:

```
const Header = (properties) => {
  const { className } = properties;

  return (

    <header className={className}>

      ...

    </header>

  );
};

export default withStyle(Header)`

  ...

`;
```

Note that the `className` property is retrieved from the `properties` object and must be used as the value of the attribute of the same name on the outermost JSX element that the function returns.

## Creating class elements with style

Creating your own elements by extending the `Element` or `InputElement` class, or any supported element class for that matter, is also relatively straightforward:
```
import { Element } from "easy";

class Div extends Element {
  static tagName = "div";

  ...

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = Div;
    }

    return Element.fromProperties(Div, properties);
  }
}

export default withStyle(Div)`

  ...

`;
```
The one caveat to be aware of is that the static `fromProperties()` factory method must be polymorphic as shown. This is because the anonymous class that the `withStyle()` method returns calls the `fromProperties()` method and expects this signature.

## Extending the styles of elements with style

If all you want to do is to add further styles to an element, be it a primitive, functional or class element, simply wrap it in another `withStyle()` call:

```
const HeaderLink = withStyle(Link)`

  ...

`;
```

In this case the `Link` element will keep its own styles whilst the `HeaderLink` element will both inherit those styles and of course possess its own.

## Elements with style and composition

Composing elements with style obviously causes no problems in general, aside from one small caveat. If you set the `className` property of an element with style, then you will overwrite the class name that has been given to it automatically. In the case of all functional and class elements with style, however, it is easy to recover the class name and incorporate it into your own:

```
const NavigationButton = (properties) => {
  const { className } = Button,
        { children } = properties;

  return (

    <Button className={`${className} navigation`}>
      {children}
    </Button>

  );
}
```
This situation occasionally arises when using placeholder class names, see below.

## Class elements with style and class inheritance

Extending your own class elements with style involves nothing more than remembering the correct signature for the static `fromProperties()` factory method, there is nothing more to do:


```
class MainDiv extends Div {
  ...

  static defaultProperties = {
    className: "main"
  };

  static fromProperties(Class, properties) {
    if (properties === undefined) {
      properties = Class; ///

      Class = MainDiv;
    }

    return Div.fromProperties(MainDiv, properties);
  }
}

export default withStyle(MainDiv)`

  ...

`;
```
Note that the element has been given a class name by way of the static `defaultProperties` class field in the normal fashion. The automatically generated class name for the styles does not interfere with this process. Again this is an example of placeholder class names, see immediately below.

## Placeholder class names

Class names are randomly generated hashes of around eight characters, and as such are far from ideal when debugging. It is best to add your own placeholder class names, therefore. For functional components the following pattern is recommended:

```
const MainHeader = (properties) => {
  const { className } = properties;

  return (

    <header className={`${className} main`}>

      ...

    </header>

  );
};

export default withStyle(MainHeader)`

  ...

`;
```
For class components there is nothing to do, just add your own placeholder class name by wa of the `className` property of the `defaultProperties` static class field, as above.

Placeholder class names make the association of DOM elements in your browser's developer tools with their corresponding components far easier.

## An example of functional classes

Elements with style are great for working with styles relating to an element's functionality as opposed to just its appearance.

```
class Div extends Element {
  hide() {
    this.addClass('hidden');
  }

  display() {
    this.removeClass('hidden');
  }

  isHidden() {
    const hidden = this.hasClass('hidden');

    return hidden;
  }

  isDisplayed() {
    const hidden = this.isHidden(),
          displayed = !hidden;

    return displayed;
  }

  ...
}

export default withStyle(Div)`

  .hidden {

    display: none;

   }

`;
```
In the example above, for example, the element can be programmatically displayed and hidden.

## Additional styles

There may be times when you need to add general styles to a page or target the children of DOM elements. In these cases you can make use of the `addStyles()` method thus:

```
import withStyle from 'easy-with-style';   ///

const { addStyle } = withStyle;

addStyle(

  ...

);
```
This will create a separate `style` DOM element and place your style in there.

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

- james.smith@djalbat.com
- http://djalbat.com
