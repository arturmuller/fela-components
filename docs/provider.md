# `<Provider>`

Provider is primarily required so that your nested `<Styled>` components get access to the renderer.

```js
import { createRenderer } from "fela";
import { Provider } from "fela-components";

const renderer = createRenderer();

<Provider
  renderer={renderer}>
  <Styled visual={{ color: "cornflowerblue" }}>
    This will be properly styled.
  </Styled>
</Provider>
```

## renderer: Fela Renderer

An instance of Fela Renderer.

## staticStyles: string

A string representing static CSS that should be injected to the DOM as soon as the Provider mounts.

```js
<Provider
  renderer={renderer}
  staticStyles="html {-webkit-font-smoothing: antialiased}">
  ...
</Provider>
```

<!--
## `fonts`: array

Array of font definitions.
-->
