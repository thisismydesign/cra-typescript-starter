import React, { FunctionComponent } from "react";

import Footer from "components/App/Layout/Footer/Footer";
import Header from "components/App/Layout//Header/Header";
import Background from "components/App/Layout/Background/Background";
import { Container, Divider, Box } from "@material-ui/core";

import { FooterWrapper, HeaderWrapper, Main } from "./Layout.style";

const Layout: FunctionComponent = (props) => {
  return (
    <Background>
      <Container>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <Main>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            flex="1"
          >
            {props.children}
            <Divider />
          </Box>
        </Main>
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Container>
    </Background>
  );
};

export default Layout;
