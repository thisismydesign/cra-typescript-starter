import styled from "styled-components";

import Desktop from "resources/background.png";

export const DesktopBackground = styled.div(() => {
  return {
    backgroundImage: `url(${Desktop})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "40% auto",
    backgroundPosition: "right top",
  };
});
