import { useEffect, useState } from "react";
// MaterialUI Import
import { Table, TableBody, TableContainer } from "@mui/material";
import { TableHead, TableRow, Paper } from "@mui/material";
import { Done, Close } from "@mui/icons-material";

import { StickyTableCell, StyledTableCell, StyledTableRow } from "./style";

interface ToolsTableProps {
  data: any;
}

export default function ToolsTable({ data }: ToolsTableProps) {
  const [tableRow, setTableRow] = useState<any>(null);

  function formatCamelCase(input: string): string {
    // Replace all capital letters with a space followed by the capital letter
    const spaced = input.replace(/[A-Z]/g, (match) => ` ${match}`);
    // Capitalize the first letter and return the result
    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
  }

  useEffect(() => {
    const copiedData = [...data];
    copiedData.forEach((single: any) => {
      delete single.comparisonInfo.__typename;
      const keys = Object.keys(single.comparisonInfo);
      let keyArr: any = [];

      keys.forEach((key) => {
        keyArr[key] = { [single.title]: single.comparisonInfo[key] };
      });

      setTableRow((prev: any) => {
        if (prev) {
          keys.forEach((key) => {
            prev[key][single.title] = single.comparisonInfo[key];
          });

          return prev;
        } else {
          return keyArr;
        }
      });
    });
  }, [data]);

  // tsx return statement
  return (
    <TableContainer component={Paper} sx={{ overflowX: "auto", boxShadow: 0 }}>
      <Table aria-label="Comparison Table for site deployment platform">
        <TableHead>
          <TableRow>
            <StickyTableCell></StickyTableCell>
            {data.map((single: any) => {
              return (
                <StyledTableCell
                  component="th"
                  align="center"
                  key={single.title}
                >
                  {single.title}
                </StyledTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRow &&
            Object.keys(tableRow).map((row: any) => (
              <StyledTableRow key={row}>
                <StickyTableCell component="th" scope="row">
                  {formatCamelCase(row)}
                </StickyTableCell>

                {Object.keys(tableRow[row]).map((product: any) => (
                  <StyledTableCell align="center" key={product}>
                    {typeof tableRow[row][product] === "boolean" ? (
                      tableRow[row][product] ? (
                        <Done color="success" />
                      ) : (
                        <Close color="warning" />
                      )
                    ) : (
                      tableRow[row][product]
                    )}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
