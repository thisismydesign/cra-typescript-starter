import React, { FunctionComponent } from "react";
import {
  StylesProvider,
  MuiThemeProvider,
  ThemeOptions,
} from "@material-ui/core/styles";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";

import { GlobalStyles, muiTheme } from "styles/GlobalStyles";

const ThemeProvider: FunctionComponent<{ muiThemeOptions?: ThemeOptions }> = (
  props
) => {
  const MuiTheme = muiTheme(props.muiThemeOptions);

  // https://material-ui.com/guides/interoperability/#controlling-priority-3
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      {/* Making sure MUI theme is accessible by both styled-components and MUI elements: https://stackoverflow.com/a/58462124/2771889 */}
      <MuiThemeProvider theme={MuiTheme}>
        <ScThemeProvider theme={MuiTheme}>
          <GlobalStyles />
          {props.children}
        </ScThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default ThemeProvider;
