import React from "react";
import { render } from "fela-dom";
import T from "prop-types";

class Provider extends React.Component {
  static propTypes = {
    renderer: T.object.isRequired,
    staticStyles: T.string,
    fonts: T.arrayOf(
      T.shape({
        family: T.string.isRequired,
        files: T.arrayOf(T.string.isRequired).isRequired,
        properties: T.object,
      })
    ),
    children: T.element,
  };

  static childContextTypes = {
    renderer: T.object,
  };

  getChildContext() {
    const { renderer } = this.props;
    return { renderer };
  }

  componentDidMount() {
    const { staticStyles, fonts, renderer } = this.props;

    if (staticStyles) {
      renderer.renderStatic(staticStyles);
    }

    if (fonts) {
      fonts.forEach(({ family, files, ...properties }) =>
        renderer.renderFont(family, files, properties)
      );
    }

    render(renderer);
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

// FelaProvider is legacy export
export { Provider, Provider as FelaProvider };
