import Head from "next/head";

import { Box, Typography } from "@mui/material";
import { useTheme, Theme, SxProps } from "@mui/material/styles";
import { client } from "@/tina/__generated__/client";

import { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "../_app";

import ToolsCard from "@/components/tools/ToolsCards";
import ToolsLayout from "@/components/ToolsLayout";

const Deployment: NextPageWithLayout = () => {
  const theme = useTheme();
  const [deploys, setDeploy] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const rawDocument = await client.queries.deploymentConnection();
      const rawData = rawDocument.data.deploymentConnection.edges;

      if (rawData) {
        const data = rawData.map((deploy) => {
          if (deploy) return deploy.node;
        });
        setDeploy(data);
      }
    })();
  }, []);

  const BoxStyle: SxProps<Theme> = {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
    my: theme.spacing(3),
  };

  return (
    <>
      <Head>
        <title>Deployments - Devtools</title>
        <meta name="title" content="Deployments - Devtools" key="title" />
        <meta
          name="description"
          content="Entripel is a platform for web developers to easily access and compare different cloud services such as PaaS, IaaS, and DaaS. Its focus on free-tier services makes it an ideal tool for developers on a budget."
        />
      </Head>

      <Typography component="h1" variant="h3">
        Deployment
      </Typography>
      <Typography
        variant="body1"
        maxWidth={800}
        sx={{ mt: theme.spacing(1.5) }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis neque
        recusandae necessitatibus natus nesciunt illum laboriosam corrupti,
        distinctio repellat? Quas?
      </Typography>
      <Box sx={BoxStyle}>
        {deploys
          ? deploys.map((deploy: any) => {
              return <ToolsCard data={deploy} key={deploy.title} />;
            })
          : null}
      </Box>
    </>
  );
};

Deployment.getLayout = (page: ReactElement) => {
  return <ToolsLayout>{page}</ToolsLayout>;
};

export default Deployment;
