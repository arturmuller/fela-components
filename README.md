# Fela Components

[![npm](https://img.shields.io/npm/v/fela-components.svg)](https://www.npmjs.com/package/fela-components)

`fela-components` is a styling library for [Fela](fela.js.org) and [React](https://facebook.github.io/react/).

By preferring regular components over HOCs, this packages makes it easier to create ah-hoc components, significantly decreasing naming fatigue when working on larger apps. Why would every styled DOM node have to have a name?

All of this while remaining fully compatible with all of the [awesomeness of Fela](http://fela.js.org/docs/introduction/Benefits.html) itself, from atomic class names to the outstanding [plugin system](http://fela.js.org/docs/advanced/Plugins.html).

This is an unofficial package. For official Fela bindings for React, see [react-fela](https://www.npmjs.com/package/react-fela).

## Install

```sh
# Using npm
npm install --save fela-components

# Using yarn
yarn add fela-components
```

## Minimal Example

```js
import React from "react";
import ReactDOM from "react-dom";
import { createRenderer } from "fela";
import { StyledComponent, Provider } from "fela-components";

const renderer = createRenderer();
const mountNode = document.getElementById("app");

ReactDOM.render(
  <Provider renderer={renderer}>
    <StyledComponent visual={{ padding: "15px", color: "cornflowerblue" }}>
      This will be properly styled.
    </StyledComponent>
  </Provider>,
  mountNode
)
```

## Usage

See [API reference for more detail](./docs/api-reference.md).


## Inspiration

- [react-fela](https://www.npmjs.com/package/react-fela)
- [jsxstyle](https://www.npmjs.com/package/jsxstyle)
