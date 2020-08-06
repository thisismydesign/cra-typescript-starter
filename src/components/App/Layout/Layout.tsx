import React, { FunctionComponent } from "react";

import Footer from "components/App/Layout/Footer/Footer";
import Header from "components/App/Layout//Header/Header";

import { FooterWrapper, HeaderWrapper, Main } from "./Layout.style";

const Layout: FunctionComponent = (props) => {
  return (
    <>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <Main>{props.children}</Main>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  );
};

export default Layout;
