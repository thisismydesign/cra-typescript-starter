import React from "react";

import { Box, Grid, GridProps } from "@material-ui/core";

// This is to resolve the scroll that appears due to the negative margin applied by the spacing prop
// https://material-ui.com/components/grid/#negative-margin
const RootGrid = (props: GridProps): JSX.Element => {
  return (
    <Box p={1}>
      <Grid container spacing={2} {...props}>
        {props.children}
      </Grid>
    </Box>
  );
};

export default RootGrid;
