import { Box, styled, Typography } from "@mui/material";

export const AutoSliderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "30px 0px",
  overflow: "hidden",
  background: "lightblue",
  [theme.breakpoints.down("md")]: {
    padding: "25px 0px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "20px 0px",
  },
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  color: "white",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
}));
