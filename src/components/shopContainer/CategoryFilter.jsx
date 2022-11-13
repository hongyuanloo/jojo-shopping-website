import { CATEGORIES } from "./constants";
import {
  InputLabelContainer,
  MenuItemContainer,
  SelectContainer,
} from "../../styles/shopContainer";
import { Box, FormControl } from "@mui/material";

export default function CategoryFilter({ category, setCategory }) {
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

  function displayCategoriesList() {
    const categoriesList = Object.keys(CATEGORIES);
    return categoriesList.map((category) => {
      return (
        <MenuItemContainer key={category} value={category}>
          {category}
        </MenuItemContainer>
      );
    });
  }

  return (
    <Box sx={{ width: 140 }} px={2}>
      <FormControl fullWidth size="small">
        <InputLabelContainer id="category-select-label">
          Category
        </InputLabelContainer>

        <SelectContainer
          labelId="category-select-label"
          id="category-select"
          value={category.selection}
          label="Category"
          onChange={handleChangeCategory}
        >
          {displayCategoriesList()}
        </SelectContainer>
      </FormControl>
    </Box>
  );
}
