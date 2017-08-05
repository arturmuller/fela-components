# `<StyledComponent>`

The primary component in `fela-components`.

```js
import { StyledComponent } from "fela-components"

<StyledComponent visual={{ padding: "10px" }}>
  Padded text!
</StyledComponent>
```

## visual: object

A style object. These mostly contain style declarations, but Fela also offers pseudo-classes, media queries, and more. [Check out the docs](http://bit.ly/2qOK3i3).

```js
<StyledComponent
  visual={{
    padding: "10px",
    backgroundColor: "burlywood",
    "@media (min-width: 200px)": {
      padding: "20px",
    }
  }}>
  Padded text!
</StyledComponent>
```

## visual: function

A function returning a style object. The function will be passed `theme` and `animations` as named arguments and should return a style object.

```js
<StyledComponent visual={({ theme }) => ({ color: theme.blue })}>
  Theme-colored text...
</StyledComponent>
```

## use: string

A string representing a native DOM element. This is useful if you want `<StyledComponent>` to render other elements than `div` for accessibility or to utilise default browser behaviour. All props not consumed by `<StyledComponent>` will be passed to it.

```js
<StyledComponent use="button" visual={{ backgroundColor: "blue" }}>
  Blue button
</StyledComponent>
```

## use: React Component

A React Component can also be passed to `use`. All props not consumed by `<StyledComponent>` will be passed to it.

**Important**: Make sure that passed component accepts and uses the `className` prop. Without it, there is nowhere to apply styles!

<!--
TODO: Create a gist of how you can foot-gun yourself when not accepting `className`.
-->

```js
import { Link } from "react-router-dom"

<StyledComponent
  use={Link}
  visual={{ color: "salmon" }}
  to="/about">
  Pink link
</StyledComponent>
```

## animations: object

A map of animation names to animation objects. Will be used to generate unique animation names that will be passed to the `visual` prop (when provided as a function) under the `animations` key.

Compatible with [`react-animations`](http://bit.ly/2pSB8gi).

```js
<StyledComponent
  visual={({ animations }) => ({
    color: "cadetblue",
    animationName: animations.fadeIn,
    animationDuration: "1s",
  })}
  animations={{
    fadeIn: { from: { opacity: 0 }, to: {opacity: 1 } },
  }}>
  Pink link
</StyledComponent>
```
