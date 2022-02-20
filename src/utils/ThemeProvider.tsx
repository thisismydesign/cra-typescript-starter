import React, { FunctionComponent } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
} from "@mui/material/styles";
import { StyledEngineProvider, CssBaseline } from "@mui/material";
import { ThemeProvider as ScThemeProvider } from "styled-components";

import { GlobalStyles, createMuiTheme } from "styles/GlobalStyles";

const ThemeProvider: FunctionComponent<{ muiThemeOptions?: ThemeOptions }> = (
  props
) => {
  const muiTheme = createMuiTheme(props.muiThemeOptions);

  // https://mui.com/guides/interoperability/#css-injection-order-3
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      {/* Making sure MUI theme is accessible by both styled-components and MUI elements: https://stackoverflow.com/a/58462124/2771889 */}
      <MuiThemeProvider theme={muiTheme}>
        <ScThemeProvider theme={muiTheme}>
          <GlobalStyles />
          {props.children}
        </ScThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
