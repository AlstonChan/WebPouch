import { useEffect, useState } from "react";
// MaterialUI Import
import { useTheme, Theme, SxProps } from "@mui/material/styles";
import { MobileStepper, Box, Button, Divider } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

import { design, webDevelopment } from "data/toolsRoute";
import { toLink } from "data/toolsItemDetails";

// type import
import { ToolsTitleSlug } from "data/types";

const pages = [...webDevelopment, ...design];
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
  const ifPageIsFirstPage = firstPage
    ? "/tools"
    : toLink(pages[activePage - 1].title);

  const leftBtnHref = pages ? ifPageIsFirstPage : "/tools";

  const leftBtn = (
    <Button size="large" href={leftBtnHref} color="info" sx={BtnStyle}>
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
    <Button size="large" href={rightBtnHref} color="info" sx={BtnStyle}>
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
