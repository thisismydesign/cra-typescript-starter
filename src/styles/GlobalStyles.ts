import { createGlobalStyle, ThemeProps } from "styled-components";
import { createMuiTheme, Theme, ThemeOptions } from "@material-ui/core/styles";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${(props: ThemeProps<Theme>): string =>
      props.theme.palette.background.default};
  }
`;

export const muiTheme = (options?: ThemeOptions): Theme => {
  return createMuiTheme({
    layout: {
      headerHeight: "70px",
      footerMinHeightDesktop: "71px",
      footerMinHeightMobile: "132px",
    },
    palette: {
      type: "dark",
      background: {
        default: "#231f20",
      },
    },
    ...options,
  });
};
