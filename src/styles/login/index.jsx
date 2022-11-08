import { styled, Typography } from "@mui/material";
import { Colors } from "../theme";

export const FooterText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: Colors.text,
  fontSize: "12px",
}));
