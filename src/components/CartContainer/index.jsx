import CartHeader from "./CartHeader";
import CartBody from "./CartBody";
import Footer from "../footer";
import { Box } from "@mui/material";

export default function CartContainer() {
  return (
    <Box>
      <CartHeader />
      <CartBody />
      <Footer />
    </Box>
  );
}
