import { createGlobalStyle, ThemeProps } from "styled-components";
import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${(props: ThemeProps<Theme>): string =>
      props.theme.palette.background.default};
  }
`;

export const createMuiTheme = (options?: ThemeOptions): Theme => {
  return createTheme({
    layout: {
      headerHeight: "70px",
      footerMinHeightDesktop: "71px",
      footerMinHeightMobile: "132px",
    },
    palette: {
      mode: "dark",
      background: {
        default: "#231f20",
      },
    },
    ...options,
  });
};
