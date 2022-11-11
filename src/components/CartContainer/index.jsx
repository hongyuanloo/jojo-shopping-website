import CartHeader from "./CartHeader";
import CartBody from "./CartBody";
import Footer from "../footer";
import { Box } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartContainer() {
  const { cart } = useContext(CartContext);

  return (
    <Box postion="relative">
      <CartHeader />
      <CartBody />
      <Box
        position="absolute"
        {...(cart.totalQuantity === 0 ? { bottom: "0" } : "")}
      >
        <Footer />
      </Box>
    </Box>
  );
}
