// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

// MaterialUI Import
import { Alert, AlertTitle, Box, Container, Typography } from "@mui/material";
import { useTheme, Theme, SxProps } from "@mui/material/styles";

interface AdditionalInfo {
  __typename: string;
  content: string;
}

export default function ToolsAdditionalInfo({ data }: { data: any }) {
  const theme = useTheme();

  // styling
  const InfoBoxStyle: SxProps<Theme> = {
    mt: theme.spacing(2),
    maxWidth: "1200px",
  };
  const InfoTextStyle: SxProps<Theme> = {
    lineHeight: "1.8rem",
    "& > a": {
      color: theme.palette.brightLink.main,
      textDecoration: `underline ${theme.palette.brightLink.main}73`,
      wordBreak: "break-all",
    },
    "& > a:hover": {
      textDecoration: `underline ${theme.palette.brightLink.main}`,
    },
  };

  // tsx return statement
  return (
    <Container maxWidth="xl">
      {data &&
        data.map((single: any) => {
          const additionalInfoData: AdditionalInfo[] = single.additionalInfo;
          const normalListItem = "InfoListItem";
          const warningListItem = "InfoListWarning";

          if (!additionalInfoData) return null;

          return (
            <Box sx={InfoBoxStyle} key={single.title}>
              <Typography component="h3" variant="h5">
                {single.title}
              </Typography>
              <ul>
                {additionalInfoData.map((info, index) => {
                  if (info.__typename.includes(normalListItem)) {
                    return (
                      <li key={index}>
                        <Typography
                          variant="body1"
                          sx={InfoTextStyle}
                          // The value is baked in to the html page in build
                          // time, so it isn't as dangerous as it should be, right?
                          dangerouslySetInnerHTML={{ __html: info.content }}
                        />
                      </li>
                    );
                  }

                  if (info.__typename.includes(warningListItem)) {
                    return (
                      <Alert
                        key={index}
                        severity="warning"
                        sx={{ ml: "-40px" }}
                      >
                        <AlertTitle>Warning</AlertTitle>
                        {info.content}
                      </Alert>
                    );
                  }

                  return null;
                })}
              </ul>
            </Box>
          );
        })}
    </Container>
  );
}
