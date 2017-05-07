# `<FelaProvider>`

Provider is primarily required so that your nested `<Styled>` components get access to the renderer.

```js
import Fela from "fela";
import { FelaProvider } from "fela-components";

const renderer = Fela.createRenderer();
const mountNode = document.getElementById("styles");

<FelaProvider
  renderer={renderer}
  mountNode={mountNode}>
  <Styled visual={{ color: "cornflowerblue" }}>
    This will be properly styled.
  </Styled>
</FelaProvider>
```

## renderer: Fela Renderer

An instance of Fela Renderer.

## mountNode: DOM Node

A DOM node into which styles should be rendered. Ordinarily, this would be a `style` tag.

## staticStyles: string

A string representing static CSS that should be injected to the DOM as soon as the Provider mounts.

```js
<FelaProvider
  renderer={renderer}
  mountNode={mountNode}
  staticStyles="html {-webkit-font-smoothing: antialiased}">
  ...
</FelaProvider>
```

## theme: object

An object containing arbitrary key/value pairs, made available to every `<Styled>` component nested lower in the hierarchy.

```js
<FelaProvider
  renderer={renderer}
  mountNode={mountNode}
  theme={{ red: "#e04f82", green: "#53da92", blue: "#4f82dc"}}>
  ...
</FelaProvider>
```

<!--
## `fonts`: array

Array of font definitions.
-->
