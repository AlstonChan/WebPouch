import React, { CSSProperties, useEffect, useState } from "react";
// MaterialUI Import
import { Table, TableBody, TableContainer } from "@mui/material";
import { TableHead, TableRow, Paper } from "@mui/material";
import { useTheme, Theme, SxProps } from "@mui/material/styles";
import { Done, Close } from "@mui/icons-material";
import { lime } from "@mui/material/colors";

import { StickyTableCell, StyledTableCell, StyledTableRow } from "./style";

interface ToolsTableProps {
  data: any;
}

export default function ToolsTable({ data }: ToolsTableProps) {
  const theme = useTheme();
  const [tableRow, setTableRow] = useState<any>(null);
  const [tinaObjectTitle, setTinaObjectTitle] = useState<any[]>([]);

  function formatCamelCase(input: string): string {
    // Replace all capital letters with a space followed by the capital letter
    const spaced = input.replace(/[A-Z]/g, (match) => ` ${match}`);
    // Capitalize the first letter and return the result
    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
  }

  useEffect(() => {
    const copiedData = [...data];

    // Loop through the copiedData to get a single document data
    copiedData.forEach((single: any) => {
      // delete __typename field if it exists under the document field
      if (single.comparisonInfo.__typename)
        delete single.comparisonInfo.__typename;

      // get the keys of comparisonInfo
      const keys = Object.keys(single.comparisonInfo);
      let keyArr: any = [];
      let keyArrOfArr: any = [];
      let tinaObjectTitle: string[] = [];

      keys.forEach((key) => {
        // if the field of comparisonInfo is an object instead
        // of a value, then loop through the object as this is
        // a nested tina object
        if (typeof single.comparisonInfo[key] === "object") {
          // init keyArr[key]
          keyArr[key] = {};
          tinaObjectTitle.push(key);

          // delete __typename field if it exists under the nested
          // tina object field
          if (single.comparisonInfo[key].__typename)
            delete single.comparisonInfo[key].__typename;

          // get the keys of nested object
          const keysOfKeys = Object.keys(single.comparisonInfo[key]);

          keysOfKeys.forEach((childKey) => {
            keyArrOfArr[childKey] = {
              [single.title]: single.comparisonInfo[key][childKey],
            };

            keyArr[key][childKey] = {
              [single.title]: keyArrOfArr[childKey][single.title],
            };
          });
        } else {
          keyArr[key] = { [single.title]: single.comparisonInfo[key] };
        }
      });

      // index all nested object key
      setTinaObjectTitle(tinaObjectTitle);

      setTableRow((prev: any) => {
        // if data has already been populated previously
        if (prev) {
          // Loop through the keys to get the document
          // field name
          keys.forEach((key) => {
            // get all the value of the document field
            const prevValues = Object.values(prev[key]);

            prevValues.forEach((value: any) => {
              // if the document field value is an object, then it
              // is an nested object
              if (typeof value === "object") {
                // get the nested object field name
                const objKey = Object.keys(prev[key]);

                // loop through the nested object field and
                // assign the value
                objKey.forEach((childKey: any) => {
                  prev[key][childKey][single.title] =
                    single.comparisonInfo[key][childKey];
                });
              } else {
                // else if it is not an object, directly
                // assign the value
                prev[key][single.title] = single.comparisonInfo[key];
              }
            });
          });

          return prev;
        } else {
          // if data is null
          return keyArr;
        }
      });
    });
  }, [data]);

  // component
  const tableHead = (
    <TableRow>
      <StickyTableCell></StickyTableCell>
      {data.map((single: any) => {
        return (
          <StyledTableCell component="th" align="center" key={single.title}>
            {single.title}
          </StyledTableCell>
        );
      })}
    </TableRow>
  );

  // styling
  const TableContainerStyle: SxProps<Theme> = {
    backgroundColor: theme.palette.primary.dark,
    overflowX: "auto",
    boxShadow: 0,
  };
  const NestedTableTitleStyle: SxProps<Theme> = {
    color: `${lime[400]} !important`,
  };
  const CaptionStyle: CSSProperties = {
    backgroundColor: theme.palette.secondary.main,
    width: "100%",
    padding: theme.spacing(2),
    textAlign: "left",
  };

  // tsx return statement
  return (
    <TableContainer component={Paper} sx={TableContainerStyle}>
      <Table aria-label="Comparison Table for site deployment platform">
        <caption style={CaptionStyle}>
          ** Do note that the data of this table shows{" "}
          <strong>FREE TIER ONLY</strong>
        </caption>
        <TableHead>{tableHead}</TableHead>
        <TableBody>
          {tableRow &&
            Object.keys(tableRow).map((row: any) => {
              if (!tinaObjectTitle.includes(row)) {
                return (
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
                );
              }

              const rowKeys = Object.keys(tableRow[row]);
              const isNested = rowKeys.some(
                (key) => typeof tableRow[row][key] === "object"
              );

              return (
                <React.Fragment key={row}>
                  <StyledTableRow>
                    <StickyTableCell component="th" scope="row">
                      {formatCamelCase(row)}
                    </StickyTableCell>
                  </StyledTableRow>

                  {isNested ? (
                    Object.entries(tableRow[row]).map(
                      ([product, value]: any) => (
                        <React.Fragment key={product}>
                          <StyledTableRow>
                            <StickyTableCell
                              align="left"
                              component="th"
                              sx={NestedTableTitleStyle}
                            >
                              {formatCamelCase(product)}
                            </StickyTableCell>

                            {Object.values(value).map(
                              (nestedTableValue: any, index: number) => (
                                <StyledTableCell align="center" key={index}>
                                  {typeof nestedTableValue === "boolean" ? (
                                    nestedTableValue ? (
                                      <Done color="success" />
                                    ) : (
                                      <Close color="warning" />
                                    )
                                  ) : nestedTableValue === "true" ? (
                                    <Done color="success" />
                                  ) : nestedTableValue === "false" ? (
                                    <Close color="warning" />
                                  ) : (
                                    nestedTableValue
                                  )}
                                </StyledTableCell>
                              )
                            )}
                          </StyledTableRow>
                        </React.Fragment>
                      )
                    )
                  ) : (
                    <StyledTableRow>
                      {Object.entries(tableRow[row]).map(
                        ([product, tableValue]) => {
                          const valueType = typeof tableValue;
                          const isBoolValue = valueType === "boolean";
                          const response: any = isBoolValue ? (
                            tableValue ? (
                              <Done color="success" />
                            ) : (
                              <Close color="warning" />
                            )
                          ) : tableValue === "true" ? (
                            <Done color="success" />
                          ) : tableValue === "false" ? (
                            <Close color="warning" />
                          ) : (
                            tableValue
                          );

                          return (
                            <StyledTableCell align="center" key={product}>
                              {response}
                            </StyledTableCell>
                          );
                        }
                      )}
                    </StyledTableRow>
                  )}
                </React.Fragment>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
