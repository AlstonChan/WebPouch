// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import { useEffect, useState } from "react";
// MaterialUI Import
import { useTheme, Theme, SxProps } from "@mui/material/styles";
import { MobileStepper, Box, Button, Divider } from "@mui/material";
import {
  Handyman,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";

import { design, webDevelopment } from "data/toolsRoute";
import { toLink } from "data/toolsItemDetails";

// type import
import type { NavList, ToolsTitleSlug } from "data/types";

const root: NavList = { title: "Tools", icon: <Handyman /> };
let pages = [root, ...webDevelopment];
const maxPages = pages.length;

export default function ToolsMobileStepper({
  query,
}: {
  query: ToolsTitleSlug;
}) {
  const theme = useTheme();
  const [activePage, setActivePage] = useState<number>(0);

  const firstPage: boolean = activePage === 0;
  const lastPage: boolean = activePage === maxPages - 1;

  useEffect(() => {
    pages.forEach((page, index) => {
      if (toLink(page.title, false) === query) {
        setActivePage(index);
      }
    });
  }, [query]);

  // styling
  const BtnStyle: SxProps<Theme> = {
    borderRadius: theme.spacing(1),
  };

  // component
  // left element
  // if the current page is the first page,
  // put a dummy link (/tools) at the left, (user can never click)
  // else if it is not at the first page,
  // check if it is the previous page is the root page (/tools)
  // if it is, don't attach base path to prevent /tools/tools
  const ifPageIsFirstPage = firstPage
    ? "/tools"
    : pages[activePage - 1].title === "Tools"
    ? `/${toLink(pages[activePage - 1].title, false)}`
    : toLink(pages[activePage - 1].title);

  const leftBtnHref = pages ? ifPageIsFirstPage : "/tools";

  const leftBtn = (
    <Button
      size="large"
      href={leftBtnHref}
      color="info"
      sx={BtnStyle}
      disabled={firstPage}
    >
      {firstPage ? null : (
        <>
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          {pages ? (firstPage ? "" : pages[activePage - 1].title) : "Back"}
        </>
      )}
    </Button>
  );

  // right element
  const ifPageIsLastPage = lastPage
    ? "/tools"
    : toLink(pages[activePage + 1].title);

  const rightBtnHref = pages ? ifPageIsLastPage : "/tools";

  const nextBtn = (
    <Button
      size="large"
      href={rightBtnHref}
      color="info"
      sx={BtnStyle}
      disabled={lastPage}
    >
      {lastPage ? null : (
        <>
          {pages ? (lastPage ? "" : pages[activePage + 1].title) : "Next"}
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </>
      )}
    </Button>
  );

  // tsx return statement
  return (
    <Box sx={{ pt: theme.spacing(10) }}>
      <Divider />
      <MobileStepper
        sx={{ py: theme.spacing(3) }}
        variant="text"
        steps={maxPages}
        position="static"
        activeStep={activePage}
        backButton={leftBtn}
        nextButton={nextBtn}
      />
    </Box>
  );
}
