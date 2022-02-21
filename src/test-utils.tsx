import React, { FunctionComponent, ReactElement } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import { HashRouter as Router } from "react-router-dom";
import { Breakpoint, ThemeOptions } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material";

import ThemeProvider from "utils/ThemeProvider";

export const DesktopThemeWrapper: FunctionComponent = (props) => {
  const muiThemeOptions = {
    props: { MuiWithWidth: { initialWidth: "sm" as Breakpoint } },
  } as ThemeOptions;

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider muiThemeOptions={muiThemeOptions}>
        <Router>{props.children}</Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export const MobileThemeWrapper: FunctionComponent = (props) => {
  const muiThemeOptions = {
    props: { MuiWithWidth: { initialWidth: "xs" as Breakpoint } },
  } as ThemeOptions;

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider muiThemeOptions={muiThemeOptions}>
        <Router>{props.children}</Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

// https://testing-library.com/docs/react-testing-library/setup#custom-render
const customRender = (
  ui: ReactElement,
  options?: RenderOptions
): RenderResult => render(ui, { wrapper: DesktopThemeWrapper, ...options });
export * from "@testing-library/react";
export { customRender as render };
