import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../App";
import ProductCard from "../CardContainer/ProductCard";
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
  const CATEGORIES = {
    All: "All",
    Clothes: "Clothes",
    Electronics: "Electronics",
    Furnitures: "Furnitures",
    Shoes: "Shoes",
    Others: "Others",
  };
  const SORTBY = {
    TitleAtoZ: "Title, A to Z",
    TitleZtoA: "Title, Z to A",
    PriceLowtoHigh: "Price, low to high",
    PriceHightoLow: "Price, high to low",
  };
  const [category, setCategory] = useState({
    selection: "All",
    api: "",
    title: "All Products",
  });
  const [sortBySelection, setSortBySelection] = useState(SORTBY.TitleAtoZ);
  const [products, setProducts] = useState(null);

  const { cart, setCart } = useContext(CartContext);

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

          setProducts(sortedData);
          // console.log("data-length: ", data.length);
          // console.log("data: ", data[2]);
          //   console.log("data fetch ok.", data);
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
    let sortedData = products.slice();

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
        setProducts(sortedData);
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
        setProducts(sortedData);
        return;

      case SORTBY.PriceLowtoHigh:
        sortedData.sort((a, b) => a.price - b.price);
        setProducts(sortedData);
        return;

      case SORTBY.PriceHightoLow:
        sortedData.sort((a, b) => b.price - a.price);
        setProducts(sortedData);
        return;
    }
  }

  function MenuItemsCategoriesList() {
    const categories = Object.keys(CATEGORIES);
    return categories.map((category) => {
      return (
        <MenuItem key={category} value={category} sx={{ fontSize: "0.8rem" }}>
          {category}
        </MenuItem>
      );
    });
  }

  function MenuItemsSortByList() {
    const sortByList = Object.keys(SORTBY);
    return sortByList.map((sortItem) => {
      return (
        <MenuItem
          key={SORTBY[sortItem]}
          value={SORTBY[sortItem]}
          sx={{ fontSize: "0.8rem" }}
        >
          {SORTBY[sortItem]}
        </MenuItem>
      );
    });
  }

  function productsList() {
    // console.log("products: ", products);
    // console.log("products price: ", products[0].price); //number
    const productsList = products.map((product) => {
      return (
        <Grid key={product.id} item xs={6} md={3} p={2}>
          <ProductCard product={product} cart={cart} setCart={setCart} />
        </Grid>
      );
    });
    return productsList;
  }

  return (
    <Stack spacing={0} px={3}>
      <Box sx={{ textAlign: "center" }} pt={2}>
        <Typography variant="h6" color="text.secondary">
          {category.title}
        </Typography>
      </Box>

      <Stack spacing={0} px={0} direction="row">
        <Box sx={{ width: 140 }} px={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="category-select-label" sx={{ fontSize: "0.8rem" }}>
              Category Filter
            </InputLabel>

            <Select
              labelId="category-select-label"
              id="category-select"
              value={category.selection}
              label="Category Filter"
              onChange={handleChangeCategory}
              sx={{
                fontSize: "0.8rem",
              }}
            >
              {MenuItemsCategoriesList()}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: 140 }} px={2}>
          <FormControl fullWidth size="small">
            <InputLabel id="sortby-select-label" sx={{ fontSize: "0.8rem" }}>
              Sort by
            </InputLabel>

            <Select
              labelId="sortby-select-label"
              id="sortby-select"
              value={sortBySelection}
              label="Sort by"
              onChange={handleChangeSortBy}
              sx={{
                fontSize: "0.8rem",
              }}
            >
              {MenuItemsSortByList()}
            </Select>
          </FormControl>
        </Box>
      </Stack>

      <Box sx={{ flexGrow: 1 }} py={1}>
        <Grid container>{products && productsList()}</Grid>
      </Box>
    </Stack>
  );
}
