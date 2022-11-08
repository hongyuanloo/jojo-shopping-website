import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ProductCard from "../featuredProducts/ProductCard";
import { Colors } from "../../styles/theme";
import { CATEGORIES, SORTBY } from "./constants";
import {
  Grid,
  Select,
  Typography,
  Stack,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";

export default function ShopContainer() {
  const [productsData, setProductsData] = useState(null);
  const { cart, setCart } = useContext(CartContext);
  const [category, setCategory] = useState({
    selection: "All",
    api: "",
    title: "All Products",
  });
  const [sortBySelection, setSortBySelection] = useState(SORTBY.TitleAtoZ);

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

  function handleChangeCategory(event) {
    const selectedItem = event.target.value;
    switch (selectedItem) {
      case CATEGORIES.Clothes:
        setCategory({
          selection: selectedItem,
          api: `/categories/1`,
          title: selectedItem,
        });
        return;
      case CATEGORIES.Electronics:
        setCategory({
          selection: selectedItem,
          api: `/categories/2`,
          title: selectedItem,
        });
        return;
      case CATEGORIES.Furnitures:
        setCategory({
          selection: selectedItem,
          api: `/categories/3`,
          title: selectedItem,
        });
        return;
      case CATEGORIES.Shoes:
        setCategory({
          selection: selectedItem,
          api: `/categories/4`,
          title: selectedItem,
        });
        return;
      case CATEGORIES.Others:
        setCategory({
          selection: selectedItem,
          api: `/categories/5`,
          title: selectedItem,
        });
        return;
      case CATEGORIES.All:
        setCategory({
          selection: selectedItem,
          api: ``,
          title: `${selectedItem} Products`,
        });
        return;
      default:
        setCategory({ selection: "All", api: "", title: "All Products" });
        return;
    }
  }

  function handleChangeSortBy(event) {
    const selectedItem = event.target.value;
    const sortedData = productsData.slice();

    setSortBySelection(selectedItem);

    switch (selectedItem) {
      case SORTBY.TitleAtoZ:
      default:
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
        return;

      case SORTBY.TitleZtoA:
        sortedData.sort((a, b) => {
          const nameA = a.title.toUpperCase(); // ignore upper and lowercase
          const nameB = b.title.toUpperCase(); // ignore upper and lowercase
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        });
        setProductsData(sortedData);
        return;

      case SORTBY.PriceLowtoHigh:
        sortedData.sort((a, b) => a.price - b.price);
        setProductsData(sortedData);
        return;

      case SORTBY.PriceHightoLow:
        sortedData.sort((a, b) => b.price - a.price);
        setProductsData(sortedData);
        return;
    }
  }

  function displayCategoriesList() {
    const categoriesList = Object.keys(CATEGORIES);
    return categoriesList.map((category) => {
      return (
        <MenuItem
          key={category}
          value={category}
          sx={{ fontSize: { md: "1rem", sm: "0.9rem", xs: "0.8rem" } }}
        >
          {category}
        </MenuItem>
      );
    });
  }

  function displaySortByList() {
    const sortByList = Object.keys(SORTBY);
    return sortByList.map((sortItem) => {
      return (
        <MenuItem
          key={SORTBY[sortItem]}
          value={SORTBY[sortItem]}
          sx={{ fontSize: { md: "1rem", sm: "0.9rem", xs: "0.8rem" } }}
        >
          {SORTBY[sortItem]}
        </MenuItem>
      );
    });
  }

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
          <ProductCard product={product} cart={cart} setCart={setCart} />
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
        <Box sx={{ width: 140 }} px={2}>
          <FormControl fullWidth size="small">
            <InputLabel
              id="category-select-label"
              sx={{ fontSize: { md: "1rem", sm: "0.9rem", xs: "0.8rem" } }}
            >
              Category Filter
            </InputLabel>

            <Select
              labelId="category-select-label"
              id="category-select"
              value={category.selection}
              label="Category Filter"
              onChange={handleChangeCategory}
              sx={{
                fontSize: { md: "1rem", sm: "0.9rem", xs: "0.8rem" },
              }}
            >
              {displayCategoriesList()}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: 140 }} px={2}>
          <FormControl fullWidth size="small">
            <InputLabel
              id="sortby-select-label"
              sx={{ fontSize: { md: "1rem", sm: "0.9rem", xs: "0.8rem" } }}
            >
              Sort by
            </InputLabel>

            <Select
              labelId="sortby-select-label"
              id="sortby-select"
              value={sortBySelection}
              label="Sort by"
              onChange={handleChangeSortBy}
              sx={{
                fontSize: { md: "1rem", sm: "0.9rem", xs: "0.8rem" },
              }}
            >
              {displaySortByList()}
            </Select>
          </FormControl>
        </Box>
      </Stack>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container>{productsData && displayProducts()}</Grid>
      </Box>
    </Stack>
  );
}
