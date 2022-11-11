import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(null);
  const [fetchData, setFetchData] = useState(true);

  return (
    <ProductsContext.Provider
      value={{ productsData, setProductsData, fetchData, setFetchData }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
