import React from "react";

import Link, { LinkProps } from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

const LinkNoDecor = (props: LinkProps): JSX.Element => {
  return (
    <Link
      style={{
        textDecoration: "none",
      }}
      component={RouterLink}
      {...props}
    />
  );
};

export default LinkNoDecor;
