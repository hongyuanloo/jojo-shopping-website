import { SORTBY } from "./constants";
import { useState } from "react";
import {
  InputLabelContainer,
  MenuItemContainer,
  SelectContainer,
} from "../../styles/shopContainer";
import { Box, FormControl } from "@mui/material";

export default function SortByFilter({ productsData, setProductsData }) {
  const [sortBySelection, setSortBySelection] = useState(SORTBY.TitleAtoZ);

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

  function displaySortByList() {
    const sortByList = Object.keys(SORTBY);
    return sortByList.map((sortItem) => {
      return (
        <MenuItemContainer key={SORTBY[sortItem]} value={SORTBY[sortItem]}>
          {SORTBY[sortItem]}
        </MenuItemContainer>
      );
    });
  }

  return (
    <Box sx={{ width: 140 }} px={2}>
      <FormControl fullWidth size="small">
        <InputLabelContainer id="sortby-select-label">
          Sort by
        </InputLabelContainer>

        <SelectContainer
          labelId="sortby-select-label"
          id="sortby-select"
          value={sortBySelection}
          label="Sort by"
          onChange={handleChangeSortBy}
        >
          {displaySortByList()}
        </SelectContainer>
      </FormControl>
    </Box>
  );
}
