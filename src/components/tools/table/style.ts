// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import {
  TableCell,
  TableRow,
  Theme,
  tableRowClasses,
  useMediaQuery,
} from "@mui/material";
import { styled, tableCellClasses } from "@mui/material";

const tableCellClassesHead = (theme: Theme) => {
  return {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
    fontSize: theme.typography.body1.fontSize,
  };
};

const tableCellClassesBody = (theme: Theme) => {
  return {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.secondary.light,
    fontSize: theme.typography.body2.fontSize,
  };
};

export const StickyTableCell = styled(TableCell)(({ theme }) => {
  const isVerySmall = useMediaQuery("(max-width:450px)");

  return {
    [`&.${tableCellClasses.head}`]: {
      ...tableCellClassesHead(theme),
      left: 0,
      position: isVerySmall ? "block" : "sticky",
      zIndex: theme.zIndex.appBar + 2,
    },
    [`&.${tableCellClasses.body}`]: {
      ...tableCellClassesBody(theme),
      left: 0,
      position: isVerySmall ? "block" : "sticky",
      zIndex: theme.zIndex.appBar + 1,
      backgroundColor: theme.palette.primary.main,
    },
    [`&.${tableCellClasses.body}:only-child`]: {
      fontSize: {
        md: theme.typography.h5.fontSize,
        xs: theme.typography.h6.fontSize,
      },
      fontWeight: "bold",
      borderBottom: "solid",
      borderColor: theme.palette.secondary.light,
      paddingTop: theme.spacing(5),
    },
  };
});

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.root}`]: {
    maxWidth: "200px",
  },
  [`&.${tableCellClasses.head}`]: tableCellClassesHead(theme),
  [`&.${tableCellClasses.body}`]: tableCellClassesBody(theme),
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  [`&.${tableRowClasses.root}:first-of-type > th`]: {
    paddingTop: theme.spacing(2),
  },
}));
