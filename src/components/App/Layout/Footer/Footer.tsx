import React, { FunctionComponent } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Grid, Link, Typography } from "@mui/material";

import useIsDesktopLayout from "utils/useIsDesktopLayout";
import MediumIcon from "resources/medium-icon.svg";
import LinkNoDecor from "components/elements/LinkNoDecor/LinkNoDecor";

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
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            height="100%"
          >
            <LinkNoDecor to="/legal">
              <Typography variant="body2" color="info.dark">
                Imprint | Privacy | Terms and Conditions
              </Typography>
            </LinkNoDecor>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box
            display="flex"
            justifyContent={isDesktopLayout ? "flex-end" : "center"}
            alignItems="center"
            height="100%"
            paddingRight={isDesktopLayout ? "16px" : "0px"}
          >
            <Typography variant="body2" color="textPrimary">
              &copy; {new Date().getFullYear()} C-Hive
            </Typography>
          </Box>
        </Grid>
      </FooterRootGrid>
    </footer>
  );
};

export default Footer;
