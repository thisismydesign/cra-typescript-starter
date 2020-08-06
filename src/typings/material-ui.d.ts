import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

declare module "@material-ui/core/styles/createMuiTheme" {
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
declare module "@material-ui/core/Link" {
  export interface LinkProps {
    to: string;
    children;
    color?;
  }
}
