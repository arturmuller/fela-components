# `<ThemeProvider>`

```js
import { ThemeProvider } from "fela-components";

<Theme theme={{ red: "crimson"}}>
  <StyledComponent visual={({ theme }) => ({ color: theme.red })}>
    Crimson text
  </StyledComponent>
</Theme>
```

## theme: object

An object containing arbitrary key/value pairs, made available to every `<StyledComponent>` nested lower in the hierarchy.

If a theme already exists inside context, the new object will be shallowly merged with the existing one (new theme taking precedence).

```js
const HighlightedText = ({ children }) => (
  <StyledComponent use="p" visual={({ theme }) => ({ color: theme.highlight })}>
    {children}
  </StyledComponent>
)

<ThemeProvider theme={{ highlight: "yellow" }}>
  <HighlightedText>
    Highlighted yellow
  </HighlightedText>

  <ThemeProvider theme={{ highlight: "red" }}>
    <HighlightedText>
      Highlighted red
    </HighlightedText>
  </ThemeProvider>
</ThemeProvider>
```
