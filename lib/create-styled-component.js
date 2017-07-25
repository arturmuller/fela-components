import React from "react";
import R from "ramda";
import T from "prop-types";

export default function createStyledComponent(displayName, use) {
  return class StyledComponent extends React.Component {
    static displayName = displayName;

    static propTypes = {
      use: T.oneOfType([T.string, T.func]),
      visual: T.oneOfType([T.object, T.func]),
      animations: T.objectOf(T.object),
      children: T.node,
    };

    static defaultProps = {
      use,
      visual: {},
    };

    static contextTypes = {
      renderer: T.object.isRequired,
      theme: T.object,
    };

    renderClassName = (visual, animations) => {
      const { renderer, theme = {} } = this.context;
      if (typeof visual === "function") {
        return renderer.renderRule(visual, {
          animations: this.renderKeyframes(animations),
          theme,
        });
      }

      return renderer.renderRule(() => visual);
    };

    renderKeyframes = (animations = {}) => {
      const { renderer } = this.context;
      return R.map(
        animation => renderer.renderKeyframe(() => animation),
        animations
      );
    };

    render() {
      const { use: Component, visual, animations, ...props } = this.props;
      return (
        <Component
          {...props}
          className={this.renderClassName(visual, animations)}
        />
      );
    }
  };
}
