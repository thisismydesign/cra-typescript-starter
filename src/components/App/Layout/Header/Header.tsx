import React, { FunctionComponent } from "react";
import { Box, Typography } from "@material-ui/core";

import logoImg from "resources/logo-45x45.png";
import LinkNoDecor from "components/elements/LinkNoDecor/LinkNoDecor";

import { HeaderWrapper, LogoImage } from "./Header.style";

const Header: FunctionComponent = () => {
  return (
    <header>
      <HeaderWrapper
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <LinkNoDecor to="/" color="inherit">
          <Box display="flex" alignItems="center">
            <Box p={2}>
              <LogoImage src={logoImg} />
            </Box>
            <Typography variant="h5" color="textPrimary">
              Unicorn
            </Typography>
          </Box>
        </LinkNoDecor>
      </HeaderWrapper>
    </header>
  );
};

export default Header;
