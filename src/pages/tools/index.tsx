import Head from "next/head";

import { Box, Container } from "@mui/material";

import SideBar from "@/components/common/SideBar";

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

      <Box sx={{ display: "flex" }}>
        <SideBar />
        <Container>tools</Container>
      </Box>
    </>
  );
}
