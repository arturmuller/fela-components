import React from "react";
import FelaDOM from "fela-dom";
import R from "ramda";
import T from "prop-types";

const rendererType = T.shape({
  renderRule: T.func.isRequired,
});

export class StyleProvider extends React.Component {
  static propTypes = {
    renderer: rendererType.isRequired,
    mountNode: T.any,
    children: T.element,
  };

  static childContextTypes = {
    renderer: rendererType,
  };

  getChildContext() {
    return { renderer: this.props.renderer };
  }

  componentDidMount() {
    const { mountNode, renderer } = this.props;

    if (mountNode) {
      FelaDOM.render(renderer, mountNode);
    }
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

export default class StyledComponent extends React.Component {
  static propTypes = {
    visual: T.oneOfType([T.object, T.func]),
    keyframes: T.objectOf(T.object),
    element: T.oneOfType([T.string, T.func]),
    children: T.node,
  };

  static defaultProps = {
    element: "div",
    visual: {},
  };

  static contextTypes = {
    renderer: rendererType.isRequired,
  };

  renderClassName = (visual, keyframes) => {
    if (keyframes) {
      if (typeof visual === "function") {
        const animations = this.renderKeyframes(keyframes);
        return this.context.renderer.renderRule(visual, animations);
      } else {
        // eslint-disable-next-line
        console.error(
          "[fela-components] You supplied a keyframes object, but your visual" +
            "prop is not a function. When adding keyframes, visual prop" +
            "always has to be a function. Keyframes not added."
        );
      }
    }

    return this.context.renderer.renderRule(() => visual);
  };

  renderKeyframes = keyframes => {
    const { renderer } = this.context;
    return R.map(k => renderer.renderKeyframe(() => k), keyframes);
  };

  render() {
    const { element: Element, visual, keyframes, ...props } = this.props;
    return (
      <Element {...props} className={this.renderClassName(visual, keyframes)} />
    );
  }
}
