import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, createContext } from "react";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Shop from "./pages/Shop";
import Test1 from "./Dummy/Test1";

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
          <Route path="/">
            <Route index element={<Products />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="createAccount" element={<CreateAccount />} />
            <Route path="shop" element={<Shop />} />
            <Route path="test" element={<Test1 />} />
          </Route>
        </Routes>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
