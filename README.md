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

## Contact

- james.smith@djalbat.com
- http://djalbat.com
