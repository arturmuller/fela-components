import React from "react";
import FelaDOM from "fela-dom";
import T from "prop-types";

export default class FelaProvider extends React.Component {
  static propTypes = {
    renderer: T.object.isRequired,
    mountNode: T.any,
    staticStyles: T.string,
    fonts: T.arrayOf(
      T.shape({
        family: T.string.isRequired,
        files: T.arrayOf(T.string.isRequired).isRequired,
        properties: T.object,
      })
    ),
    theme: T.object,
    children: T.element,
  };

  static defaultProps = {
    theme: {},
  };

  static childContextTypes = {
    renderer: T.object,
    theme: T.object,
  };

  getChildContext() {
    const { renderer, theme } = this.props;
    return { renderer, theme };
  }

  componentDidMount() {
    const { staticStyles, fonts, mountNode, renderer } = this.props;

    if (staticStyles) {
      renderer.renderStatic(staticStyles);
    }

    if (fonts) {
      fonts.forEach(({ family, files, ...properties }) =>
        renderer.renderFont(family, files, properties)
      );
    }

    if (mountNode) {
      FelaDOM.render(renderer, mountNode);
    }
  }

  render() {
    return React.Children.only(this.props.children);
  }
}
