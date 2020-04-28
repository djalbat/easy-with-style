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

## Creating primitive element with style

All of the standard HTML elements are supported. For a complete list of tag names, see the [`tagNames.js`](https://github.com/djalbat/with-style/blob/master/es6/tagNames.js) file. You can access these elements, which are functional elements under the hood, as follows:

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

Adding style to supported elements couldn't be more straightforward:

```
import { Textarea } from "easy";

export default withStyle(Textarea)`

  ...

`;
```
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

    return Textarea.fromProperties(Div, properties);
  }
}

export default withStyle(Div)`

  ...

`;
```
The one caveat to be aware of is that the static `fromProperties()` factory method must be polymorphic as shown. This is because the anonymous class that the `withStyle()` returns will call the `fromProperties()` method and expects this signature.

## Example

Not an example as such. It allows you to test out CSS against the built-in CSS lexer and parser. This is the first port of call should you suspect that your CSS is not being parsed correctly. Both the lexical entries and BNF that make up the CSS grammar can be altered on the fly. Pull requests are welcome for improvements to either.

## Contact

- james.smith@djalbat.com
- http://djalbat.com
