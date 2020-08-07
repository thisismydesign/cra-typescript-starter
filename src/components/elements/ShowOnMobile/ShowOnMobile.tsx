import React, { FunctionComponent } from "react";
import Hidden from "@material-ui/core/Hidden";

const ShowOnMobile: FunctionComponent = (props) => {
  return <Hidden smUp>{props.children}</Hidden>;
};

export default ShowOnMobile;
