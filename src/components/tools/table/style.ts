import { TableCell, TableRow, Theme } from "@mui/material";
import { styled, tableCellClasses } from "@mui/material";

const tableCellClassesHead = (theme: Theme) => {
  return {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
    border: "none",
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

export const StickyTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    ...tableCellClassesHead(theme),
    left: 0,
    position: "sticky",
    zIndex: theme.zIndex.appBar + 2,
  },
  [`&.${tableCellClasses.body}`]: {
    ...tableCellClassesBody(theme),
    left: 0,
    position: "sticky",
    zIndex: theme.zIndex.appBar + 1,
  },
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.root}`]: {
    width: "200px",
  },
  [`&.${tableCellClasses.head}`]: tableCellClassesHead(theme),
  [`&.${tableCellClasses.body}`]: tableCellClassesBody(theme),
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
