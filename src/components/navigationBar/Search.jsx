import { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { Box, TextField } from "@mui/material";

export default function SearchContainer() {
  const { productsData, setProductsData, setFetchData } =
    useContext(ProductsContext);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    const input = event.target.value;
    setSearchInput(input);
    if (productsData !== null) {
      const result = productsData.filter((item) => {
        return item.title.toLowerCase().includes(input);
      });
      setProductsData(result);
      //   console.log("result: ", result);
    }
  };

  const handleSubmit = (event) => {
    //re-fetch data on "Enter"
    event.preventDefault();
    setFetchData((prev) => !prev);
  };

  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <Box
        component="form"
        sx={{ width: "17ch" }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-search"
          // label="Search"
          variant="outlined"
          value={searchInput}
          onChange={handleChange}
          placeholder="Search"
          size="small"
        />
      </Box>
    </Box>
  );
}
