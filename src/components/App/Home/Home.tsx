import React, { FunctionComponent } from "react";
import { Typography, Box } from "@material-ui/core";

const Home: FunctionComponent = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      pt="100px"
    >
      <Typography variant="h1">Hey.</Typography>
    </Box>
  );
};

export default Home;
