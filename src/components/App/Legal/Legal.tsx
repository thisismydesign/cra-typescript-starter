import React, { FunctionComponent } from "react";
import ReactMarkdown from "react-markdown";
import raw from "raw.macro";
import { Box, Container } from "@mui/material";
import { Helmet } from "react-helmet";

const Legal: FunctionComponent = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Legal | CRA Typescript Starter by C-Hive</title>
      </Helmet>
      <Box p={1} pt={[2, 4]} pb={[4, 8]}>
        <Container>
          <ReactMarkdown>{raw("../../../resources/legal.md")}</ReactMarkdown>
        </Container>
      </Box>
    </>
  );
};

export default Legal;
