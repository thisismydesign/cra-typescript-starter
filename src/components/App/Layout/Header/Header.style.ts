import styled from "styled-components";
import { Box } from "@mui/material";

export const LogoImage = styled.img(() => {
  return {
    width: "45px",
  };
});

export const HeaderWrapper = styled(Box)((props) => {
  return {
    position: "fixed",
    top: 0,
    width: "100%",
    height: props.theme.layout.headerHeight,
  };
});

export const ButtonWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
