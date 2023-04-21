import Head from "next/head";

import { ReactElement } from "react";
import { client } from "@/tina/__generated__/client";
import tools, { toLink } from "data/toolsItemDetails";
// MaterialUI Import
import { Typography } from "@mui/material";
import { useTheme, Theme, SxProps } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";

// type import
import type { NextPageWithLayout } from "../_app";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";

// component and layout import
import ToolsCard from "@/components/tools/ToolsCards";
import ToolsLayout from "@/components/ToolsLayout";
import ToolsTable from "@/components/tools/table/ToolsTable";

const ToolsParam: NextPageWithLayout = ({
  data,
  query,
  pageData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const theme = useTheme();

  const BoxStyle: SxProps<Theme> = {
    my: theme.spacing(3),
  };

  return (
    <>
      <Head>
        <title>{pageData.title} - Devtools</title>
        <meta
          name="title"
          content={`${pageData.title} - Devtools`}
          key="title"
        />
        <meta name="description" content={pageData.metaDescription} />
      </Head>

      <Typography component="h1" variant="h3">
        {pageData.title}
      </Typography>
      <Typography
        variant="body1"
        maxWidth={1200}
        sx={{ mt: theme.spacing(1.5), lineHeight: "1.7rem" }}
      >
        {pageData.subTitle}
      </Typography>
      <Grid2 container spacing={2.5} sx={BoxStyle}>
        {data
          ? data.map((single: any) => {
              return (
                <Grid2
                  xl-lg={3}
                  lg-md={4}
                  md={6}
                  sm={12}
                  xs={12}
                  key={single.title}
                >
                  <ToolsCard data={single} />
                </Grid2>
              );
            })
          : null}
      </Grid2>
      <ToolsTable data={data} />
    </>
  );
};

// Page Layout
ToolsParam.getLayout = (page: ReactElement) => {
  return <ToolsLayout>{page}</ToolsLayout>;
};

export default ToolsParam;

// getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  interface Route {
    params: {
      param: string;
    };
  }

  const allItemTitle: string[] = Object.keys(tools);
  const route: Route[] = allItemTitle.map((item: string): Route => {
    return { params: { param: toLink(tools[item].title, false) } };
  });

  return {
    paths: route,
    fallback: false,
  };
};

// getStaticProps
export const getStaticProps: GetStaticProps = async (context) => {
  const requestedDocument: string | string[] | undefined =
    context.params?.param;

  // if requestDocument is not undefined and is a string
  if (requestedDocument && !Array.isArray(requestedDocument)) {
    // TODO; have proper type definitions
    // I surrender getting the correct type definition here
    const queryString: string = `${requestedDocument}Connection`;
    const tinaConnection = (client.queries as any)[`${queryString}`];

    const rawDocument = await tinaConnection();
    const rawData = rawDocument.data[`${queryString}`].edges;

    // if the rawData can be successfully queried
    if (rawData) {
      const data = rawData.map((single: any) => {
        if (single) return single.node;
      });

      return {
        props: {
          data,
          query: requestedDocument,
          pageData: tools[requestedDocument],
        },
      };
    } else {
      // else return page not found with status code 404
      return {
        notFound: true,
      };
    }
  } else {
    // else return page not found with status code 404
    return {
      notFound: true,
    };
  }
};
