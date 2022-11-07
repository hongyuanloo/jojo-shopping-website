import { Box, styled, Typography } from "@mui/material";

export default function Announcement() {
  const StyleTypography = styled(Typography)(({ theme }) => ({
    fontSize: 13,
    color: theme.palette.text.secondary,
  }));

  return (
    <Box
      sx={{
        height: 30,
        backgroundColor: "#F5F2EB",
        // "&:hover": {
        //   backgroundColor: "#F5F2EB",
        //   opacity: 0.8,
        // },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyleTypography>{`Free Shipping on Orders Over $150`}</StyleTypography>
    </Box>
  );
}
