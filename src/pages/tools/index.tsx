// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import Head from "next/head";

import { ReactElement } from "react";
// MaterialUI Import
import { Container, Typography } from "@mui/material";
import { useTheme, Theme, SxProps } from "@mui/material/styles";

import ToolsLayout from "@/components/ToolsLayout";

export default function Tools() {
  const theme = useTheme();

  const PageTitleStyle: SxProps<Theme> = {
    fontFamily: theme.typography.fontTitle,
  };

  return (
    <>
      <Head>
        <title>Tools - WebPouch</title>
        <meta name="title" content="Tools - WebPouch" key="title" />
        <meta
          name="description"
          content="WebPouch is a platform for web developers to easily access and compare different cloud services such as PaaS, IaaS, and DaaS. Its focus on free-tier services makes it an ideal tool for developers on a budget."
        />
      </Head>

      <Container>
        <Typography component="h1" variant="h3" sx={PageTitleStyle}>
          Tools
        </Typography>
      </Container>
    </>
  );
}

Tools.getLayout = (page: ReactElement) => {
  return <ToolsLayout>{page}</ToolsLayout>;
};
