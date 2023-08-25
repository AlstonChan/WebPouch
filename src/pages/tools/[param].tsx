// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import Head from "next/head";

import { ReactElement } from "react";
import { client } from "@/tina/__generated__/client";
import tools, { toLink, kebabToCamelCase } from "data/toolsItemDetails";
// MaterialUI Import
import { Box, Typography, Stack, Divider } from "@mui/material";
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
import ToolsAdditionalInfo from "@/components/tools/ToolsAdditionalInfo";
import ToolsBar from "@/components/tools/ToolsBar";

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
    lineHeight: "2rem",
    maxWidth: 1200,
    fontSize: {
      md: theme.typography.h6.fontSize,
      xs: theme.typography.body1.fontSize,
    },
  };
  const PageTitleStyle: SxProps<Theme> = {
    fontFamily: theme.typography.fontTitle,
  };
  const TableTextStyle: SxProps<Theme> = {
    mt: {
      lg: theme.spacing(6),
      md: theme.spacing(3),
      xs: theme.spacing(1),
    },
  };
  const ToolsBarDivider: SxProps<Theme> = {
    borderWidth: "2px",
    borderColor: theme.palette.secondary.main,
  };

  // component
  const showTableIfDataExists = data[0]?.comparisonInfo && (
    <>
      <Box sx={TableTextStyle}>
        <Typography component="h2" variant="h4" sx={PageTitleStyle}>
          Feature Comparison Table
        </Typography>
        <Typography paragraph sx={BodyTextStyle}>
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
  );

  const checkIfAdditionalInfoDataExists = data.find(
    (single: any) => single?.additionalInfo
  );

  const showAdditionalInfoIfDataExists = checkIfAdditionalInfoDataExists && (
    <>
      <Box sx={TableTextStyle}>
        <Typography component="h2" variant="h4" sx={PageTitleStyle}>
          Additional Information
        </Typography>
      </Box>

      <ToolsAdditionalInfo data={data} />
    </>
  );

  // tsx return statement
  return (
    <>
      <Typography component="h1" variant="h3" sx={PageTitleStyle}>
        {pageData.title}
      </Typography>
      <Typography variant="body1" sx={BodyTextStyle}>
        {pageData.subTitle}
      </Typography>
      <Divider orientation="horizontal" sx={{ my: 2, ...ToolsBarDivider }} />
      <Stack
        direction="column"
        divider={
          <Divider orientation="horizontal" flexItem sx={ToolsBarDivider} />
        }
        spacing={2}
      >
        {data &&
          data.map((single: any) => {
            return <ToolsBar data={single} key={single.title} />;
          })}
      </Stack>
      <Divider orientation="horizontal" sx={{ my: 2, ...ToolsBarDivider }} />

      {showAdditionalInfoIfDataExists}

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
      const camelCase = kebabToCamelCase(requestedDocument);
      const queryString: string = `${camelCase}Connection`;
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
