import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

export const CartContext = createContext();
// router ref: https://www.w3schools.com/react/react_router.asp
function App() {
  const [cart, setCart] = useState({
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  });
  return (
    <Router>
      <CartContext.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
