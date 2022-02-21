import React, { FunctionComponent } from "react";
import { Box } from "@mui/material";

const ShowOnMobile: FunctionComponent = (props) => {
  return (
    <Box component="span" sx={{ display: { xs: "block", sm: "none" } }}>
      {props.children}
    </Box>
  );
};

export default ShowOnMobile;
