import { useEffect, useState } from "react";
import ProductCard from "../featuredProducts/ProductCard";
import { Colors } from "../../styles/theme";
import { Grid, Typography, Stack, Box } from "@mui/material";
import CategoryFilter from "./CategoryFilter";
import SortByFilter from "./SortByFilter";

export default function ShopContainer() {
  const [productsData, setProductsData] = useState(null);
  const [category, setCategory] = useState({
    selection: "All",
    api: "",
    title: "All Products",
  });

  useEffect(() => {
    const fetchData = function () {
      fetch(
        `${process.env.REACT_APP_FAKESTORE_API}${category.api}/products?offset=0&limit=12`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`API response with Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          const sortedData = data.slice();
          //Default sort title ascending
          sortedData.sort((a, b) => {
            const nameA = a.title.toUpperCase(); // ignore upper and lowercase
            const nameB = b.title.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
          });

          setProductsData(sortedData);
        })
        .catch((error) => {
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        });
    };
    fetchData();
  }, [category]);

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
    <Stack spacing={0} px={3} pb={6}>
      <Box sx={{ textAlign: "center" }} pt={5}>
        <Typography variant="h5" color={Colors.text}>
          {category.title}
        </Typography>
      </Box>

      <Stack spacing={0} py={3} direction="row">
        <CategoryFilter category={category} setCategory={setCategory} />
        <SortByFilter
          productsData={productsData}
          setProductsData={setProductsData}
        />
      </Stack>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container>{productsData && displayProducts()}</Grid>
      </Box>
    </Stack>
  );
}
