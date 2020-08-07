import React, { FunctionComponent } from "react";

import ShowOnMobile from "components/elements/ShowOnMobile/ShowOnMobile";
import HideOnMobile from "components/elements/HideOnMobile/HideOnMobile";

import { DesktopBackground } from "./Background.style";

const Background: FunctionComponent = (props) => {
  return (
    <>
      <HideOnMobile>
        <DesktopBackground>{props.children}</DesktopBackground>
      </HideOnMobile>
      <ShowOnMobile>{props.children}</ShowOnMobile>
    </>
  );
};

export default Background;
