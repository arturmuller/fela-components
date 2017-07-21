# `<FelaProvider>`

Provider is primarily required so that your nested `<Styled>` components get access to the renderer.

```js
import { createRenderer } from "fela";
import { FelaProvider } from "fela-components";

const renderer = createRenderer();

<FelaProvider
  renderer={renderer}>
  <Styled visual={{ color: "cornflowerblue" }}>
    This will be properly styled.
  </Styled>
</FelaProvider>
```

## renderer: Fela Renderer

An instance of Fela Renderer.

## staticStyles: string

A string representing static CSS that should be injected to the DOM as soon as the Provider mounts.

```js
<FelaProvider
  renderer={renderer}
  staticStyles="html {-webkit-font-smoothing: antialiased}">
  ...
</FelaProvider>
```

<!--
## `fonts`: array

Array of font definitions.
-->
