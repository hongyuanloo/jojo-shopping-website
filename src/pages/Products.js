import FeaturedProducts from "../components/featuredProducts";
import NavigationBar from "../components/navigationBar";
import { Box } from "@mui/material";

export default function Products() {
  return (
    <Box>
      <NavigationBar />
      <FeaturedProducts />
    </Box>
  );
}
