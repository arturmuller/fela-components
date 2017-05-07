import React from "react";
import T from "prop-types";

export default class ThemeProvider extends React.Component {
  static propTypes = {
    theme: T.object,
    children: T.element,
  };

  static contextTypes = {
    theme: T.object,
  };

  static childContextTypes = {
    theme: T.object,
  };

  getChildContext() {
    const { context, props } = this;
    return { theme: { ...context.theme, ...props.theme } };
  }

  render() {
    return React.Children.only(this.props.children);
  }
}
