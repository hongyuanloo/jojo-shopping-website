import { useEffect, useState, useContext } from "react";
import ProductCard from "./ProductCard";
import { Grid, Typography, Stack, Box } from "@mui/material";
import { CartContext } from "../../App";

export default function CardContainer() {
  const [products, setProducts] = useState(null);
  const { cart, setCart } = useContext(CartContext);

  // console.log("before use effect", cart);
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
          setProducts(data);
          // console.log("data-length: ", data.length);
          // console.log("data: ", data[2]);
          // console.log("data fetch ok.", data);
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        });
    };
    fetchData();
  }, []);

  function display() {
    const productsList = products.map((product) => {
      return (
        <Grid key={product.id} item xs={6} md={3} p={2}>
          <ProductCard product={product} cart={cart} setCart={setCart} />
        </Grid>
      );
    });
    return productsList;
  }
  console.log(
    "REACT_APP_FIREBASE_APIKEY: ",
    process.env.REACT_APP_FIREBASE_APIKEY
  );
  console.log(
    "REACT_APP_FIREBASE_AUTHDOMAIN: ",
    process.env.REACT_APP_FIREBASE_AUTHDOMAIN
  );

  return (
    <Stack spacing={0} px={3}>
      <Box sx={{ textAlign: "center" }} pt={2}>
        <Typography variant="h6" color="text.secondary">
          Featured Products
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }} py={1}>
        <Grid container>{products && display()}</Grid>
      </Box>
    </Stack>
  );
}
