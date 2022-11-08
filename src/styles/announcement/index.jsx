import { styled, Box, Typography } from "@mui/material";

import { Colors } from "../theme";

export const AnnouncementContainer = styled(Box)({
  height: 30,
  backgroundColor: "#F5F2EB",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // "&:hover": {
  //   backgroundColor: "#F5F2EB",
  //   opacity: 0.8,
  // },
});

export const AnnouncementText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  letterSpacing: "0.05em",
  color: Colors.text,
  [theme.breakpoints.down("sm")]: { fontSize: "0.9rem" },
}));
