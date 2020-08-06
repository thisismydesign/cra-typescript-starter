import React, { FunctionComponent } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { LoadingWrapper } from "./Loading.style";

const Loading: FunctionComponent = () => {
  return (
    <LoadingWrapper>
      <CircularProgress />
    </LoadingWrapper>
  );
};

export default Loading;
