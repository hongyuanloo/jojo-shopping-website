import { Colors } from "../../styles/theme";
import { Typography, Stack } from "@mui/material";

export default function CartHeader() {
  return (
    <Stack spacing={0} alignItems="center">
      <Typography variant="h6" color={Colors.text} pt={2}>
        Your Cart
      </Typography>
    </Stack>
  );
}
