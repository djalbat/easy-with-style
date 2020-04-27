# Easy with Style

Programmatic styles for [Easy](https://github.com/djalbat/easy).

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

## Contact

- james.smith@djalbat.com
- http://djalbat.com
