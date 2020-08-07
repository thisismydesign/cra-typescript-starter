import React, { FunctionComponent } from "react";
import Hidden from "@material-ui/core/Hidden";

const HideOnMobile: FunctionComponent = (props) => {
  return <Hidden xsDown>{props.children}</Hidden>;
};

export default HideOnMobile;
