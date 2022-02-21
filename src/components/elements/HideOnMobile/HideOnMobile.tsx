import React, { FunctionComponent } from "react";
import { Box } from "@mui/material";

const HideOnMobile: FunctionComponent = (props) => {
  return (
    <Box component="span" sx={{ display: { xs: "none", sm: "block" } }}>
      {props.children}
    </Box>
  );
};

export default HideOnMobile;
