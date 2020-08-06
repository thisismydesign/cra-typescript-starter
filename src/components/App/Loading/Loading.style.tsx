import styled from "styled-components";

export const LoadingWrapper = styled.div((_props) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // TODO: couldn't solve to fill full heigth
    height: "500px",
  };
});
