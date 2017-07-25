import React from "react";
import { felaSnapshot } from "./utils";

import { Anchor } from "../lib/index";

it("Renders styles correctly", () => {
  const snapshot = felaSnapshot(
    <Anchor
      visual={{ display: "flex", alignItems: "center" }}
      href="http://www.facebook.com">
      Facebook
    </Anchor>
  );

  expect(snapshot).toMatchSnapshot();
});

it("Renders animations correctly", () => {
  const snapshot = felaSnapshot(
    <Anchor
      animations={{ fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } } }}
      visual={({ animations }) => ({
        display: "flex",
        alignItems: "center",
        animationName: animations.fadeIn,
        "@media (min-width: 300px)": {
          color: "white",
          "@media (min-width: 400px)": {
            color: "black",
          },
        },
      })}
      href="http://www.facebook.com">
      Facebook
    </Anchor>
  );

  expect(snapshot).toMatchSnapshot();
});
