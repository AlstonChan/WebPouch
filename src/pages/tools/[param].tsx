import Head from "next/head";

import { ReactElement } from "react";
import { client } from "@/tina/__generated__/client";
import tools, { toLink } from "data/toolsItemDetails";
// MaterialUI Import
import { Box, Typography } from "@mui/material";
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
import ToolsMobileStepper from "@/components/tools/ToolsMobileStepper";

const ToolsParam: NextPageWithLayout = ({
  data,
  query,
  pageData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const theme = useTheme();

  // styling
  const BoxStyle: SxProps<Theme> = {
    my: theme.spacing(3),
  };
  const BodyTextStyle: SxProps<Theme> = {
    mt: theme.spacing(1.5),
    lineHeight: "1.7rem",
    maxWidth: 1200,
  };
  const TableTextStyle: SxProps<Theme> = {
    mt: {
      lg: theme.spacing(6),
      md: theme.spacing(3),
      xs: theme.spacing(1),
    },
  };

  // component
  const showTableIfDataExists = data[0].comparisonInfo ? (
    <>
      <Box sx={TableTextStyle}>
        <Typography component="h2" variant="h4">
          Feature Comparison Table
        </Typography>
        <Typography paragraph variant="body1" sx={BodyTextStyle}>
          Here we listed some common feature for you compare and evaluate each
          tools side-by-side. You can then quickly identify the pros and cons of
          different options and make informed decisions based on your project
          needs. Do note that not all feature are listed here, some service and
          tool might have some additional function or add-ons that may just be
          what you want, so you&apos;d have to do your own research as well
        </Typography>
      </Box>

      <ToolsTable data={data} />
    </>
  ) : null;

  // tsx return statement
  return (
    <>
      <Head>
        <title>{`${pageData.title} - Devtools`}</title>
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
      <Typography variant="body1" sx={BodyTextStyle}>
        {pageData.subTitle}
      </Typography>
      <Grid2 container spacing={2.5} sx={BoxStyle}>
        {data &&
          data.map((single: any) => {
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
          })}
      </Grid2>

      {showTableIfDataExists}

      <ToolsMobileStepper query={query} />
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
    try {
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
    } catch (error) {
      console.error(error);
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
