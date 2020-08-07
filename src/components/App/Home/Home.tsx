import React, { FunctionComponent } from "react";
import { Typography, Box, Button } from "@material-ui/core";

const Home: FunctionComponent = () => {
  return (
    <Box pt="80px">
      <Typography variant="h2" color="primary">
        This template is great.
      </Typography>
      <Box pt="20px">
        <Typography variant="h5" color="textPrimary">
          {"It's based on battle-tested standards."}
        </Typography>
      </Box>
      <Box pt="20px">
        <Button variant="contained" color="primary">
          Sign me up!
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
