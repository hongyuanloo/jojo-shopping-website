import { styled, Typography, Box } from "@mui/material";

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px",
  backgroundColor: "#F5F2EB",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  maxWidth: "500px",
  [theme.breakpoints.down("md")]: { maxWidth: "350px" },
  [theme.breakpoints.down("sm")]: { maxWidth: "300px" },
}));

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 420,
  padding: "30px",
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.5,
  fontSize: "60px",
  marginBottom: "20px",
  [theme.breakpoints.down("md")]: { fontSize: "40px" },
  [theme.breakpoints.down("sm")]: { fontSize: "30px" },
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("sm")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));
