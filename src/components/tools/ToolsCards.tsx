// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

// MaterialUI Import
import { GitHub, Home } from "@mui/icons-material";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Tooltip,
} from "@mui/material/";
import { Divider, Chip } from "@mui/material/";
import { Typography, Link, Box } from "@mui/material/";
import { useTheme, Theme, SxProps } from "@mui/material/styles";

interface CardProps {
  data: any;
}

export default function ToolsCard({ data }: CardProps) {
  const theme = useTheme();

  // styling
  const CardStyle: SxProps<Theme> = {
    maxWidth: 345,
    height: "100%",
    mx: "auto",
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: theme.spacing(1.5),
  };
  const CardMediaStyle: SxProps<Theme> = {
    width: "90%",
    objectFit: "contain",
    my: theme.spacing(3),
  };
  const CardSmallMediaStyle: SxProps<Theme> = {
    position: "absolute",
    width: "auto",
    right: theme.spacing(4),
    bottom: theme.spacing(3),
    background: theme.palette.primary.dark,
    borderRadius: "9999px",
    padding: theme.spacing(1),
  };
  const CardHeaderStyle: SxProps<Theme> = {
    textAlign: "center",
  };
  const SubHeaderChipBoxStyle: SxProps<Theme> = {
    pt: theme.spacing(1),
    display: "inline-block",
    width: "fit-content",
    // the first type is the Box component that holds the
    // link, the second element have no element on its left
    // side, so padding left is redundant.
    "&:not(:first-of-type):not(:nth-of-type(2))": {
      pl: theme.spacing(1),
    },
  };

  // component
  const subHeaderLink = (
    <Box sx={{ mt: theme.spacing(0.3) }}>
      <Box>
        <Link
          color={theme.palette.brightLink.main}
          href={data.siteLink}
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Visit Site
        </Link>
        {data.pricingPage && (
          <>
            &nbsp;|&nbsp;
            <Link
              color={theme.palette.brightLink.main}
              href={data.pricingPage}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              Pricing Page
            </Link>
          </>
        )}
      </Box>
      {data.githubInfo && (
        <Box sx={SubHeaderChipBoxStyle}>
          <Link
            href={data.githubInfo.githubLink}
            target="_blank"
            rel="no-referrer"
          >
            <Chip
              avatar={<GitHub />}
              label={data.githubInfo.githubStars}
              variant="filled"
              sx={{ cursor: "pointer" }}
            />
          </Link>
        </Box>
      )}
      {data.selfHost && (
        <Box sx={SubHeaderChipBoxStyle}>
          <Tooltip title="Can be Self Hosted">
            <Chip
              avatar={<Home />}
              label="Self Host"
              variant="filled"
              sx={{ cursor: "pointer" }}
            />
          </Tooltip>
        </Box>
      )}
    </Box>
  );

  // tsx return statement
  return (
    <Card sx={CardStyle}>
      <Box
        sx={{ position: "relative", display: "flex", justifyContent: "center" }}
      >
        <CardMedia
          component="img"
          height="194"
          image={data.thumbnail}
          alt={data.title}
          sx={CardMediaStyle}
        />
        {data.addOnThumbnail && (
          <CardMedia
            component="img"
            height="80"
            image={data.addOnThumbnail.image}
            alt={data.addOnThumbnail.title}
            sx={CardSmallMediaStyle}
          />
        )}
      </Box>
      <CardHeader
        title={data.title}
        subheader={subHeaderLink}
        sx={CardHeaderStyle}
      />
      <CardContent sx={{ pt: theme.spacing(0.5) }}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: "1.6rem" }}
        >
          {data.description}
        </Typography>
        {data.descriptionOfFreePlan && (
          <>
            <Divider sx={{ mt: theme.spacing(2), mb: theme.spacing(1.5) }}>
              Free Tier Highlight
            </Divider>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: "1.6rem" }}
            >
              {data.descriptionOfFreePlan}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
}
