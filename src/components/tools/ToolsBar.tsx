// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

// MaterialUI Import
import { Box, Typography, Avatar, Link } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useTheme, Theme, SxProps } from "@mui/material/styles";

interface BarProps {
  data: any;
}

export default function ToolsBar({ data }: BarProps) {
  const theme = useTheme();

  const targetSiteUrl = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${data.siteLink}&size=32`;

  const BarContainer: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
  };
  const BarHeader: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <Box sx={BarContainer}>
      <Box sx={BarHeader}>
        <Avatar
          alt={data.title}
          src={targetSiteUrl}
          sx={{ width: 32, height: 32 }}
          variant="square"
        />
        <Link
          href={data.siteLink}
          target="_blank"
          rel="no-referrer"
          underline="hover"
          color={theme.palette.brightLink.main}
        >
          <Typography
            variant="h6"
            component="p"
            sx={{ fontWeight: "bold", ml: 1.5 }}
          >
            {data.title}
          </Typography>
        </Link>
      </Box>
      <Typography variant="body2" sx={{ mt: 1 }}>
        {data.description}
      </Typography>
      {data.descriptionOfFreePlan && (
        <Typography variant="body2" sx={{ mt: 1, color: grey[500] }}>
          <strong>Free Tier Highlight:</strong> <br />
          {data.descriptionOfFreePlan}
        </Typography>
      )}
    </Box>
  );
}
