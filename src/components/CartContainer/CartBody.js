import { List, Divider } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../App";
import CartItem from "./CartItem";
import CartSubTotal from "./CartSubTotal";

export default function CartBody() {
  const { cart } = useContext(CartContext);

  function displayCartItems() {
    const cartItemsList = cart.items.map((cartItem) => {
      return <CartItem key={cartItem.title} cartItem={cartItem} />;
    });
    return cartItemsList;
  }

  return (
    <List sx={{ p: 3 }}>
      <Divider />
      <div>
        {cart.totalQuantity === 0
          ? "Click Item to Add Cart"
          : displayCartItems()}
      </div>
      {cart.totalQuantity === 0 ? (
        ""
      ) : (
        <CartSubTotal totalPrice={cart.totalPrice} />
      )}
    </List>
  );
}
