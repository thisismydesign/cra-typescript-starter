import React, { FunctionComponent } from "react";
import Hidden from "@mui/material/Hidden";

const HideOnMobile: FunctionComponent = (props) => {
  return <Hidden smDown>{props.children}</Hidden>;
};

export default HideOnMobile;
