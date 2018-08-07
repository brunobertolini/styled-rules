# styled-rules [![Build Status](https://travis-ci.org/brunobertolini/styled-rules.svg?branch=master)](https://travis-ci.org/brunobertolini/styled-rules) [![codecov](https://codecov.io/gh/brunobertolini/styled-rules/badge.svg?branch=master)](https://codecov.io/gh/brunobertolini/styled-rules?branch=master)

> Preset style rules, theme based, highly customizable style props

## Install

```
yarn add styled-rules
```

## Basic usage

```js
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import styledBy from "styled-by";
import { flexbox } from "styled-rules";

const propTypes = {
	...flexbox.propTypes
};

const defaultProps = {
	...flexbox.defaultProps
};

const Wrapper = props => <div {...props}>Styled Rules!</div>;

Wrapper.propTypes = propTypes;
Wrapper.defaultProps = defaultProps;

export default styled(Wrapper)`
	${styledBy(flexbox.rules)};
`;
```

## License

MIT © [Bruno Bertolini](http://brunobertolini.com)
