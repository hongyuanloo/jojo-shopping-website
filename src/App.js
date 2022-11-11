import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import { CartContextProvider } from "./context/CartContext";
import { ProductsContextProvider } from "./context/ProductsContext";

// import Test1 from "./Dummy/Test1";

// router ref: https://www.w3schools.com/react/react_router.asp
function App() {
  return (
    <Router>
      <ProductsContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              {/* <Route index element={<Products />} /> */}
              <Route path="home" element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="cart" element={<Cart />} />
              <Route path="login" element={<Login />} />
              <Route path="createAccount" element={<CreateAccount />} />
              {/* <Route path="test" element={<Test1 />} /> */}
            </Route>
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </Router>
  );
}

export default App;
