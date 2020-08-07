import styled from "styled-components";

import RootGrid from "components/elements/RootGrid/RootGrid";

export const FooterRootGrid = styled(RootGrid)((props) => {
  return {
    minHeight: props.theme.layout.footerMinHeightDesktop,
  };
});

export const IconImg = styled.img(() => {
  return {
    height: "24px",
  };
});
