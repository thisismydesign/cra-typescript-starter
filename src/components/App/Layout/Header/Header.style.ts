import styled from "styled-components";
import { Box } from "@material-ui/core";

export const LogoImage = styled.img(() => {
  return {
    width: "45px",
  };
});

export const HeaderWrapper = styled(Box)((props) => {
  return {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: props.theme.layout.headerHeight,
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.05)",
    backgroundColor: "#ffffff",
  };
});

export const ButtonWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
