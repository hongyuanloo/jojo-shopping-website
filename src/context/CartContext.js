import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  });
  return (
    <CartContext.Provider value={(cart, setCart)}>
      {children}
    </CartContext.Provider>
  );
};
