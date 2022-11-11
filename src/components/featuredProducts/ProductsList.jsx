import ProductCard from "./ProductCard";
import { useEffect, useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { Grid, Box } from "@mui/material";

export default function ProductsList() {
  const { productsData, setProductsData, fetchData } =
    useContext(ProductsContext);
  // const [productsData, setProductsData] = useState(null);

  useEffect(() => {
    const fetchData = function () {
      fetch(`${process.env.REACT_APP_FAKESTORE_API}/products?offset=0&limit=12`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`API response with Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setProductsData(data);
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        });
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchData]);

  function displayProducts() {
    const productItems = productsData.map((product) => {
      return (
        <Grid
          key={product.id}
          item
          xs={12}
          sm={6}
          md={4}
          p={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ProductCard product={product} />
        </Grid>
      );
    });
    return productItems;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>{productsData && displayProducts()}</Grid>
    </Box>
  );
}
