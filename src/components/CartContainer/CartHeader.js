import { Typography, Stack } from "@mui/material";

export default function CartHeader() {
  return (
    <Stack spacing={0} alignItems="center">
      <Typography variant="h6" color="text.secondary" pt={2}>
        Your Cart
      </Typography>
    </Stack>
  );
}
