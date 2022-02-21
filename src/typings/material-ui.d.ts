import { ThemeOptions as _ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles/createTheme" {
  export interface ThemeOptions {
    layout?: {
      headerHeight: string;
      footerMinHeightDesktop: string;
      footerMinHeightMobile: string;
    };
    headerBackground?: string;
  }
}

// For <LinkNoDecor />
declare module "@mui/material/Link" {
  export interface LinkProps {
    to: string;
    children;
    color?;
  }
}
