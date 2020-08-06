import styled from "styled-components";

import useIsDesktopLayout from "utils/useIsDesktopLayout";

const useFooterMinHeight = (desktop: string, mobile: string): string => {
  const isDesktopLayout = useIsDesktopLayout();
  return isDesktopLayout ? desktop : mobile;
};

export const HeaderWrapper = styled.div((props) => {
  return { height: props.theme.layout.headerHeight };
});

export const Main = styled.div((props) => {
  const footerMinHeight = useFooterMinHeight(
    props.theme.layout.footerMinHeightDesktop,
    props.theme.layout.footerMinHeightMobile
  );

  return {
    minHeight: `calc(100vh - ${props.theme.layout.headerHeight} - ${footerMinHeight})`,
  };
});

export const FooterWrapper = styled.div((props) => {
  const footerMinHeight = useFooterMinHeight(
    props.theme.layout.footerMinHeightDesktop,
    props.theme.layout.footerMinHeightMobile
  );

  return {
    minHeight: footerMinHeight,
  };
});
