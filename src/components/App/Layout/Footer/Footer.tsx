import React, { FunctionComponent } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Box, Grid, Link, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import useIsDesktopLayout from "utils/useIsDesktopLayout";
import MediumIcon from "resources/medium-icon.svg";

import { FooterRootGrid, IconImg } from "./Footer.style";

const Footer: FunctionComponent = () => {
  const isDesktopLayout = useIsDesktopLayout();

  return (
    <footer>
      <FooterRootGrid>
        <Grid item xs={12} sm={4}>
          <Box
            display="flex"
            justifyContent={isDesktopLayout ? "flex-start" : "center"}
            alignItems="center"
            height="100%"
            paddingLeft={isDesktopLayout ? "16px" : "0px"}
          >
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
              height="100%"
            >
              <Box m={1}>
                <Link href="https://github.com/c-hive">
                  <GitHubIcon style={{ color: "white" }} />
                </Link>
              </Box>
              <Box m={1}>
                <Link href="https://medium.com/c-hive">
                  <IconImg src={MediumIcon} alt="Medium icon" />
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Link component={RouterLink} to="/legal">
            <Typography variant="body2">
              Imprint | Privacy | Terms and Conditions
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            display="flex"
            justifyContent={isDesktopLayout ? "flex-end" : "center"}
            alignItems="center"
            height="100%"
            paddingRight={isDesktopLayout ? "16px" : "0px"}
          >
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} C-Hive
            </Typography>
          </Box>
        </Grid>
      </FooterRootGrid>
    </footer>
  );
};

export default Footer;
