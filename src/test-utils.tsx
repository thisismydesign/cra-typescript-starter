import React, { FunctionComponent, ReactElement } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { HashRouter as Router } from "react-router-dom";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

import ThemeProvider from "utils/ThemeProvider";

export const DesktopThemeWrapper: FunctionComponent = (props) => {
  const muiThemeOptions = {
    props: { MuiWithWidth: { initialWidth: "sm" as Breakpoint } },
  };

  return (
    <ThemeProvider muiThemeOptions={muiThemeOptions}>
      <Router>{props.children}</Router>
    </ThemeProvider>
  );
};

export const MobileThemeWrapper: FunctionComponent = (props) => {
  const muiThemeOptions = {
    props: { MuiWithWidth: { initialWidth: "xs" as Breakpoint } },
  };

  return (
    <ThemeProvider muiThemeOptions={muiThemeOptions}>
      <Router>{props.children}</Router>
    </ThemeProvider>
  );
};

// https://testing-library.com/docs/react-testing-library/setup#custom-render
const customRender = (
  ui: ReactElement,
  options?: RenderOptions
): RenderResult => render(ui, { wrapper: DesktopThemeWrapper, ...options });
export * from "@testing-library/react";
export { customRender as render };
