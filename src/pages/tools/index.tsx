// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 Devtools Chan Alston

import Head from "next/head";

import { Container } from "@mui/material";
import ToolsLayout from "@/components/ToolsLayout";
import { ReactElement } from "react";

export default function Tools() {
  return (
    <>
      <Head>
        <title>Tools - Devtools</title>
        <meta name="title" content="Tools - Devtools" key="title" />
        <meta
          name="description"
          content="Entripel is a platform for web developers to easily access and compare different cloud services such as PaaS, IaaS, and DaaS. Its focus on free-tier services makes it an ideal tool for developers on a budget."
        />
      </Head>

      <Container>tools</Container>
    </>
  );
}

Tools.getLayout = (page: ReactElement) => {
  return <ToolsLayout>{page}</ToolsLayout>;
};
