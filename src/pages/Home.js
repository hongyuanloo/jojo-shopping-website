import Announcement from "../components/Announcement";
import NavigationBar from "../components/NavigationBar";
import { Box } from "@mui/material";
import Banner from "../components/banner";
import AutoSlider from "../components/autoSlider";
import CardContainer from "../components/CardContainer";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Box>
        <Announcement />
        <NavigationBar />
        <Banner />
        <AutoSlider />
        <CardContainer />
        <Footer />
      </Box>
    </>
  );
}
