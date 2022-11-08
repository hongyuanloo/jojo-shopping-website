import ProductsList from "./ProductsList";
import { Colors } from "../../styles/theme";
import { Typography, Stack, Box } from "@mui/material";

export default function FeaturedProducts() {
  return (
    <Stack spacing={0} px={3} pb={6}>
      <Box sx={{ textAlign: "center" }} py={5}>
        <Typography variant="h5" color={Colors.text}>
          Featured Products
        </Typography>
      </Box>
      <ProductsList />
    </Stack>
  );
}
