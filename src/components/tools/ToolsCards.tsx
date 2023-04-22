import { Deployment } from ".tina/__generated__/types";
// MaterialUI Import
import { Card, CardHeader, CardMedia, CardContent } from "@mui/material/";
import { Typography, Link, Box } from "@mui/material/";
import { useTheme, Theme, SxProps } from "@mui/material/styles";

interface CardProps {
  data: Deployment;
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
    objectFit: "contain",
    my: theme.spacing(3),
  };
  const CardHeaderStyle: SxProps<Theme> = {
    textAlign: "center",
  };

  // component
  const subHeaderLink = (
    <Box sx={{ mt: theme.spacing(0.3) }}>
      <Link
        color={theme.palette.brightLink.main}
        href={data.siteLink}
        target="_blank"
        referrerPolicy="no-referrer"
      >
        Visit Site
      </Link>
      &nbsp;|&nbsp;
      <Link
        color={theme.palette.brightLink.main}
        href={data.pricingPage ? data.pricingPage : ""}
        target="_blank"
        referrerPolicy="no-referrer"
      >
        Pricing Page
      </Link>
    </Box>
  );

  // tsx return statement
  return (
    <Card sx={CardStyle}>
      <CardMedia
        component="img"
        height="194"
        image={data.thumbnail}
        alt={data.title}
        sx={CardMediaStyle}
      />
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
      </CardContent>
    </Card>
  );
}
