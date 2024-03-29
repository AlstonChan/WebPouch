// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import { Box, Container, Typography, IconButton } from "@mui/material";
import { useTheme, Theme, SxProps } from "@mui/material/styles";
import { GitHub, Web } from "@mui/icons-material";

export default function Footer() {
  const theme = useTheme();

  const containerStyles: SxProps<Theme> = {
    display: "flex",
    alignContent: "center",
    flexDirection: "column",
    my: theme.spacing(2),
  };

  return (
    <Container component="footer" maxWidth={false} sx={containerStyles}>
      <Typography variant="h6" paragraph sx={{ mb: 0, textAlign: "center" }}>
        Copyright © 2023 Chan Alston.
      </Typography>
      <Box sx={{ textAlign: "center" }}>
        <IconButton
          component="a"
          href="https://github.com/AlstonChan/WebPouch"
          target="_blank"
          referrerPolicy="no-referrer"
          aria-label="Github"
          aria-haspopup="false"
        >
          <GitHub fontSize="large" />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.chanalston.com"
          target="_blank"
          aria-label="Site author website"
          aria-haspopup="false"
        >
          <Web fontSize="large" />
        </IconButton>
      </Box>
    </Container>
  );
}
