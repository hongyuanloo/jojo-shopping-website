import { styled, Typography } from "@mui/material";
import { Colors } from "../theme";

export const ProductText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: Colors.text,
  fontSize: 16,
  [theme.breakpoints.down("sm")]: { fontSize: 17 },
}));
