import { createGlobalStyle } from "styled-components";
import { createMuiTheme, Theme, ThemeOptions } from "@material-ui/core/styles";

import { hexToRgb, addAlpha } from "./StyleHelper";

const primary = "#74e3a8";
const secondary = "#e37474";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

a {
  text-decoration: none;
}
`;

export const muiTheme = (options?: ThemeOptions): Theme => {
  return createMuiTheme({
    layout: {
      headerHeight: "70px",
      footerMinHeightDesktop: "70px",
      footerMinHeightMobile: "116px",
    },
    palette: {
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
    },
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
