// MaterialUI Import
import { GitHub } from "@mui/icons-material";
import { Card, CardHeader, CardMedia, CardContent } from "@mui/material/";
import { Divider, Chip, Avatar } from "@mui/material/";
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
      {data.githubInfo && (
        <Box sx={{ pt: theme.spacing(1) }}>
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
