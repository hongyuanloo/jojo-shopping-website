import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Grid, Typography, Stack } from "@mui/material";

export default function CardContainer() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=12")
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
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  function display() {
    const productsList = products.map((product) => {
      return (
        <Grid key={product.id} item xs={6} md={3} p={2}>
          <ProductCard product={product} />
        </Grid>
      );
    });
    return productsList;
  }

  return (
    <Stack spacing={0} alignItems="center">
      <Typography variant="h6" color="text.secondary" pt={2}>
        Featured Products
      </Typography>
      <Grid container p={3}>
        {products === null ? "" : display()}
      </Grid>
    </Stack>
  );
}
