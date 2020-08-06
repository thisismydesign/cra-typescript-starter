import { createGlobalStyle } from "styled-components";
import { createMuiTheme, Theme, ThemeOptions } from "@material-ui/core/styles";

import { hexToRgb, addAlpha } from "./StyleHelper";

const primary = "#74e3a8";
const secondary = "#e37474";
const background = "#b8ffef";
const headerBackground = "#00bfa5";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${background};
  }
`;

export const muiTheme = (options?: ThemeOptions): Theme => {
  return createMuiTheme({
    layout: {
      headerHeight: "70px",
      footerMinHeightDesktop: "70px",
      footerMinHeightMobile: "132px",
    },
    palette: {
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
    },
    headerBackground,
    overrides: {
      MuiListItem: {
        root: {
          "&$selected": {
            backgroundColor: addAlpha(hexToRgb(primary), 0.08),
            "&:hover": {
              backgroundColor: addAlpha(hexToRgb(primary), 0.08),
            },
          },
        },
        button: {
          "&:hover": {
            backgroundColor: addAlpha(hexToRgb(primary), 0.08),
          },
        },
      },
      MuiIconButton: {
        root: {
          "&:hover": {
            backgroundColor: addAlpha(hexToRgb(primary), 0.08),
          },
        },
      },
      MuiButton: {
        containedPrimary: {
          "&:hover": {
            backgroundColor: addAlpha(hexToRgb(primary), 0.5),
          },
        },
      },
    },
    ...options,
  });
};
