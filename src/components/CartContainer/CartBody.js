import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CartSubTotal from "./CartSubTotal";
import { List, Divider, Button, Box } from "@mui/material";

export default function CartBody() {
  const { cart, setCart } = useContext(CartContext);

  function displayCartItems() {
    const cartItemsList = cart.items.map((cartItem) => {
      return (
        <CartItem
          key={cartItem.title}
          cartItem={cartItem}
          setCart={setCart}
          cart={cart}
        />
      );
    });
    return cartItemsList;
  }

  function ContinueShopping() {
    return (
      <Box textAlign="center" p={2}>
        <Button variant="contained" size="small">
          <Link to="/" style={{ textDecoration: "none" }}>
            CONTINUE SHOPPING
          </Link>
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <List sx={{ p: 3 }}>
        <Divider />
        <Box>
          {cart.totalQuantity === 0 ? <ContinueShopping /> : displayCartItems()}
        </Box>
        {cart.totalQuantity === 0 ? (
          ""
        ) : (
          <CartSubTotal totalPrice={cart.totalPrice} />
        )}
      </List>
    </Box>
  );
}
