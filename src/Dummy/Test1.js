import {
  // Grid,
  // Select,
  // Typography,
  Stack,
  Box,
  // FormControl,
  // InputLabel,
  // MenuItem,
} from "@mui/material";

export default function Test1() {
  // const classes = useStyles();
  const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  function sort() {
    // items.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase());
    items.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    console.log("items1: ", items);
  }
  return (
    // sx={{ width: "100%" }}
    // justifyContent:"center"
    <Box
      sx={{
        border: "2px dotted green",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box>asda</Box>
      {sort()}
      <Box
        sx={{
          width: "50%",
          border: "2px solid green",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack spacing={2} sx={{ border: "2px solid red" }} alignItems="center">
          <Box sx={{ border: "2px solid blue" }}>Item 1</Box>
          <Box sx={{ border: "2px solid blue" }}>Item 2</Box>
          <Box sx={{ border: "2px solid blue" }}>Item 3</Box>
        </Stack>
      </Box>
    </Box>
  );
}

// <Stack sx={{ justifyContent: "flex-start" }}>
// <Box sx={{ minWidth: 140 }}>
//   <FormControl fullWidth>
//     <InputLabel id="demo-simple-select-label">Category</InputLabel>
//     <Select
//       labelId="demo-simple-select-label"
//       id="demo-simple-select"
//       value={age}
//       label="Age"
//       onChange={handleChange}
//     >
//       <MenuItem value={"Clothes"}>Clothes</MenuItem>
//       <MenuItem value={"Electronics"}>Electronics</MenuItem>
//       <MenuItem value={"Furniture"}>Furniture</MenuItem>
//       <MenuItem value={"Shoes"}>Shoes</MenuItem>
//       <MenuItem value={"Others"}>Others</MenuItem>
//     </Select>
//   </FormControl>
// </Box>
// </Stack>
// <Box>Categories</Box>
// <Box>Clothes</Box>
